import React, { useState, useEffect, useRef } from 'react';

//import Switch from '../../commons/Switch/Switch';
import apiURL from '../../../axios/axiosConfig';

import { Switch } from 'antd';

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

    const infoRef = useRef(false);
    const circunferenciaRef = useRef(false);
    const camposCRef = useRef(false);
    const estadoGRef = useRef(false);
    const exposicionSRef = useRef(false);
    const gastroIRef = useRef(false);
    const bioquimicosRef = useRef(false);
    const clinicosRef = useRef(false);
    const suenoRef = useRef(false);

    useEffect(() => {
        getOpcionesEdicion();
    }, []);

    const getOpcionesEdicion = async () => {
        try {
            const { data } = await apiURL.get('/opcionesEdicion');
            console.log(data);
            const {
                bioquimicos,
                camposCorporales,
                circunferencia,
                clinicos,
                estadoGeneral,
                exposicionSolar,
                gastroIntestinal,
                informacionPersonal,
                sueno,
            } = data[0];
            infoRef.current = informacionPersonal;
            circunferenciaRef.current = circunferencia;
            camposCRef.current = camposCorporales;
            estadoGRef.current = estadoGeneral;
            exposicionSRef.current = exposicionSolar;
            gastroIRef.current = gastroIntestinal;
            bioquimicosRef.current = bioquimicos;
            clinicosRef.current = clinicos;
            suenoRef.current = sueno;
            setInformacionP(informacionPersonal);
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
                infoRef.current = value;
                setInformacionP(value);
                return { informacionPersonal: value };
            case 2:
                circunferenciaRef.current = value;
                setCircunferencia(value);
                return { circunferencia: value };
            case 3:
                camposCRef.current = value;
                setCamposC(value);
                return { camposCorporales: value };
            case 4:
                estadoGRef.current = value;
                setEstadoG(value);
                return { estadoGeneral: value };
            case 5:
                exposicionSRef.current = value;
                setExposicionS(value);
                return { exposicionSolar: value };
            case 6:
                gastroIRef.current = value;
                setGastroI(value);
                return { gastroIntestinal: value };
            case 7:
                bioquimicosRef.current = value;
                setBioquimicos(value);
                return { bioquimicos: value };
            case 8:
                clinicosRef.current = value;
                setClinicos(value);
                return { clinicos: value };
            case 9:
                suenoRef.current = value;
                setSueno(value);
                return { sueno: value };
            default:
                break;
        }
    };

    return (
        <div className='main-Administracion'>
            <div className='primerosDos'>
                <div className='primero'>
                    <label className='texto'>Informacion personal</label>
                    <Switch
                        ref={infoRef}
                        className='switch'
                        rounded={true}
                        checked={isInformacionP || infoRef.current}
                        onChange={(s) => handlePatch({ key: 1, value: s })}
                    />

                    <label class='texto'>Circunferencia</label>
                    <Switch
                        ref={circunferenciaRef}
                        className='switch'
                        rounded={true}
                        checked={isCircunferencia || circunferenciaRef.current}
                        onChange={(s) => handlePatch({ key: 2, value: s })}
                    />

                    <label className='texto'>Campos corporales</label>
                    <Switch
                        ref={camposCRef}
                        className='switch'
                        rounded={true}
                        checked={isCamposC || camposCRef.current}
                        onChange={(s) => handlePatch({ key: 3, value: s })}
                    />

                    <label className='texto'>Estado general</label>
                    <Switch
                        ref={estadoGRef}
                        className='switch'
                        rounded={true}
                        checked={isEstadoG || estadoGRef.current}
                        onChange={(s) => handlePatch({ key: 4, value: s })}
                    />

                    <label className='texto'>Exposicion solar</label>
                    <Switch
                        ref={exposicionSRef}
                        className='switch'
                        rounded={true}
                        checked={isExposicionS || exposicionSRef.current}
                        onChange={(s) => handlePatch({ key: 5, value: s })}
                    />

                    <label className='texto'>Gastro intestinal</label>
                    <Switch
                        ref={gastroIRef}
                        className='switch'
                        rounded={true}
                        checked={isGastroI || gastroIRef.current}
                        onChange={(s) => handlePatch({ key: 6, value: s })}
                    />

                    <label className='texto'>Bioquimicos</label>
                    <Switch
                        ref={bioquimicosRef}
                        className='switch'
                        rounded={true}
                        checked={isBioquimicos || bioquimicosRef.current}
                        onChange={(s) => handlePatch({ key: 7, value: s })}
                    />

                    <label className='texto'>Clinicos</label>
                    <Switch
                        ref={clinicosRef}
                        className='switch'
                        rounded={true}
                        checked={isClinicos || clinicosRef.current}
                        onChange={(s) => handlePatch({ key: 8, value: s })}
                    />

                    <label className='texto'>Sueño</label>
                    <Switch
                        ref={suenoRef}
                        className='switch'
                        rounded={true}
                        checked={isSueno || suenoRef.current}
                        onChange={(s) => handlePatch({ key: 9, value: s })}
                    />
                </div>
                <div className='segundo'>
                    <label className='texto'>OFF</label>
                    <Switch className='switch' rounded={true} />
                    <label className='texto'>ON</label>
                </div>
            </div>
            <div className='tercero'>
                <label className='texto'>OFF</label>
                <Switch className='switch' rounded={true} />
                <label className='texto'>ON</label>
            </div>
        </div>
    );
};

export default Administracion;
