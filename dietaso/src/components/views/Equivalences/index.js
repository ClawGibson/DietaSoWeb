/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

import ButtonsArea from '../../commons/ButtonsArea';
import DataLayout from '../../layouts/DataLayout';
import EquivalencesTable from './EquivalencesTable';

const Equivalences = () => {
  const [loading, setLoading] = useState(false);
  const [equivalences, setEquivalences] = useState([]);
  const [xlsxData, setXlsxData] = useState([]);
  const [xlsxColumns, setXlsxColumns] = useState([]);

  const axios = require('axios');

  useEffect(() => {
    fetchEquivalences();
    return () => {
      setEquivalences([]);
    };
  }, []);

  useEffect(() => {
    if (!!equivalences.length) {
      const _data = equivalences.map((item) => ({
        alimento: (item?.alimento && item.alimento) || 'N/A',
        cantidadSugerida:
          (item?.cantidadSugerida && item.cantidadSugerida) || 'N/A',
        unidad: (item?.unidad && item.unidad) || 'N/A',
        pesoNetoKg: (item?.pesoNetoKg && item?.pesoNetoKg) || 'N/A',
      }));
      const _columns = columns.filter(
        (item) => !['actions', 'pdf'].includes(item.key)
      );
      setXlsxData(_data);
      setXlsxColumns(_columns);
    }
    return () => {
      setXlsxData([]);
      setXlsxColumns([]);
    };
  }, [equivalences]);

  const fetchEquivalences = async () => {
    setLoading(true);
    const config = {
      headers: { Authorization: `Bearer ${process.env.REACT_APP_TOKEN}` },
    };
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/equivalencias`,
      config
    );
    setEquivalences(response.data);
    setLoading(false);
  };

  return (
    <DataLayout>
      <div style={{ padding: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h1>Equivalencias</h1>
          <ButtonsArea
            xlsxData={{
              columns: xlsxColumns,
              data: xlsxData,
              fileName: 'Equivalencias',
            }}
          />
        </div>
        {loading ? (
          <p>Cargando...</p>
        ) : (
          <EquivalencesTable columns={columns} data={equivalences} />
        )}
      </div>
    </DataLayout>
  );
};

export default Equivalences;

export const columns = [
  {
    title: 'Alimento',
    dataIndex: 'alimento',
    width: 50,
    key: 'alimento',
    sorter: (a, b) => {
      return a.alimento.localeCompare(b.alimento);
    },
  },
  {
    title: 'Cantidad sugerida',
    dataIndex: 'cantidadSugerida',
    width: 50,
    key: 'cantidadSugerida',
  },
  {
    title: 'Unidad',
    dataIndex: 'unidad',
    width: 30,
    key: 'unidad',
    sorter: (a, b) => a.unidad.length - b.unidad.length,
  },
  {
    title: 'Peso neto (kg)',
    dataIndex: 'pesoNetoKg',
    width: 50,
    key: 'pesoNetoKg',
    sorter: (a, b) => a.pesoNetoKg - b.pesoNetoKg,
  },
];
