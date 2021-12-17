import React, { useEffect, useState } from 'react';
import { Col, Calendar, Input, Row, Button, Modal, Select, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import '../../commons/RemindersComponent/RowComponent'
import apiURL from '../../../axios/axiosConfig' 




const RowComponent = () => {
    const [listUsers, setlistUsers] = useState([]);
    const [listEmails, setlistEmails] = useState();
    useEffect(() => {
      fetchData();
      
    }, [])
    const fetchData = async () => {
      try {
          const { data } = await apiURL.get('/usuarios');
          setlistUsers(data);
          
          console.log(listUsers);
      } catch (error) {
          message.error(`Error: ${error.message}`);
      }
    };

    listUsers.map((users )=> {
        
      console.log(users.email)
      
    }) 
    
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
        <Select
          mode="multiple"
          style={{ width: '100%' }}
          placeholder="Seleccionar usuarios"
          
          onChange={handleChange}
          optionLabelProp="label"
        >
          { listUsers.map(users => (
            <Option>
              <div className="demo-option-label-item">
                {users.email} 
              </div>
            </Option>
          ))}   
          
        </Select>
        <Select defaultValue="categoria" style={{ width: '100%' }} >
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