import React, { useState, useEffect } from 'react';

import {
    Card,
    Space,
    Input,
    Col,
    Row,
    Button,
    Modal,
    Image,
    message,
} from 'antd';
import {
    DeleteOutlined,
    EditOutlined,
    ExclamationCircleOutlined,
    UserOutlined,
} from '@ant-design/icons';
import apiURL from '../../../axios/axiosConfig';

const CardsComponent = () => {
    const [ isModalVisible, setIsModalVisible ] = useState(false);
    const [ initialData, setInitialData ] = useState([]);
    const [ list, setList ] = useState([]);
    const showModal = () => {
        setIsModalVisible(true);
    };

    const { confirm } = Modal;
    const { Search } = Input;

    useEffect(() => {
        fetchData();
    }, []);

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

    const fetchData = async () => {
        try {
            const { data } = await apiURL.get('/recordatorios');
            setInitialData(data);
            setList(data);
            console.log(list);
        } catch (error) {
            message.error(`Error: ${error.message}`);
        }
    };
    console.log(list);

    const onSearch = (target) => {
        console.log(target);
        setList(
            initialData.filter((recordatorios) =>
                recordatorios.titulo.includes(target)
            )
        );
        console.log(target);
    };

    return (
        <div scroll={{}}>
            <Row>
                <Space
                    direction='vertical'
                    style={{ width: '90%' }}>
                    <Search
                        size='large'
                        placeholder='Buscar por titulo de recordatorio'
                        allowClear
                        defaultValue={list}
                        onSearch={onSearch}
                        style={{ width: 1000 }}
                    />
                </Space>
                {list.map((recordatorios) => (
                    <Col span={6}>
                        <Card
                            style={{ marginTop: 16 }}
                            type='inner'
                            title={
                                <Row>
                                    <Col span={4} style={{ padding: 5 }}>
                                        <Button
                                            style={{}}
                                            type='primary'
                                            shape='circle'
                                            icon={<UserOutlined />}
                                        />
                                    </Col>
                                    <Col span={12} style={{ padding: 5 }}>
                                        <h4 className='plistaR'>
                                            {recordatorios.titulo}
                                        </h4>
                                    </Col>
                                    <Col span={4} style={{ padding: 5 }}>
                                        <Button
                                            style={{}}
                                            type='primary'
                                            shape='circle'
                                            onClick={showModal}
                                            icon={<EditOutlined />}
                                        />
                                    </Col>
                                    <Col span={4} style={{ padding: 5 }}>
                                        <Button
                                            style={{}}
                                            type='primary'
                                            shape='circle'
                                            onClick={showDeleteConfirm}
                                            icon={<DeleteOutlined />}
                                        />
                                    </Col>
                                </Row>
                            }>
                            <Row>
                                <Col span={12}>
                                    <Image
                                        id='img'
                                        width={150}
                                        src='https://dalissanavarro.files.wordpress.com/2018/10/recordatorio.jpg'
                                    />
                                </Col>
                                <Col span={12}>
                                    <p>Mensaje: {recordatorios.mensaje}</p>
                                    <p>Categoria: {recordatorios.categoria}</p>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default CardsComponent;
