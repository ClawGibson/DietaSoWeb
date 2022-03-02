import React, { useState, useEffect } from 'react';
/**
 * Imports necesarios para evitar errores.
 *
 * Documentación:
 * - https://fix.code-error.com/error-category-is-not-a-registered-scale/
 * */
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

import { stringArrayToNumberArray, returnLabelsByChart } from '../../../../utils';

const Circunferencia = ({ data }) => {
    const [ chartData, setChartData ] = useState(initalData);

    useEffect(() => {
        if (data?.cadera && data?.cintura) {
            const cadera = stringArrayToNumberArray(data?.cadera);
            const cintura = stringArrayToNumberArray(data?.cintura);

            setChartData({
                ...chartData,
                labels: returnLabelsByChart([ 'Cadera', 'Cintura' ], cadera.length / 2),
                datasets: [
                    {
                        ...chartData?.datasets[ 0 ],
                        data: cintura,
                    },
                    {
                        ...chartData?.datasets[ 1 ],
                        data: cadera,
                    },
                ],
            });
        }
        return () => {
            setChartData({});
        };
    }, [ data?.cadera, data?.cintura ]);

    return (
        <Line
            width={750}
            height={500}
            data={chartData}
            options={{
                maintainAspectRatio: false,
                title: {
                    display: true,
                    text: 'Circunferencia',
                    fontSize: 20,
                },
                legend: {
                    display: true,
                    position: 'right',
                },
            }}
        />
    );
};

export default Circunferencia;

export const initalData = {
    labels: [ 'Cintura', 'Cadera' ],
    datasets: [
        {
            label: 'Cintura',
            fill: false,
            lineTension: 0.3,
            backgroundColor: 'rgba(75,255,19,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [],
        },
        {
            label: 'Cadera',
            fill: false,
            lineTension: 0.3,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [],
        },
    ],
};
