import React from 'react';

import { Table } from 'antd';

const PointsTable = ({ exercises, setSelectedExercise }) => {
    return (
        <Table
            rowKey='_id'
            columns={columns}
            dataSource={exercises}
            scroll={{ y: 300 }}
            onRow={(record) => {
                return {
                    onClick: () => {
                        setSelectedExercise(record);
                    },
                };
            }}
        />
    );
};

export default PointsTable;

export const columns = [
    {
        title: 'Ejercicio',
        dataIndex: [ 'ejercicio', 'nombre' ],
        key: 'nombre',
    },
    {
        title: 'Categoria',
        dataIndex: [ 'ejercicio', 'categoria' ],
        key: 'categoria',
    },
    {
        title: 'Intensidad',
        dataIndex: 'intensidad',
        key: 'intensidad',
    },
    {
        title: 'Puntos',
        dataIndex: 'puntos',
        key: 'puntos',
    },
];
