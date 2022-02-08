import React, { useEffect, useState } from 'react';
import { Col, DatePicker, Input, Row, Button, Modal, Select, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import '../../commons/RemindersComponent/RowComponent'
import apiURL from '../../../axios/axiosConfig' 
import moment from 'moment';
import dayjs from 'dayjs';




const RowComponent = () => {
    const [listUsers, setlistUsers] = useState([]);
    const [listUsersPut, setlistUsersput] = useState([]);
    const [listRecor, setListRecor] = useState([]);
    const [listUsersEmails, setlistUsersEmails] = useState([]);
    const [titulo, setTitulo] = useState("");
    const [msj, setMsj] = useState("");
    const [categoria, setCategoria] = useState("");
    const { RangePicker } = DatePicker;
    const [fecha, setFecha] = useState([]);


    console.log(categoria);
    //const [state, setState] = useState();
    useEffect(() => {
      fetchData();
      
    }, [])
    const fetchData = async () => {
        
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
     
    
    console.log(setlistUsersput)
    
    
    //MODAL
    
    const [isModalVisible, setIsModalVisible] = useState(false);
    
    const showModal = async () => {
      setIsModalVisible(true);
      try {
        const { data } = await apiURL.get('/informacionUsuarios');
        setlistUsers(data);
        
        
        console.log(listUsers);
      } catch (error) {
          message.error(`Error: ${error.message}`);
      }

    };


    const handleOk = async () => {
      setIsModalVisible(false);
      
      try {
        const reminder = {
          "usuarios": 
            listUsersPut
          ,
          //hora y fecha
          "titulo": titulo,
          "mensaje": msj,
          "categoria": categoria,
          "dias": [
            {
              "day": "martes",
              "activo": false
            }
          ],
          "fecha": fecha,
          "global": true
        };
        const response = await apiURL.post('/recordatorios',reminder);
        console.log(response);
        
          
          console.log(listUsers);
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
    const print = (values) => {
      if(values){
        const dateA = values[0];
        const dateB = values[1];
      
        setFecha(getDaysBetweenDates(dateA,dateB));
      }
    };
    
    const getDaysBetweenDates = function (startDate, endDate) {
      let now = startDate.clone(),
          dates = [];
    
      while (now.isSameOrBefore(endDate)) {
          dates.push(dayjs(now).toISOString());
          now.add(1, 'days');
      }
      return dates;
    };
    
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
          optionLabelProp="label"
        > 
        {listUsers.map(users => (
        
          <Option key={users.id} onChange={(e) => setlistUsersput(e.value)}>{users.id}</Option>
          
        ))}
            
        </Select>
        <Select placeholder="Seleccione Categoría" onChange={(value)=>setCategoria(value)} defaultValue="categoria" style={{ width: '100%' }} >
          
          <Option value="desayuno">Desayuno</Option>
          <Option value="comida">Comida</Option>
          <Option value="cena">Cena</Option>
          <Option value="ejercicio">Ejercicio</Option>
          <Option value="colacion1">Colacion 1</Option>
          <Option value="colacion2">Colación 2</Option>
          <Option value="agua">Agua</Option>
        </Select>
        <div className="site-calendar-demo-card">
         
          <RangePicker onChange={print} />
        </div>
        
      </Modal>
      </>

    );
}

export default RowComponent;