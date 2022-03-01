import React, { useState, useEffect } from 'react';
import { Card, Col, Input, Row, Button, Modal, Select } from 'antd';
import apiURL from '../../../axios/axiosConfig';
import YouTube from '@u-wave/react-youtube';
import {
    PlusOutlined,
    ExclamationCircleOutlined,
    DeleteOutlined,
    EditOutlined,
    GlobalOutlined,
    UserOutlined,
    StarOutlined,
} from '@ant-design/icons';

import './Recetas.scss';

const Recetas = () => {
    const [titulo, setTitulo] = useState('');
    const [categoria, setCategoria] = useState('desayuno');
    const [url, setUrl] = useState('');

    const [destacado, setDestacado] = useState(true);

    const [recetas, setRecetas] = useState([]);
    //MODAL
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalActVisible, setIsModalActVisible] = useState(false);
    const [idReceta, setIdReceta] = useState('');
    const categories = ['desayuno', 'colacion1', 'comida', 'colacion2', 'cena'];
    const cat0 = recetas.filter((receta) =>
        receta.destacado == true

    );
    const cat1 = recetas.filter((receta) =>
        receta.categoria === categories[0]
    );
    const cat2 = recetas.filter((receta) =>
        receta.categoria === categories[1]
    );
    const cat3 = recetas.filter((receta) =>
        receta.categoria === categories[2]
    );
    const cat4 = recetas.filter((receta) =>
        receta.categoria === categories[3]
    );
    const cat5 = recetas.filter((receta) =>
        receta.categoria === categories[4]
    );
    let dest = "";
    //ADVERT
    const { confirm } = Modal;
    //TEXTAREA
    const { TextArea } = Input;
    //SELECT
    const { Option } = Select;

    useEffect(() => {
        getRecetas();

        return () => {
            setRecetas([]);
        };
    }, []);
    const getUrlsID = (URL) => {
        const ID = URL.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
        if (ID !== null) {
            console.log(ID[1]);
            //setVideosData([...videosData, { id: 2, link: ID[1] }]);            
            return ID[1];
        }
        else {
            console.log('The youtube url is not valid');
        }
    };



    const getRecetas = async () => {
        try {
            const { data } = await apiURL.get('/Recetas');
            console.log(data);
            setRecetas(data);
        } catch (error) {
            console.groupCollapsed('Error xd');
            console.error(error);
            console.groupEnd();
        }
    };
    function obtenerDestacada(destacado) {
        setDestacado(destacado);
    }
    function obtenerCategoria(categoria) {
        setCategoria(categoria);
    }
    const postRecetas = async () => {
        const recetas = { titulo, categoria, url, destacado };
        console.log(recetas);
        try {
            const response = await apiURL.post('/Recetas', recetas);
        } catch (error) {
            console.error(error);
        }
    };
    const patchRecetas = async () => {
        const receta = { titulo, categoria, url, destacado };

        console.log(receta);
        try {
            const response = await apiURL.patch(`/recetas/${idReceta}`, receta);
        } catch (error) {
            console.error(error);
        }
        handleCancelAct();
    };
    const deleteRecetas = async (receta) => {
        try {
            const response = await apiURL.delete(`/recetas/${receta._id}`);
            console.log(receta._id);
            window.location.reload()
        } catch (error) {
            console.error(error);
        }
    };

    function showDeleteConfirm(receta) {
        console.log(receta);
        confirm({
            title: '¿Estás seguro de que quieres eliminar?',
            icon: <ExclamationCircleOutlined />,
            content: 'Los cambios no serán reversibles',
            okText: 'Si',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                deleteRecetas(receta);
            },
            onCancel() {
                // console.log('Cancel');
            },
        });
    }
    const varDesta = (destacada) => {
        console.log(destacada)
        if (destacada) {
            dest = "★ Receta destacada"
        } else {
            dest = ""
        }
    };
    const showModal = () => {
        setIsModalVisible(true);
    };
    const showModalAct = (receta) => {
        setTitulo(receta.titulo);
        setCategoria(receta.categoria);
        setUrl(receta.url);
        setDestacado(receta.destacado);
        console.log(titulo);
        console.log(categoria);
        console.log(url);
        console.log(destacado);
        setIsModalActVisible(true);
    };

    const handleOk = () => {
        postRecetas();
        setIsModalVisible(false);
    };
    const handleOkAct = () => {
        patchRecetas();
        setIsModalVisible(false);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
        window.location.reload();
    };
    const handleCancelAct = () => {
        setIsModalActVisible(false);
        window.location.reload();
    };


    return (
        <div class='main-Recetas'>
            <Row>
                <Col span={22} style={{ padding: 16 }}>
                    <h1> Recetas </h1>
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
            <div class='grid_recetas'>
                {
                    cat0.length > 0 && <h2 class='tituloR'>Recetas Destacadas</h2>
                }
                <hr />
                <div class='sc_receta_destacada'>
                    {recetas.length > 0 &&
                        cat0.map((receta) => (
                            <div >
                                <Card
                                    title={
                                        <Row>
                                            <Col span={18} style={{ padding: 5 }}>
                                                {receta.titulo}
                                            </Col>
                                            <Col>
                                                <Button
                                                    style={{}}
                                                    type='primary'
                                                    shape='circle'
                                                    icon={<EditOutlined />}
                                                    onClick={() => { showModalAct(receta); setIdReceta(receta._id); }
                                                    }
                                                />
                                            </Col>
                                            <Col>
                                                <Button
                                                    style={{}}
                                                    type='primary'
                                                    shape='circle'
                                                    icon={<DeleteOutlined />}
                                                    onClick={() =>
                                                        showDeleteConfirm(receta)
                                                    }
                                                />
                                            </Col>
                                        </Row>
                                    }>
                                    <div>
                                        <YouTube video={getUrlsID(receta.url)} autoplay={false} />
                                    </div>
                                    <div class='sc_recetas_cat'>
                                        {`${receta.categoria}`}
                                    </div>

                                    <div class='sc_recetas_destacado'>
                                        {varDesta(receta.destacado), `${dest}`}
                                    </div>

                                </Card>
                            </div>
                        ))}
                        
                </div>
                {
                    cat1.length > 0 && <h2 class='tituloR'>Desayuno</h2>
                }
                <hr />
                <div class='sc_receta_desayuno'>
                    {recetas.length > 0 &&
                        cat1.map((receta) => (
                            <div >
                                <Card
                                    title={
                                        <Row>
                                            <Col span={18} style={{ padding: 5 }}>
                                                {receta.titulo}
                                            </Col>
                                            <Col>
                                                <Button
                                                    style={{}}
                                                    type='primary'
                                                    shape='circle'
                                                    icon={<EditOutlined />}
                                                    onClick={() => { showModalAct(receta); setIdReceta(receta._id); }
                                                    }
                                                />
                                            </Col>
                                            <Col>
                                                <Button
                                                    style={{}}
                                                    type='primary'
                                                    shape='circle'
                                                    icon={<DeleteOutlined />}
                                                    onClick={() =>
                                                        showDeleteConfirm(receta)
                                                    }
                                                />
                                            </Col>
                                        </Row>
                                    }>
                                    <div>
                                        <YouTube video={getUrlsID(receta.url)} autoplay={false} />
                                    </div>
                                    <div class='sc_recetas_cat'>
                                        {`${receta.categoria}`}
                                    </div>

                                    <div class='sc_recetas_destacado'>
                                        {varDesta(receta.destacado), `${dest}`}
                                    </div>

                                </Card>
                            </div>
                        ))}
                </div>
                {
                    cat2.length > 0 && <h2 class='tituloR'>Colacion 1</h2>
                }
                <hr />

                <div class='sc_receta_colacion1'>
                    {recetas.length > 0 &&
                        cat2.map((receta) => (
                            <div >

                                <Card
                                    title={
                                        <Row>
                                            <Col span={18} style={{ padding: 5 }}>
                                                {receta.titulo}
                                            </Col>
                                            <Col>
                                                <Button
                                                    style={{}}
                                                    type='primary'
                                                    shape='circle'
                                                    icon={<EditOutlined />}
                                                    onClick={() => { showModalAct(receta); setIdReceta(receta._id); }
                                                    }
                                                />
                                            </Col>
                                            <Col>
                                                <Button
                                                    style={{}}
                                                    type='primary'
                                                    shape='circle'
                                                    icon={<DeleteOutlined />}
                                                    onClick={() =>
                                                        showDeleteConfirm(receta)
                                                    }
                                                />
                                            </Col>
                                        </Row>
                                    }>
                                    <div>
                                        <YouTube video={getUrlsID(receta.url)} autoplay={false} />
                                    </div>
                                    <div class='sc_recetas_cat'>
                                        {`${receta.categoria}`}
                                    </div>

                                    <div class='sc_recetas_destacado'>
                                        {varDesta(receta.destacado), `${dest}`}
                                    </div>

                                </Card>
                            </div>
                        ))}
                </div>
                {
                    cat3.length > 0 && <h2 class='tituloR'>Comida</h2>
                }
                <hr />
                <div class='sc_receta_comida'>
                    {recetas.length > 0 &&
                        cat3.map((receta) => (
                            <div>

                                <Card
                                    title={
                                        <Row>
                                            <Col span={18} style={{ padding: 5 }}>
                                                {receta.titulo}
                                            </Col>
                                            <Col>
                                                <Button
                                                    style={{}}
                                                    type='primary'
                                                    shape='circle'
                                                    icon={<EditOutlined />}
                                                    onClick={() => { showModalAct(receta); setIdReceta(receta._id); }
                                                    }
                                                />
                                            </Col>
                                            <Col>
                                                <Button
                                                    style={{}}
                                                    type='primary'
                                                    shape='circle'
                                                    icon={<DeleteOutlined />}
                                                    onClick={() =>
                                                        showDeleteConfirm(receta)
                                                    }
                                                />
                                            </Col>
                                        </Row>
                                    }>
                                    <div>
                                        <YouTube video={getUrlsID(receta.url)} autoplay={false} />
                                    </div>
                                    <div class='sc_recetas_cat'>
                                        {`${receta.categoria}`}
                                    </div>

                                    <div class='sc_recetas_destacado'>
                                        {varDesta(receta.destacado), `${dest}`}
                                    </div>

                                </Card>
                            </div>
                        ))}
                </div>
                {
                    cat4.length > 0 && <h2 class='tituloR'>Colacion 2</h2>
                }
                <hr />
                <div class='sc_receta_colacion2'>
                    {recetas.length > 0 &&
                        cat4.map((receta) => (
                            <div >

                                <Card
                                    title={
                                        <Row>
                                            <Col span={18} style={{ padding: 5 }}>
                                                {receta.titulo}
                                            </Col>
                                            <Col>
                                                <Button
                                                    style={{}}
                                                    type='primary'
                                                    shape='circle'
                                                    icon={<EditOutlined />}
                                                    onClick={() => { showModalAct(receta); setIdReceta(receta._id); }
                                                    }
                                                />
                                            </Col>
                                            <Col>
                                                <Button
                                                    style={{}}
                                                    type='primary'
                                                    shape='circle'
                                                    icon={<DeleteOutlined />}
                                                    onClick={() =>
                                                        showDeleteConfirm(receta)
                                                    }
                                                />
                                            </Col>
                                        </Row>
                                    }>
                                    <div>
                                        <YouTube video={getUrlsID(receta.url)} autoplay={false} />
                                    </div>
                                    <div class='sc_recetas_cat'>
                                        {`${receta.categoria}`}
                                    </div>

                                    <div class='sc_recetas_destacado'>
                                        {varDesta(receta.destacado), `${dest}`}
                                    </div>

                                </Card>
                            </div>
                        ))}
                </div>
                {
                    cat5.length > 0 && <h2 class='tituloR'>Cena</h2>
                }
                <hr class='separadorR' />
                <div class='sc_receta_cena'>
                    {recetas.length > 0 &&
                        cat5.map((receta) => (
                            <div >

                                <Card
                                    title={
                                        <Row>
                                            <Col span={18} style={{ padding: 5 }}>
                                                {receta.titulo}
                                            </Col>
                                            <Col>
                                                <Button
                                                    style={{}}
                                                    type='primary'
                                                    shape='circle'
                                                    icon={<EditOutlined />}
                                                    onClick={() => { showModalAct(receta); setIdReceta(receta._id); }
                                                    }
                                                />
                                            </Col>
                                            <Col>
                                                <Button
                                                    style={{}}
                                                    type='primary'
                                                    shape='circle'
                                                    icon={<DeleteOutlined />}
                                                    onClick={() =>
                                                        showDeleteConfirm(receta)
                                                    }
                                                />
                                            </Col>
                                        </Row>
                                    }>
                                    <div>
                                        <YouTube video={getUrlsID(receta.url)} autoplay={false} />
                                    </div>
                                    <div class='sc_recetas_cat'>
                                        {`${receta.categoria}`}
                                    </div>

                                    <div class='sc_recetas_destacado'>
                                        {varDesta(receta.destacado), `${dest}`}
                                    </div>

                                </Card>
                            </div>
                        ))}
                </div>



                <Modal
                    title='Agregar una nueva Receta'
                    visible={isModalVisible}
                    onCancel={handleCancel}
                    onOk={handleOk}>
                    <Row>
                        <Col span={6} style={{ padding: 16 }}>
                            <p>Titulo:</p>
                        </Col>
                        <Col span={18} style={{ padding: 16 }}>
                            <Input
                                placeholder='Titulo de la Receta'
                                onChange={(e) => setTitulo(e.target.value)}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col span={6} style={{ padding: 7 }}>
                            <p>Categoria:</p>
                        </Col>
                        <Col span={18} style={{ padding: 16 }}>
                            <Select
                                id='categoria'
                                style={{ width: 120 }}
                                defaultValue='desayuno'
                                onChange={obtenerCategoria}>
                                <Option value= 'desayuno' selected>Desayuno</Option>
                                <Option value='colacion1'>Colacion 1</Option>
                                <Option value='comida'>Comida</Option>
                                <Option value='colacion2'>Colacion 2</Option>
                                <Option value='cena'>Cena</Option>
                            </Select>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={6} style={{ padding: 16 }}>
                            <p>URL:</p>
                        </Col>
                        <Col span={18} style={{ padding: 16 }}>
                            <Input
                                placeholder='URL del video'
                                onChange={(e) => setUrl(e.target.value)}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col span={6} style={{ padding: 16 }}>
                            <p>Destacado:</p>
                        </Col>
                        <Col span={18} style={{ padding: 16 }}>
                            <Select
                                id='recetaDestacada'
                                defaultValue={false}
                                style={{ width: 140 }}
                                onChange={obtenerDestacada}>
                                <Option value={true}>Destacada</Option>
                                <Option value={false}>No Destacada</Option>
                            </Select>
                        </Col>
                    </Row>
                </Modal>
                <Modal
                    title='Editar Receta'
                    visible={isModalActVisible}
                    onCancel={handleCancelAct}
                    onOk={handleOkAct}>
                    <Row>
                        <Col span={6} style={{ padding: 16 }}>
                            <p>Titulo:</p>
                        </Col>
                        <Col span={18} style={{ padding: 16 }}>
                            <Input
                                placeholder='Titulo de la Receta'
                                value={titulo}
                                onChange={(e) => setTitulo(e.target.value)}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col span={6} style={{ padding: 7 }}>
                            <p>Categoria:</p>
                        </Col>
                        <Col span={18} style={{ padding: 16 }}>
                            <Select
                                id='categoria'
                                defaultValue='desayuno'
                                style={{ width: 120 }}
                                onChange={obtenerCategoria}>
                                <Option value='desayuno'>Desayuno</Option>
                                <Option value='colacion1'>Colacion 1</Option>
                                <Option value='comida'>Comida</Option>
                                <Option value='colacion2'>Colacion 2</Option>
                                <Option value='cena'>Cena</Option>
                            </Select>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={6} style={{ padding: 16 }}>
                            <p>URL:</p>
                        </Col>
                        <Col span={18} style={{ padding: 16 }}>
                            <Input
                                value={url}
                                placeholder='URL del video'
                                onChange={(e) => setUrl(e.target.value)}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col span={6} style={{ padding: 16 }}>
                            <p>Destacado:</p>
                        </Col>
                        <Col span={18} style={{ padding: 16 }}>
                            <Select
                                id='recetaDestacada'
                                value={destacado}
                                defaultValue='true'
                                style={{ width: 120 }}
                                onChange={obtenerDestacada}>
                                <Option value={true}>Destacada</Option>
                                <Option value={false}>No Destacada</Option>
                            </Select>
                        </Col>
                    </Row>
                </Modal>
            </div>
        </div>
    );
};

export default Recetas;
