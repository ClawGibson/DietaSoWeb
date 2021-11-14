import React, { useState, useEffect } from 'react';

import { Button, message, Table, Form, Input, InputNumber } from 'antd';
import apiURL from '../../../axios/axiosConfig';

import Dropdown from '../../commons/Dropdown';

import './Imports.scss';
import PointsTable from './PointsTable';

import { Rules } from '../../../utils/formRules';

const Imports = () => {
    const [ form ] = Form.useForm();
    const [ exercises, setExercises ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ selectedExercise, setSelectedExercise ] = useState({});

    useEffect(() => {
        fetchExcerises();
        return () => {
            setLoading(false);
            setSelectedExercise({});
        };
    }, []);

    const fetchExcerises = async () => {
        try {
            const { data } = await apiURL.get('/puntosPorEjercicio/all');

            setExercises(data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            message.error('Error al cargar los datos, refresque la ventana');
            setLoading(false);
        }
    };

    const onFinish = (values) => {
        console.log(values);
        setLoading(false);
    };

    const postData = async (food, index) => {
        try {
        } catch (error) {
            console.log('Error', error);
            message.error('Error al subir el archivo');
            setLoading(false);
        }
    };

    const onChange = (value, index) => {
        console.log(value);
    };

    return (
        <div className='pointsPerFood'>
            <div className='informationArea'>
                <div className='selectedExcercise'>
                    <h2>Información del ejercicio seleccionado</h2>
                    <h4>Ejercicio</h4>
                    <Input
                        placeholder='Lagartijas'
                        value={selectedExercise?.ejercicio?.nombre}
                    />
                    <h4>Categoria</h4>
                    <Dropdown
                        data={types}
                        onChange={onChange}
                        defaultOption={selectedExercise?.grupo}
                        placeholder='Cardiovasculares'
                    />
                    <h4>Duración</h4>
                    <Dropdown
                        data={duration}
                        onChange={onChange}
                        placeholder='Menos de 10'
                        defaultOption={selectedExercise?.duracion}
                    />
                    <h4>Intensidad</h4>
                    <Dropdown
                        data={intensity}
                        onChange={onChange}
                        placeholder='Leve'
                        defaultOption={selectedExercise?.intensidad}
                    />
                    <h4>Puntos</h4>
                    <InputNumber
                        value={selectedExercise?.puntos}
                        placeholder='0.5'
                        min={0}
                        max={100}
                        type='number'
                    />
                </div>
                <div className='formArea'>
                    <h2>Agregar nuevo</h2>
                    <Form
                        form={form}
                        onFinish={onFinish}
                        layout='vertical'
                        requiredMark='optional'>
                        <Form.Item
                            name='ejercicio'
                            label='Ejercicio'
                            rules={[ Rules.basic ]}>
                            <Input placeholder='Lagartijas' />
                        </Form.Item>
                        <Form.Item
                            name='grupo'
                            label='Grupo'
                            rules={[ Rules.basic ]}>
                            <Dropdown
                                data={types}
                                placeholder='Cardiovasculares'
                            />
                        </Form.Item>
                        <Form.Item
                            name='duration'
                            label='Duración'
                            rules={[ Rules.basic ]}>
                            <Dropdown
                                data={duration}
                                placeholder='Menos de 10'
                            />
                        </Form.Item>
                        <Form.Item
                            name='intensidad'
                            label='Intensidad'
                            rules={[ Rules.basic ]}>
                            <Dropdown data={intensity} placeholder='Leve' />
                        </Form.Item>
                        <Form.Item
                            name='puntos'
                            label='Puntos'
                            rules={[ Rules.basic ]}>
                            <InputNumber
                                placeholder='0.5'
                                min={0}
                                max={100}
                                type='number'
                            />
                        </Form.Item>
                        <Button
                            loading={loading}
                            htmlType='submit'
                            type='primary'>
                            Guardar
                        </Button>
                    </Form>
                </div>
            </div>
            <h2>Lista de ejercicios</h2>
            <div className='table-container'>
                <PointsTable
                    exercises={exercises}
                    setSelectedExercise={setSelectedExercise}
                />
            </div>
        </div>
    );
};

export default Imports;

export const types = [
    {
        id: 1,
        description: 'Cardiovasculares',
    },
    {
        id: 2,
        description: 'Resistencia',
    },
];

export const intensity = [
    {
        id: 1,
        description: 'Leve',
    },
    {
        id: 2,
        description: 'Moderada',
    },
    {
        id: 3,
        description: 'Intenso',
    },
];

export const duration = [
    {
        id: 1,
        description: 'Menos de 10',
    },
    {
        id: 2,
        description: 'De 10 a 29',
    },
    {
        id: 3,
        description: 'De 30 a 59',
    },
    {
        id: 4,
        description: 'De 60 a 120',
    },
    {
        id: 5,
        description: 'De 121 a 240',
    },
    {
        id: 6,
        description: 'Más de 240',
    },
];
