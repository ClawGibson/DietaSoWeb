import React, { useState, useEffect } from 'react';
import { Card, Col, Input, Row, Button, Modal, Select } from 'antd';
// import { addAuthorizationAction } from '../../../redux/actions/authorizationAction';
import apiURL from '../../../axios/axiosConfig';
import {
    PlusOutlined,
    ExclamationCircleOutlined,
    DeleteOutlined,
    EditOutlined,
    GlobalOutlined,
    UserOutlined,
} from '@ant-design/icons';

import './Metas.scss';



const Metas = () => {
    const [objetivo, setObjetivo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [categoriaDeSostenibilidad, setCategoriaDeSostenibilidad] = useState('');
    const [metas, setMetas] = useState([]);
    useEffect(() => {

        getMetas();

        return () => {
            setMetas([]);

        };
    }, []);
    const getMetas = async () => {
        try {
            const { data } = await apiURL.get('/metas');
            console.log(data);
            setMetas(data);

        } catch (error) {

            console.groupCollapsed('Error xd');
            console.error(error);
            console.groupEnd();

        }

    };
    function obtenerCategoria(categoria) {
        setCategoriaDeSostenibilidad(categoria);
    }
    const postMetas = async () => {
        const meta = { objetivo, descripcion, categoriaDeSostenibilidad };

        console.log(meta);
        try {
            const response = await apiURL.post('/Metas', meta);
        } catch (error) {
            console.error(error);
        }
    }
    //ADVERT
    const { confirm } = Modal;
    function showDeleteConfirm() {
        confirm({
            title: '¿Estás seguro de que quieres eliminar?',
            icon: <ExclamationCircleOutlined />,
            content: 'Los cambios no serán reversibles',
            okText: 'Si',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    //MODAL
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        postMetas();
        setIsModalVisible(false);

    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    //TEXTAREA
    const { TextArea } = Input;
    //SELECT
    const { Option } = Select;

    // function handleChange(value) {
    //     console.log(`selected ${value}`);
    // }
    return (
        <div class='main-M'>

            <Row>
                <Col span={22} style={{ padding: 16 }}>
                    <h1> Metas</h1>
                </Col>
                <Col span={2} style={{ padding: 16 }}>
                    <Button
                        onClick={showModal}
                        type='primary'
                        shape='circle'
                        icon={<PlusOutlined />}
                    />
                </Col>
            </Row>
            <div class='grid_metas'>
                {
                    metas.length > 0 &&
                    metas.map((meta) =>
                        <div class='sc_metas'>
                            <Card title={meta.objetivo}>
                                <div class='sc_metas_desc'>
                                    {`${meta.descripcion}`}
                                </div>
                                <div class='sc_metas_cat'>
                                    {`${meta.categoriaDeSostenibilidad}`}
                                </div>
                            </Card>
                        </div>

                    )
                }
            </div>



            <Modal
                title='Agregar una nueva Meta'
                visible={isModalVisible}
                onCancel={handleCancel}
                onOk={handleOk}>
                <Row>
                    <Col span={6} style={{ padding: 16 }}>
                        <p>Objetivo:</p>
                    </Col>
                    <Col span={18} style={{ padding: 16 }}>
                        <Input placeholder='Objetivo de la Meta' onChange={(e) => setObjetivo(e.target.value)} />
                    </Col>
                </Row>
                <Row>
                    <Col span={6} style={{ padding: 16 }}>
                        <p>Descripción:</p>
                    </Col>
                    <Col span={18} style={{ padding: 16 }}>
                        <TextArea
                            placeholder='Descripción de la Meta'
                            autoSize
                            onChange={(e) => setDescripcion(e.target.value)} />
                        <div style={{ margin: '24px 0' }} />
                    </Col>
                </Row>
                <Row>
                    <Col span={6} style={{ padding: 7 }}>
                        <p>Categoria de Sostenibilidad:</p>
                    </Col>
                    <Col span={6} style={{ padding: 16 }}>
                        <Select id="categoriaMeta" defaultValue='cultura' style={{ width: 120 }} onChange={obtenerCategoria}>
                            <Option value='cultura'>Cultura</Option>
                            <Option value='sociedad'>Sociedad</Option>
                            <Option value='Economia'>Economía</Option>
                            <Option value='ambiental'>Ambiental</Option>
                            <Option value='nutricional'>Nutricional</Option>
                        </Select>
                    </Col>
                </Row>
            </Modal>
        </div>
    );
};

export default Metas;
