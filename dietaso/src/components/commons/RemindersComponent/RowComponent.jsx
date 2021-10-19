import React, { useState, useEffect } from 'react';
import { Col, Calendar,message, Input, Row, Button, Modal, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import '../../commons/RemindersComponent/RowComponent'
import apiURL from '../../../axios/axiosConfig';




const RowComponent = () => {
    
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
    //CALENDAR
    function onPanelChange(value, mode) {
      console.log(value, mode);
    }
    return(
      <>
      <Row>
        <Col span={22} style={{ padding: 16 }}><h1> Recordatorios</h1></Col>
        <Col span={2} style={{ padding: 16 }}>
          <Button  onClick={showModal} type="primary" shape="circle"  icon={<PlusOutlined />} />
        </Col>
      </Row>

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
          <Option value="paciente2">Paciente 2</Option>
          <Option value="paciente3">Paciente 3</Option>
          <Option value="paciente4">Paciente 4</Option>
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
      </Modal>
      </>

    );
}

export default RowComponent;