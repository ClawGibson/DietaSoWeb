import React, { useState, useEffect } from 'react';
import apiURL from '../../../../axios/axiosConfig';

import { message } from 'antd';
import dayjs from 'dayjs';

import ButtonsArea from '../../../commons/ButtonsArea';

const Demographics = ({ selected = false, loading }) => {
    const [ exportData, setExportData ] = useState([]);
    const [ fileReady, setFileReady ] = useState(false);

    useEffect(() => {
        selected && getExportData();
        return () => {
            setExportData(null);
            setFileReady(false);
        };
    }, [ loading === true ]);

    const getExportData = async () => {
        try {
        } catch (error) {
            setFileReady(false);
            message.error('Error al obtener los datos');
            console.groupCollapsed('[Demographics.jsx]');
            console.log(error);
            console.groupEnd();
        }
    };
    return (
        <ButtonsArea
            fileReady={fileReady}
            xlsxData={{
                columns: columns,
                data: exportData,
                fileName: `Datos demográficos total ${dayjs(new Date()).format(
                    'DD-MM-YYYY'
                )}`,
            }}
        />
    );
};

export default Demographics;

export const columns = [
    {
        title: 'No. Participante',
        dataIndex: 'idPaciente',
        key: 'idPaciente',
        width: 60,
    },
    {
        title: 'Participante',
        dataIndex: 'nombre',
        key: 'nombre',
        width: 100,
    },
    {
        title: 'Fecha de registro',
        dataIndex: 'fechaRegistro',
        key: 'fechaRegistro',
        width: 30,
    },
];
