import React, { useState, useEffect } from 'react';
import { Card, Col, Row, Button, Modal, Image, message } from 'antd';
import {  DeleteOutlined,EditOutlined,ExclamationCircleOutlined,UserOutlined } from '@ant-design/icons';
import apiURL from '../../../axios/axiosConfig'




const CardsComponent = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
      setIsModalVisible(true);
    };

    function getReminders(){
        
    }
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
    
    const [list, setList] = useState([]);
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        try {
            const { data } = await apiURL.get('/recordatorios');
            
            setList(data);
            console.log(list);
        } catch (error) {
            message.error(`Error: ${error.message}`);
        }
    };
    console.log(list);

    return (
        <div scroll={{}}>
            <Row>
                { list.map( recordatorios => (
                    <Col span={6}>
                    <Card style={{ marginTop: 16 }} type="inner" title={
                            <Row>
                            <Col span={4} style={{ padding: 5 }}>
                                <Button style={{}}  type="primary" shape="circle"  icon={<UserOutlined />} />
                                
                            </Col>
                            <Col span={12} style={{ padding: 5 }}>
                                <h4 class="plistaR" >Recordatorios</h4>
                            </Col>
                            <Col span={4} style={{ padding: 5 }}>
                                <Button style={{}}  type="primary" shape="circle" onClick={showModal}  icon={<EditOutlined />} />
                            </Col>
                            <Col span={4} style={{ padding: 5 }}>
                                <Button style={{}}  type="primary" shape="circle" onClick={showDeleteConfirm}  icon={<DeleteOutlined />} />
                            </Col>
                            </Row>
                        }>
                        <Row>
                            <Col span={12}>
                            <Image id='img'
                                    width={150}
                                    
                                    src="https://dalissanavarro.files.wordpress.com/2018/10/recordatorio.jpg"
                                />
                    
                            </Col>
                            <Col span={12}>
                                <p>Meta: {recordatorios.metas}</p>
                                <p>Titulo: {recordatorios.titulo}</p>
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
}

export default CardsComponent;