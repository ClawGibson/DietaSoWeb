import React, { useState, useEffect } from 'react';

import apiURL from '../../../axios/axiosConfig';

import { Switch, message, Input, Button, Form } from 'antd';

import './Administracion.scss';

const Administracion = () => {
    const [form] = Form.useForm();
    const [updateStates, setUpdateStates] = useState({
        bioquimicos: false,
        circunferencia: false,
        camposCorporales: false,
        gastrointestinal: false,
        clinicos: false,
        sueno: false,
        exposicionSolar: false,
        estadoGeneral: false,
        informacionPersonal: false,
    });

    useEffect(() => {
        getOpcionesEdicion();
    }, []);

    const getOpcionesEdicion = async () => {
        try {
            const { data } = await apiURL.get('/opcionesEdicion');

            const {
                bioquimicos,
                camposCorporales,
                circunferencia,
                clinicos,
                estadoGeneral,
                exposicionSolar,
                gastroIntestinal,
                informacionPersonal,
                sueno,
            } = data[0];

            setUpdateStates({
                bioquimicos,
                camposCorporales,
                circunferencia,
                clinicos,
                estadoGeneral,
                exposicionSolar,
                gastroIntestinal,
                informacionPersonal,
                sueno,
            });
        } catch (error) {
            console.groupCollapsed('Error xd');
            console.error(error);
            console.groupEnd();
        }
    };

    const handlePatch = async (props) => {
        try {
            const body = getCurrentBody(props.key, props.value);

            const { data, status } = await apiURL.patch('opcionesEdicion', body);

            getOpcionesEdicion();
            if (status === 200) message.success('Se actualizó correctamente');
        } catch (error) {
            console.error(error);
        }
    };

    const getCurrentBody = (key, value) => {
        switch (key) {
            case 1:
                setUpdateStates((prevState) => {
                    return { ...prevState, informacionPersonal: value };
                });
                return { informacionPersonal: value };
            case 2:
                setUpdateStates((prevState) => {
                    return { ...prevState, circunferencia: value };
                });
                return { circunferencia: value };
            case 3:
                setUpdateStates((prevState) => {
                    return { ...prevState, camposCorporales: value };
                });
                return { camposCorporales: value };
            case 4:
                setUpdateStates((prevState) => {
                    return { ...prevState, estadoGeneral: value };
                });
                return { estadoGeneral: value };
            case 5:
                setUpdateStates((prevState) => {
                    return { ...prevState, exposicionSolar: value };
                });
                return { exposicionSolar: value };
            case 6:
                setUpdateStates((prevState) => {
                    return { ...prevState, gastrointestinal: value };
                });
                return { gastroIntestinal: value };
            case 7:
                setUpdateStates((prevState) => {
                    return { ...prevState, bioquimicos: value };
                });
                return { bioquimicos: value };
            case 8:
                setUpdateStates((prevState) => {
                    return { ...prevState, clinicos: value };
                });
                return { clinicos: value };
            case 9:
                setUpdateStates((prevState) => {
                    return { ...prevState, sueno: value };
                });
                return { sueno: value };
            default:
                break;
        }
    };

    const onFinish = async (values) => {
        try {
            console.log(values);
            const body = {
                nivel: values.nivel,
                url: values.url,
            };
            const { data, status } = await apiURL.post('piramide', body);
            console.log({ data, status });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='main-Administracion'>
            <div className='primerosDos'>
                <div className='primero'>
                    <label className='texto'>Informacion personal</label>
                    <Switch
                        className='switch'
                        checked={updateStates.informacionPersonal}
                        onChange={(s) => handlePatch({ key: 1, value: s })}
                    />

                    <label class='texto'>Circunferencia</label>
                    <Switch
                        className='switch'
                        checked={updateStates.circunferencia}
                        onChange={(s) => handlePatch({ key: 2, value: s })}
                    />

                    <label className='texto'>Campos corporales</label>
                    <Switch
                        className='switch'
                        checked={updateStates.camposCorporales}
                        onChange={(s) => handlePatch({ key: 3, value: s })}
                    />

                    <label className='texto'>Estado general</label>
                    <Switch
                        className='switch'
                        checked={updateStates.estadoGeneral}
                        onChange={(s) => handlePatch({ key: 4, value: s })}
                    />

                    <label className='texto'>Exposicion solar</label>
                    <Switch
                        className='switch'
                        checked={updateStates.exposicionSolar}
                        onChange={(s) => handlePatch({ key: 5, value: s })}
                    />

                    <label className='texto'>Gastro intestinal</label>
                    <Switch
                        className='switch'
                        checked={updateStates.gastroIntestinal}
                        onChange={(s) => handlePatch({ key: 6, value: s })}
                    />

                    <label className='texto'>Bioquimicos</label>
                    <Switch
                        className='switch'
                        checked={updateStates.bioquimicos}
                        onChange={(s) => handlePatch({ key: 7, value: s })}
                    />

                    <label className='texto'>Clinicos</label>
                    <Switch
                        className='switch'
                        checked={updateStates.clinicos}
                        onChange={(s) => handlePatch({ key: 8, value: s })}
                    />

                    <label className='texto'>Sueño</label>
                    <Switch
                        className='switch'
                        checked={updateStates.sueno}
                        onChange={(s) => handlePatch({ key: 9, value: s })}
                    />
                </div>
                <div className='segundo'>
                    <label className='texto'>OFF</label>
                    <Switch className='switch' />
                    <label className='texto'>ON</label>
                </div>
            </div>
            <div className='tercero'>
                <div>
                    <Form form={form} onFinish={onFinish}>
                        <Form.Item name='nivel' label='nivel'>
                            <Input type={'number'} min={0} max={5} />
                        </Form.Item>
                        <Form.Item name='url' label='url'>
                            <Input />
                        </Form.Item>
                        <Button htmlType='submit'>Subir</Button>
                    </Form>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Administracion;
