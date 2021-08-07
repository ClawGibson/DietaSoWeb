/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

import apiURL from '../../../axios/axiosConfig';

import DataLayout from '../../layouts/DataLayout';
import ImportData from '../../commons/ImportData';

const Home = () => {
    const [fileData, setFileData] = useState([]);

    useEffect(() => {
        // eslint-disable-next-line no-unused-expressions
        fileData.length > 0
            ? fileData.map(async (row) => {
                  const values = Object.values(row);

                  const dataToSend = {
                      alimento: values[0],
                      cantidadSugerida: values[1],
                      unidad: values[2],
                      pesoNeto: values[3],
                      grupoAlimento: values[4],
                  };

                  try {
                      const response = await apiURL.post(
                          '/equivalencias',
                          dataToSend
                      );
                  } catch (e) {
                      console.log(e);
                  }
              })
            : null;
    }, [fileData]);

    const onSuccess = (data) => {
        setFileData(data);
    };
    return (
        <DataLayout>
            <ImportData onSuccess={onSuccess} />
        </DataLayout>
    );
};

export default Home;
