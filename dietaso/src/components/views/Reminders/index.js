
import React, { useState,useEffect } from 'react';
import { message } from 'antd';
import apiURL from '../../../axios/axiosConfig';
import '../../commons/RemindersComponent/RowComponent'

import './reminders.scss';
import RowComponent from '../../commons/RemindersComponent/RowComponent';
import CardsComponent from '../../commons/RemindersComponent/CardsComponent';


const Reminders = () => {
  const [data, setData] = useState([]);
      
    useEffect(() => {
        fetchData();
        return () => {
            setData([]);
        };
    }, []);

    const fetchData = async () => {
        try {
            const { data } = await apiURL.get('/');
            setData(data);
        } catch (error) {
            message.error(`Error: ${error.message}`);
        }
    };


  return <div class="main-R">
          <RowComponent/>
          <CardsComponent/>
          {/*<Row>
            <Col span={22} style={{ padding: 16 }}><h1> Recordatorios</h1></Col>
            <Col span={2} style={{ padding: 16 }}>
              <Button  onClick={showModal} type="primary" shape="circle"  icon={<PlusOutlined />} />
            </Col>
          </Row>
          <Card title="Todos los recordatorios"  >
            
            <div class="sc_recordatorios">
              <Card type="inner"  title={
                                        <Row>
                                          <Col span={2} style={{ padding: 5 }}>
                                            <Button style={{}}  type="primary" shape="circle"  icon={<GlobalOutlined />} />
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
                Este es un recordatorio global
              </Card>
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
              <Card style={{ marginTop: 16 }} type="inner" title={
                                        <Row>
                                          <Col span={2} style={{ padding: 5 }}>
                                            <Button style={{}}  type="primary" shape="circle"  icon={<GlobalOutlined />} />
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
                Este es un recordatorio global
              </Card>
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
              
            </div>
            
          </Card>
          
          
          <Modal title="Agregar nuevo recordatorio" visible={isModalVisible}  onCancel={handleCancel}>
                <Row>
                  <Col span={6} style={{ padding: 16 }}>
                    <p>Nombre:</p>
                  </Col>
                  <Col span={18} style={{ padding: 16 }}>
                    <Input placeholder="Nombre del recordatorio" />
                  </Col>
                </Row>
                <Row>
                  <Col span={6} style={{ padding: 16 }}>
                    <p>Descripción:</p>
                  </Col>
                  <Col span={18} style={{ padding: 16 }}>
                  <TextArea placeholder="Descripción del recordatorio" autoSize />
                    <div style={{ margin: '24px 0' }} />
                  </Col>
                </Row>
                <Select defaultValue="global" style={{ width: 120 }} >
                  <Option value="global">Global</Option>
                  <Option value="paciente1">Paciente 1</Option>
                  
                </Select>
                <Select defaultValue="categoria" style={{ width: 120 }} >
                  <Option value="categoria">Categoría</Option>
                  <Option value="desayuno">Desayuno</Option>
                  <Option value="comida">Comida</Option>
                  <Option value="cena">Cena</Option>
                  <Option value="ejercicio">Ejercicio</Option>
                  <Option value="colacion1">Colacion 1</Option>
                  <Option value="colacion2">Colación 2</Option>
                  <Option value="agua">Agua</Option>
                </Select>
                <div className="site-calendar-demo-card">
                  <Calendar fullscreen={false} onPanelChange={onPanelChange} />
                </div>
              </Modal>*/}
        
    

  </div>;





};

export default Reminders;
