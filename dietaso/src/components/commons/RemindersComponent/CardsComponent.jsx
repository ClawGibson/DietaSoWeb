import React, { useState } from 'react';
import { Card, Col, Row, Button, Modal } from 'antd';
import {  DeleteOutlined,EditOutlined,ExclamationCircleOutlined,UserOutlined } from '@ant-design/icons';




const CardsComponent = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
      setIsModalVisible(true);
    };
    //ADVERT DELETE
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
  
    return (

        <Card style={{ marginTop: 16 }} type="inner" title={
                    <Row>
                    <Col span={2} style={{ padding: 5 }}>
                        <Button style={{}}  type="primary" shape="circle"  icon={<UserOutlined />} />
                    </Col>
                    <Col span={18} style={{ padding: 5 }}>
                        <h4 class="plistaR" >Recordatorios</h4>
                    </Col>
                    <Col span={2} style={{ padding: 5 }}>
                        <Button style={{}}  type="primary" shape="circle" onClick={showModal}  icon={<EditOutlined />} />
                    </Col>
                    <Col span={2} style={{ padding: 5 }}>
                        <Button style={{}}  type="primary" shape="circle" onClick={showDeleteConfirm}  icon={<DeleteOutlined />} />
                    </Col>
                    </Row>
                    }>
        Este es un recordatorio
        </Card>

        
    );
}

export default CardsComponent;