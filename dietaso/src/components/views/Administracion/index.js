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

    const [isInformacionP, setInformacionP]=useState(false);
    const [isCircunferencia, setCircunferencia]=useState(false);
    const [isCamposC, setCamposC]=useState(false);
    const [isEstadoG, setEstadoG]=useState(false);
    const [isExposicionS, setExposicionS]=useState(false);
    const [isGastroI, setGastroI]=useState(false);
    const [isBioquimicos, setBioquimicos]=useState(false);
    const [isClinicos, setClinicos]=useState(false);
    const [isSueno, setSueno]=useState(false);

    // const postOpcionesEdicion = async () => {
    //     const opcionesEdicion= {isInformacionP, isCircunferencia, isCamposC, isEstadoG, isExposicionS, isGastroI, isBioquimicos, isClinicos, isSueno};
    //     console.log(opcionesEdicion);
    //     try {
    //         const response = await apiURL.post('/OpcionesEdicion', opcionesEdicion);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };
    //Hacer patch
    
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
                return { 'circunferencia': value}
        
            default:
                break;
        }
     };

    return (
        <div className='main-Administracion'>
            <div className='primerosDos'>
            <div className='primero'>
                <label className="texto">Informacion personal</label>
                    <Switch className="switch" rounded={true} isInformacionP={isInformacionP} onToggle={(s) => handlePatch({key: 1, value: !s.target.checked})}/>
                
                <label class="texto">Circunferencia</label>
                <Switch className="switch" rounded={true} isCircunferencia={isCircunferencia} onToggle={(s) => handlePatch({key: 2, value: !s.target.checked})}/>

                <label className="texto">Campos corporales</label>
                <Switch className="switch" rounded={true} isCamposC={isCamposC} onToggle={()=> setCamposC(!isCamposC)}/>

                <label className="texto">Estado general</label>
                <Switch className="switch" rounded={true} isEstadoG={isEstadoG} onToggle={()=> setEstadoG(!isEstadoG)}/>

                <label className="texto">Exposicion solar</label>
                <Switch className="switch" rounded={true} isExposicionS={isExposicionS} onToggle={()=> setExposicionS(!isExposicionS)}/>

                <label className="texto">Gastro intestinal</label>
                <Switch className="switch" rounded={true} isGastroI={isGastroI} onToggle={()=> setGastroI(!isGastroI)}/>

                <label className="texto">Bioquimicos</label>
                <Switch className="switch"rounded={true} isBioquimicos={isBioquimicos} onToggle={()=> setBioquimicos(!isBioquimicos)}/>

                <label className="texto">Clinicos</label>
                <Switch className="switch" rounded={true} isClinicos={isClinicos} onToggle={()=> setClinicos(!isClinicos)}/>

                <label className="texto">Sueño</label>
                <Switch className="switch" rounded={true} isSueno={isSueno} onToggle={()=> setSueno(!isSueno)}/>

            </div>
            <div className='segundo'>
                <label className="texto">OFF</label>
                <Switch className="switch" rounded={true}/>
                <label className="texto">ON</label>
            </div>
            </div>
            <div className='tercero'>
                <label className="texto">OFF</label>
                <Switch className="switch" rounded={true}/>
                <label className="texto">ON</label>
            </div>
        </div >
    );
};

export default Administracion;
