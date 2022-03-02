import React, { useState, useEffect } from 'react';

import {
    Card,
    Space,
    Input,
    Col,
    Row,
    Button,
    Modal,
    DatePicker,
    Select,
    message,
    Checkbox,
} from 'antd';
import {
    DeleteOutlined,
    EditOutlined,
    ExclamationCircleOutlined,
    UserOutlined,
    GlobalOutlined,
} from '@ant-design/icons';
import apiURL from '../../../axios/axiosConfig';

const CardsComponent = () => {
    const [ isModalVisible, setIsModalVisible ] = useState(false);
    const [ initialData, setInitialData ] = useState([]);
    const [ list, setList ] = useState([]);
    
    const [listUsers, setlistUsers] = useState([]);
    const [listUsersPut, setlistUsersput] = useState([]);
    const [recorUp, setRecorUp] = useState([]);
    const [recorDel, setRecorDel] = useState([]);
    const [titulo, setTitulo] = useState("");
    const [msj, setMsj] = useState("");
    const [categoria, setCategoria] = useState("");
    const { RangePicker } = DatePicker;
    const [fecha, setFecha] = useState([]);
    const { TextArea } = Input;
    const { confirm } = Modal;
    const { Search } = Input;
    const { Option } = Select;
    const [global, setGlobal] = useState(false);
    const [seleccionado, setSeleccionado] =useState("");
    

    useEffect(() => {
        fetchData();
    }, []);

    const showModal = (id) => {
        setIsModalVisible(true);
        setSeleccionado(id);
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
            "global": global
          };
          const response = await apiURL.patch(`/recordatorios/${seleccionado._id}`,reminder);
          console.log(response);
          
          console.log("actualizado");
            console.log(listUsers);
        } catch (error) {
            message.error(`Error: ${error.message}`);
        }
    };
    const handleCancel = () => {
    setIsModalVisible(false);
    };
   
 

    
    function showDeleteConfirm(recordatorio) {
        
        confirm({
            title: '¿Estás seguro de que quieres eliminar?',
            icon: <ExclamationCircleOutlined />,
            content: 'Los cambios no serán reversibles',
            okText: 'Si',
            okType: 'danger',
            cancelText: 'No',
            onOk(){
            /*const deleteRecor = async ()=> {
                console.log('OK');
                try {
                    const id="61fdd2c42300b300044f745d";
                    //const { id } = await apiURL.delete('/recordatorios?id=${61fdd2c42300b300044f745d}');
                    const upd = await apiURL.delete('/recordatorios?id=${id}',id);
                    console.log("eliminado ");
                } catch (error) {
                    message.error(`Error: ${error.message}`);
                }
            },*/
            const deleteRecor = async ()=> {
                console.log('OK');
                try {
                   // console.log('OK');
                    
                    //const id="61fdd2c42300b300044f745d";
                    //const { id } = await apiURL.delete('/recordatorios?id=${61fdd2c42300b300044f745d}');
                    const dlt = await apiURL.delete(`/recordatorios?id=${recordatorio._id}`);
                    console.log(dlt);
                    window.location.reload()
                } catch (error) {
                    message.error(`Error: ${error.message}`);
                }
            };
            deleteRecor()
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

    function onChangeCh(e) {
        console.log(`checked = ${e.target.checked}`);
        
        if(e.target.checked){
          setGlobal(true);
        }else{
          setGlobal(false);
        }
      }

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
                                    
                                    <Col span={12} style={{ padding: 5 }}>
                                        <h4 class='plistaR'>
                                            {recordatorios.titulo}
                                        </h4>
                                    </Col>
                                    <Col span={4} style={{ padding: 5 }}>
                                        <Button
                                            style={{}}
                                            type='primary'
                                            shape='circle'
                                            onClick={()=>showModal(recordatorios)}
                                            icon={<EditOutlined />}
                                        />
                                    </Col>
                                    <Col span={4} style={{ padding: 5 }}>
                                        <Button
                                            style={{}}
                                            type='primary'
                                            shape='circle'
                                            onClick={()=>showDeleteConfirm(recordatorios)}
                                            
                                            icon={<DeleteOutlined />}
                                        />
                                    </Col>
                                </Row>
                            }>
                            <Row>
                                
                                <Col span={4} style={{ padding: 5 }}>
                                        <Button
                                            style={{}}
                                            type='primary'
                                            shape='circle'
                                            icon={ recordatorios.global ? <GlobalOutlined/>: <UserOutlined/> }
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

            <Modal title="Actualizar recordatorio" visible={isModalVisible}  onOk={handleOk} onCancel={handleCancel}>
                
                <Row>
                <Col span={6} style={{ padding: 16 }}>
                    <p>Titulo: </p>
                </Col>
                <Col span={18} style={{ padding: 16 }}>
                    <Input placeholder={seleccionado?.titulo} 
                    defaultValue={seleccionado?.titulo} 
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
                <Checkbox onChange={onChangeCh}>Global</Checkbox>
                <Select
                mode="multiple"
                style={{ width: '100%' }}
                placeholder="Seleccionar usuarios"
                optionLabelProp="label"
                disabled={global?true:false}
                > 
                {listUsers.map(users => (
                
                <Option key={users.id} onChange={(e) => setlistUsersput(e.value)}>{users.id}</Option>
                
                ))}
                    
                </Select>
                <Select placeholder="Seleccione Categoría" onChange={(value)=>setCategoria(value)}  style={{ width: '100%' }} >
                
                <Option value="desayuno">Desayuno</Option>
                <Option value="comida">Comida</Option>
                <Option value="cena">Cena</Option>
                <Option value="ejercicio">Ejercicio</Option>
                <Option value="colacion1">Colacion 1</Option>
                <Option value="colacion2">Colación 2</Option>
                <Option value="agua">Agua</Option>
                </Select>
                <div className="site-calendar-demo-card">
                
                <RangePicker />
                </div>
                
                
            </Modal>
        </div>
    );
};

export default CardsComponent;
