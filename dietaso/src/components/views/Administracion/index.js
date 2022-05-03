import React, { useState, useEffect } from 'react';

import UploadImg from '../../commons/UploadImgs';
import apiURL from '../../../axios/axiosConfig';

import { Switch, message, Input, Button, Form } from 'antd';
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';

import './Administracion.scss';

const Administracion = () => {
    const [dataPiramide, setDataPiramide] = useState([]);
    const [form] = Form.useForm();
    const [imagenes, setImagenes] = useState([]);
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
        getData();
        fetchImagenes();
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

    const fetchImagenes = async () => {
        try {
            const { data } = await apiURL.get('piramide');

            setImagenes(data);
        } catch (error) {
            console.log(error);
        }
    };

    const handlePatch = async (props) => {
        try {
            const body = getCurrentBody(props.key, props.value);

            const { data, status } = await apiURL.patch('opcionesEdicion', body);
            console.log(data);
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

            const findIndex = imagenes.findIndex((obj) => obj.nivel === values.nivel);
            const toPatch = imagenes[findIndex];

            const body = {
                nivel: values.nivel,
                url: values.url,
            };

            console.log(imagenes);
            if (toPatch !== -1) {
                const id = toPatch._id;
                console.log(id, '->', toPatch);
                const { data, status } = await apiURL.patch(`piramide/${id}`, body);

                if (status === 200) message.success('Se actualizó correctamente');
            } else {
                console.log('nel');
            }

            /* const { data, status } = await apiURL.post('piramide', body);
            console.log({ data, status }); */
        } catch (error) {
            console.log(error);
        }
    };

    const borrar = async (values) => {
        try {
            console.log(values);

            const findIndex = imagenes.findIndex((obj) => obj.nivel === values.nivel);
            const toPatch = imagenes[findIndex];

            const body = {
                nivel: values.nivel,
                url: values.url,
            };

            console.log(imagenes);
            if (toPatch !== -1) {
                const id = toPatch._id;

                const { data, status } = await apiURL.patch(
                    `piramide/editarImagenes/url?id=${id}&url=${values.url}`,
                    body
                );

                if (status === 200) message.success('Se actualizó correctamente');
            } else {
                console.log('nel');
            }

            /* const { data, status } = await apiURL.post('piramide', body);
            console.log({ data, status }); */
        } catch (error) {
            console.log(error);
        }
    };

    const getData = async () => {
        const { data, status } = await apiURL.get('piramide');
        console.log(data);
        setDataPiramide(data);
    };

    return (
        <div className='main-Administracion'>
            <div className='primerosDos'>
                <div className='segundo'>
                    <label className='texto'>OFF</label>
                    <Switch className='switch' />
                    <label className='texto'>ON</label>
                </div>
                <div className='primero'>
                    <div className='labels'>
                        <label className='texto'>Informacion personal</label>
                        <label class='texto'>Circunferencia</label>
                        <label className='texto'>Campos corporales</label>
                        <label className='texto'>Estado general</label>
                        <label className='texto'>Exposicion solar</label>
                        <label className='texto'>Gastro intestinal</label>
                        <label className='texto'>Bioquimicos</label>
                        <label className='texto'>Clinicos</label>
                        <label className='texto'>Sueño</label>
                    </div>

                    <div className='switches'>
                        <Switch
                            className='switch'
                            checked={updateStates.informacionPersonal}
                            onChange={(s) => handlePatch({ key: 1, value: s })}
                        />
                        <Switch
                            className='switch'
                            checked={updateStates.circunferencia}
                            onChange={(s) => handlePatch({ key: 2, value: s })}
                        />
                        <Switch
                            className='switch'
                            checked={updateStates.camposCorporales}
                            onChange={(s) => handlePatch({ key: 3, value: s })}
                        />
                        <Switch
                            className='switch'
                            checked={updateStates.estadoGeneral}
                            onChange={(s) => handlePatch({ key: 4, value: s })}
                        />
                        <Switch
                            className='switch'
                            checked={updateStates.exposicionSolar}
                            onChange={(s) => handlePatch({ key: 5, value: s })}
                        />
                        <Switch
                            className='switch'
                            checked={updateStates.gastroIntestinal}
                            onChange={(s) => handlePatch({ key: 6, value: s })}
                        />
                        <Switch
                            className='switch'
                            checked={updateStates.bioquimicos}
                            onChange={(s) => handlePatch({ key: 7, value: s })}
                        />
                        <Switch
                            className='switch'
                            checked={updateStates.clinicos}
                            onChange={(s) => handlePatch({ key: 8, value: s })}
                        />
                        <Switch
                            className='switch'
                            checked={updateStates.sueno}
                            onChange={(s) => handlePatch({ key: 9, value: s })}
                        />
                    </div>
                </div>
            </div>
            <div className='tercero'>
                <div className='dataInput'>
                    <Form form={form} onFinish={onFinish} className='form'>
                        <Form.Item name='nivel' label='Nivel'>
                            <Input type={'number'} min={0} max={5} />
                        </Form.Item>
                        <Form.Item name='url' label='URL'>
                            <Input />
                        </Form.Item>
                        <div className='btnera'>
                            <Button htmlType='submit' type='primary' id='btnSubir'>
                                Subir
                            </Button>
                        </div>
                    </Form>
                </div>
                <div className='levels'>
                    <label id='titleLvl'>Lvl 5</label>
                    <div className='lvl'>
                        <div className='imagenes'>Imagenes</div>
                    </div>
                    <label id='titleLvl'>Lvl 4</label>
                    <div className='lvl'>
                        <div className='imagenes'>Imagenes</div>
                    </div>
                    <label id='titleLvl'>Lvl 3</label>
                    <div className='lvl'>
                        <div className='imagenes'>Imagenes</div>
                    </div>
                    <label id='titleLvl'>Lvl 2</label>
                    <div className='lvl'>
                        <div className='imagenes'>Imagenes</div>
                    </div>
                    <label id='titleLvl'>Lvl 1</label>
                    <div className='lvl'>
                        <div className='imagenes'>Imagenes</div>
                    </div>
                    <label id='titleLvl'>Lvl 0</label>
                    <div className='lvl'>
                        {/*<LeftCircleOutlined id='arrowIcon' />*/}
                        <div className='imagenes'>
                            {dataPiramide.map((data, index) => {
                                if (data.nivel == 0) {
                                    console.log(data.url[0]);
                                    console.log(index);
                                    return <img src={data.url[0]} id='imagenNivel' />;
                                }
                            })}
                        </div>
                        {/*<RightCircleOutlined id='arrowIcon' />*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Administracion;
