import React, { useState } from 'react';
import { Card, Col, Input, Row, Button, Modal, Select } from 'antd';
import {
    PlusOutlined,
    ExclamationCircleOutlined,
    DeleteOutlined,
    EditOutlined,
    GlobalOutlined,
    UserOutlined,
} from '@ant-design/icons';

//import './reminders.scss';

const Metas = () => {
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
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    //TEXTAREA
    const { TextArea } = Input;
    //SELECT
    const { Option } = Select;

    function handleChange(value) {
        console.log(`selected ${value}`);
    }
    return (
        <div class='main-R'>
            <Row>
                <Col span={22} style={{ padding: 16 }}>
                    <h1> Recordatorios</h1>
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

            <Card title='Todas las Metas'>
                <div class='sc_metas'>
                    <Card
                        type='inner'
                        title={
                            <Row>
                                <Col span={2} style={{ padding: 5 }}>
                                    <Button
                                        style={{}}
                                        type='primary'
                                        shape='circle'
                                        icon={<GlobalOutlined />}
                                    />
                                </Col>
                                <Col span={18} style={{ padding: 5 }}>
                                    <h4 class='plistaR'>Recordatorios</h4>
                                </Col>
                                <Col span={2} style={{ padding: 5 }}>
                                    <Button
                                        style={{}}
                                        type='primary'
                                        shape='circle'
                                        onClick={showModal}
                                        icon={<EditOutlined />}
                                    />
                                </Col>
                                <Col span={2} style={{ padding: 5 }}>
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
                        Este es un recordatorio global
                    </Card>
                    <Card
                        style={{ marginTop: 16 }}
                        type='inner'
                        title={
                            <Row>
                                <Col span={2} style={{ padding: 5 }}>
                                    <Button
                                        style={{}}
                                        type='primary'
                                        shape='circle'
                                        icon={<UserOutlined />}
                                    />
                                </Col>
                                <Col span={18} style={{ padding: 5 }}>
                                    <h4 class='plistaR'>Recordatorios</h4>
                                </Col>
                                <Col span={2} style={{ padding: 5 }}>
                                    <Button
                                        style={{}}
                                        type='primary'
                                        shape='circle'
                                        onClick={showModal}
                                        icon={<EditOutlined />}
                                    />
                                </Col>
                                <Col span={2} style={{ padding: 5 }}>
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
                        Este es un recordatorio
                    </Card>
                    <Card
                        style={{ marginTop: 16 }}
                        type='inner'
                        title={
                            <Row>
                                <Col span={2} style={{ padding: 5 }}>
                                    <Button
                                        style={{}}
                                        type='primary'
                                        shape='circle'
                                        icon={<GlobalOutlined />}
                                    />
                                </Col>
                                <Col span={18} style={{ padding: 5 }}>
                                    <h4 class='plistaR'>Recordatorios</h4>
                                </Col>
                                <Col span={2} style={{ padding: 5 }}>
                                    <Button
                                        style={{}}
                                        type='primary'
                                        shape='circle'
                                        onClick={showModal}
                                        icon={<EditOutlined />}
                                    />
                                </Col>
                                <Col span={2} style={{ padding: 5 }}>
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
                        Este es un recordatorio global
                    </Card>
                    <Card
                        style={{ marginTop: 16 }}
                        type='inner'
                        title={
                            <Row>
                                <Col span={2} style={{ padding: 5 }}>
                                    <Button
                                        style={{}}
                                        type='primary'
                                        shape='circle'
                                        icon={<UserOutlined />}
                                    />
                                </Col>
                                <Col span={18} style={{ padding: 5 }}>
                                    <h4 class='plistaR'>Recordatorios</h4>
                                </Col>
                                <Col span={2} style={{ padding: 5 }}>
                                    <Button
                                        style={{}}
                                        type='primary'
                                        shape='circle'
                                        onClick={showModal}
                                        icon={<EditOutlined />}
                                    />
                                </Col>
                                <Col span={2} style={{ padding: 5 }}>
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
                        Este es un recordatorio
                    </Card>
                </div>
            </Card>

            <Modal
                title='Agregar una nueva Meta'
                visible={isModalVisible}
                onCancel={handleCancel}>
                <Row>
                    <Col span={6} style={{ padding: 16 }}>
                        <p>Objetivo:</p>
                    </Col>
                    <Col span={18} style={{ padding: 16 }}>
                        <Input placeholder='Objetivo de la Meta' />
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
                        />
                        <div style={{ margin: '24px 0' }} />
                    </Col>
                </Row>
                <Row>
                    <Col span={6} style={{ padding: 7 }}>
                        <p>Categoria de Sostenibilidad:</p>
                    </Col>
                    <Col span={6} style={{ padding: 16 }}>
                        <Select defaultValue='cultura' style={{ width: 120 }}>
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
