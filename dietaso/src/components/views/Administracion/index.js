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

    const [isInformacionP, setInformacionP] = useState(false);
    const [isCircunferencia, setCircunferencia] = useState(false);
    const [isCamposC, setCamposC] = useState(false);
    const [isEstadoG, setEstadoG] = useState(false);
    const [isExposicionS, setExposicionS] = useState(false);
    const [isGastroI, setGastroI] = useState(false);
    const [isBioquimicos, setBioquimicos] = useState(false);
    const [isClinicos, setClinicos] = useState(false);
    const [isSueno, setSueno] = useState(false);

    useEffect(() => {
        getOpcionesEdicion();
        
    }, []);

    const getOpcionesEdicion = async () => {
        try {
            const { data } = await apiURL.get('/opcionesEdicion');
            console.log(data);
            const{bioquimicos,camposCorporales,circunferencia,clinicos,estadoGeneral,exposicionSolar,gastroIntestinal,informacionPersonal,sueno}=data[0];
            setBioquimicos(bioquimicos);
            setCamposC(camposCorporales);
            setCircunferencia(circunferencia);
            setClinicos(clinicos);
            setEstadoG(estadoGeneral);
            setExposicionS(exposicionSolar);
            setGastroI(gastroIntestinal);
            setInformacionP(informacionPersonal);
            setSueno(sueno);
            
        } catch (error) {
            console.groupCollapsed('Error xd');
            console.error(error);
            console.groupEnd();
        }
    };

    const handlePatch = async (props) => {
        try {

            const body = getCurrentBody(props.key, props.value);

            const { data } = await apiURL.patch('opcionesEdicion', body);
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    const getCurrentBody = (key, value) => {

        switch (key) {
            case 1:
                return { 'informacionPersonal': value }

            case 2:
                return { 'circunferencia': value }
            case 3:
                return { 'camposCorporales': value }

            case 4:
                return { 'estadoGeneral': value }
            case 5:
                return { 'exposicionSolar': value }

            case 6:
                return { 'gastroIntestinal': value }
            case 7:
                return { 'bioquimicos': value }
            case 8:
                return { 'clinicos': value }

            case 9:
                return { 'sueno': value }
            default:
                break;
        }
    };

    return (
        <div className='main-Administracion'>
            <div className='primerosDos'>
                <div className='primero'>
                    <label className="texto">Informacion personal</label>
                    <Switch className="switch" rounded={true} checked={isInformacionP} onToggle={(s) => handlePatch({ key: 1, value: s.target.checked })} />

                    <label class="texto">Circunferencia</label>
                    <Switch className="switch" rounded={true} checked={isCircunferencia} onToggle={(s) => handlePatch({ key: 2, value: s.target.checked })} />

                    <label className="texto">Campos corporales</label>
                    <Switch className="switch" rounded={true} checked={isCamposC} onToggle={(s) => handlePatch({ key: 3, value: s.target.checked })} />

                    <label className="texto">Estado general</label>
                    <Switch className="switch" rounded={true} checked={isEstadoG} onToggle={(s) => handlePatch({ key: 4, value: s.target.checked })} />

                    <label className="texto">Exposicion solar</label>
                    <Switch className="switch" rounded={true} checked={isExposicionS} onToggle={(s) => handlePatch({ key: 5, value: s.target.checked })} />

                    <label className="texto">Gastro intestinal</label>
                    <Switch className="switch" rounded={true} checked={isGastroI} onToggle={(s) => handlePatch({ key: 6, value: s.target.checked })} />

                    <label className="texto">Bioquimicos</label>
                    <Switch className="switch" rounded={true} checked={isBioquimicos} onToggle={(s) => handlePatch({ key: 7, value: s.target.checked })} />

                    <label className="texto">Clinicos</label>
                    <Switch className="switch" rounded={true} checked={isClinicos} onToggle={(s) => handlePatch({ key: 8, value: s.target.checked })} />

                    <label className="texto">Sueño</label>
                    <Switch className="switch" rounded={true} checked={isSueno} onToggle={(s) => handlePatch({ key: 9, value: s.target.checked })} />

                </div>
                <div className='segundo'>
                    <label className="texto">OFF</label>
                    <Switch className="switch" rounded={true} />
                    <label className="texto">ON</label>
                </div>
            </div>
            <div className='tercero'>
                <label className="texto">OFF</label>
                <Switch className="switch" rounded={true} />
                <label className="texto">ON</label>
            </div>
        </div >
    );
};

export default Administracion;
