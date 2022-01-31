import React, { useEffect, useState } from 'react';
import { Col, Calendar, Input, Row, Button, Modal, Select, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import '../../commons/RemindersComponent/RowComponent'
import apiURL from '../../../axios/axiosConfig' 




const RowComponent = () => {
    const [listUsers, setlistUsers] = useState([]);
    const [listUsersPut, setlistUsersput] = useState([]);
    const [listRecor, setListRecor] = useState([]);
    const [listUsersEmails, setlistUsersEmails] = useState([]);
    const [titulo, setTitulo] = useState("");
    const [msj, setMsj] = useState("");
    const [categoria, setCategoria] = useState("");

    console.log(categoria);
    //const [state, setState] = useState();
    useEffect(() => {
      fetchData();
      
    }, [])
    const fetchData = async () => {
      /*try {
          const { data } = await apiURL.get('/usuarios');
          setlistUsers(data);
          
          
          //console.log(listUsers);
      } catch (error) {
          message.error(`Error: ${error.message}`);
      }*/
      try {
        const { data } = await apiURL.get('/recordatorios');
        setListRecor(data);
        
        
        console.log(listRecor);
    } catch (error) {
        message.error(`Error: ${error.message}`);
    }
      
    };

    
    //SELECT
    function handleChange(value) {
      console.log(`selected ${value}`);
      
        
    }
    
    const { Option } = Select;
    listUsers.map((users)=> {
        
      //listUsersEmails.push(<Option key={users.email}>{users.email}</Option>);
      
    }) 
    console.log(listUsersEmails)
    
    
    
    //MODAL
    //const msj = "hola, esto es una prueba de un recordatorio";
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
      setIsModalVisible(true);
    };
    const handleOk = async () => {
      setIsModalVisible(false);
      
      try {
        const reminder = {
          "usuarios": [
            {listUsersPut}
          ],
          "titulo": titulo,
          "mensaje": msj,
          "categoria": categoria,
          "dias": [
            {
              "day": "martes",
              "activo": false
            }
          ],
          "global": true
        };
        const response = await apiURL.post('/recordatorios',reminder);
        console.log(response);
        
          
          //console.log(listUsers);
      } catch (error) {
          message.error(`Error: ${error.message}`);
      }
    };
    const msjChange = (e) => {

    }
    const handleCancel = () => {
      setIsModalVisible(false);
    };

    

    //TEXTAREA
    const { TextArea } = Input;
    
    
    //{ listUsers.map(users => ( 
    
    //CALENDAR
    function onPanelChange(value, mode) {
      console.log(value, mode);
    }

    
    return(
      <>
      <Row>
        <Col span={22} style={{ padding: 16 }}><h1> Recordatorios</h1>
          
        </Col>
        <Col span={2} style={{ padding: 16 }}>
          <Button  onClick={showModal} type="primary" shape="circle"  icon={<PlusOutlined />} />
        </Col>
      </Row>

      <Modal title="Agregar nuevo recordatorio" visible={isModalVisible}  onOk={handleOk} onCancel={handleCancel}>
        
        <Row>
          <Col span={6} style={{ padding: 16 }}>
            <p>Titulo:</p>
          </Col>
          <Col span={18} style={{ padding: 16 }}>
            <Input placeholder="Titulo del recordatorio" 
            onChange={(e) => setTitulo(e.target.value)}
            />
          </Col>
        </Row>
        <Row>
          <Col span={6} style={{ padding: 16 }}>
            <p>Descripción (mensaje):</p>
          </Col>
          <Col span={18} style={{ padding: 16 }}>
          <TextArea placeholder="Descripción del recordatorio" 
            autoSize 
            onChange={(e) => setMsj(e.target.value)}
              />
            <div style={{ margin: '24px 0' }} />
          </Col>
        </Row>
        <Select
          mode="multiple"
          style={{ width: '100%' }}
          placeholder="Seleccionar usuarios"
          onChange={(e) => setlistUsersput(e.target.value)}
          optionLabelProp="label"
        > 
            {listUsersEmails}
        </Select>
        <Select onChange={(value)=>setCategoria(value)} defaultValue="categoria" style={{ width: '100%' }} >
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