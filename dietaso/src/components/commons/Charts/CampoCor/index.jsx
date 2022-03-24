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

const CampoCor = ({ data }) => {
    const [ chartData, setChartData ] = useState(initalData);

    useEffect(() => {
        if (data?.porcentGrasa && data?.porcentMasa && data?.porcentAgua && data?.densidadOsea && data?.grasaVisceral && data?.tasaMetabolica && data?.edadMetabolica) {
            const porcentGrasa = stringArrayToNumberArray(data?.porcentGrasa);
            const porcentMasa = stringArrayToNumberArray(data?.porcentMasa);
            const porcentAgua = stringArrayToNumberArray(data?.porcentAgua);
            const densidadOsea = stringArrayToNumberArray(data?.densidadOsea);
            const grasaVisceral = stringArrayToNumberArray(data?.grasaVisceral);
            const tasaMetabolica = stringArrayToNumberArray(data?.tasaMetabolica);
            const edadMetabolica = stringArrayToNumberArray(data?.edadMetabolica);

            setChartData({
                ...chartData,
                labels: returnLabelsByChart([ 'Grasa', 'Masa', 'Agua', 'Osea', 'Visceral', 'Tasa metabolica', 'Edad metabolica' ], porcentGrasa.length / 2),
                datasets: [
                    {
                        ...chartData?.datasets[ 0 ],
                        data: porcentGrasa,
                    },
                    {
                        ...chartData?.datasets[ 1 ],
                        data: porcentMasa,
                    },
                    {
                        ...chartData?.datasets[ 2 ],
                        data: porcentAgua,
                    },
                    {
                        ...chartData?.datasets[ 3 ],
                        data: densidadOsea,
                    },
                    {
                        ...chartData?.datasets[ 4 ],
                        data: grasaVisceral,
                    },
                    {
                        ...chartData?.datasets[ 5 ],
                        data: tasaMetabolica,
                    },
                    {
                        ...chartData?.datasets[ 6 ],
                        data: edadMetabolica,
                    },
                ],
            });
        }
        return () => {
            setChartData({});
        };
    }, [ data?.porcentGrasa, data?.porcentMasa, data?.porcentAgua, data?.densidadOsea, data?.grasaVisceral, data?.tasaMetabolica, data?.edadMetabolica]);

    return (
        <Line
            width={750}
            height={500}
            data={chartData}
            options={{
                maintainAspectRatio: false,
                title: {
                    display: true,
                    text: 'Campos Corporales',
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

export default CampoCor;

export const initalData = {
    labels: [ 'Grasa', 'Masa', 'Agua', 'Osea', 'Visceral', 'Tasa metabolica', 'Edad metabolica' ],
    datasets: [
        {
            label: 'Grasa',
            fill: false,
            lineTension: 0.3,
            backgroundColor: 'rgba(75,255,19,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [],
        },
        {
            label: 'Masa',
            fill: false,
            lineTension: 0.3,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [],
        },
        {
            label: 'Agua',
            fill: false,
            lineTension: 0.3,
            backgroundColor: 'rgba(75,19,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [],
        },
        {
            label: 'Osea',
            fill: false,
            lineTension: 0.3,
            backgroundColor: 'rgba(175,19,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [],
        },
        {
            label: 'Visceral',
            fill: false,
            lineTension: 0.3,
            backgroundColor: 'rgba(250,19,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [],
        },
        {
            label: 'Tasa metabolica',
            fill: false,
            lineTension: 0.3,
            backgroundColor: 'rgba(250,219,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [],
        },
        {
            label: 'Edad metabolica',
            fill: false,
            lineTension: 0.3,
            backgroundColor: 'rgba(200,200,25,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [],
        },
    ],
};
