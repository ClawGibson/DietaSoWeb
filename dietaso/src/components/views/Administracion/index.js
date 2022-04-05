import React, { useState, useEffect } from 'react';
import { Card, Col, Input, Row, Button, Modal, Select } from 'antd';
import Switch from '../../commons/Switch/Switch';
// import UserCard from '../../commons/UserCard/UserCard';

// import { addAuthorizationAction } from '../../../redux/actions/authorizationAction';
import apiURL from '../../../axios/axiosConfig';

import {
    PlusOutlined,
    ExclamationCircleOutlined,
    DeleteOutlined,
    EditOutlined,
    GlobalOutlined,
    UserOutlined,
} from '@ant-design/icons';

import './Administracion.scss';

const Administracion = () => {
    return (
        <div className='main-Administracion'>

            <div className='primero'>
                <label className="texto">Informacion personal</label>
                <Switch className="switch"></Switch>
                <label class="texto">Circunferencia</label>
                <Switch className="switch"></Switch>

                <label className="texto">Campos corporales</label>
                <Switch className="switch"></Switch>

                <label className="texto">Estado general</label>
                <Switch className="switch"></Switch>

                <label className="texto">Exposicion solar</label>
                <Switch className="switch"></Switch>

                <label className="texto">Gastro intestinal</label>
                <Switch className="switch"></Switch>

                <label className="texto">Bioquimicos</label>
                <Switch className="switch"></Switch>

                <label className="texto">Clinicos</label>
                <Switch className="switch"></Switch>

                <label className="texto">Sueño</label>
                <Switch className="switch"></Switch>

            </div>
            <div className='segundo'>

            </div>
            <div className='tercero'>

            </div>
        </div >
    );
};

export default Administracion;
