import React, { useState, useEffect, Component } from 'react';
import { Select } from 'antd';
import apiURL from '../../../axios/axiosConfig';
import './user.scss';
import profile from './profile.jpg';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import Popup from './popup';
///import { render } from "react-dom";
//import CanvasJSReact from "./canvasjs.react";
//var CanvasJSChart = CanvasJSReact.CanvasJSChart;

//para lo del calendario
import { DatePicker, Space } from 'antd';

const Usuarios = () => {
    //var CanvasJSChart = CanvasJSReact.CanvasJSChart;
    //Get the id from params
    const [ info, setInfo ] = useState({});
    const [ state, setState ] = useState({});
    //const [consumo, setConsumo] = useState({});
    const { Option } = Select;
    //Variables
    const [ name, setName ] = useState('');
    const [ apellidoP, setApellidoP ] = useState('');
    const [ apellidoM, setApellidoM ] = useState('');
    const [ celular, setCelular ] = useState('');
    const [ ciudadResidencia, setCiudadResidencia ] = useState('');
    const [ tiempoResidando, setTiempoResidando ] = useState('');
    const [ estadoDeNacomiento, setEstadoDeNacimiento ] = useState('');
    const [ fechaNacimiento, setFechaNacimiento ] = useState('');
    const [ genero, setGenero ] = useState('');

    //Circunferencia
    let [ cinturaEntry, setCinturaEn ] = useState(-1);
    const [ posicionCintura, setPosicionCin ] = useState();
    let [ caderaEntry, setCaderaEn ] = useState(-1);
    const [ newCinturas, setCinturas ] = useState([]);
    const [ newPosicionesCinturas, setPosicionesCinturas ] = useState([]);
    const [ newCadera, setCadera ] = useState([]);
    //const [newPosicionesCadera, setPosicionesCadera] = useState([]);

    //Campos Corporales
    let [ grasaEntry, setGrasaEn ] = useState(-1);
    //const [posicionGrasa, setPosicionGrasa] = useState();
    let [ masaEntry, setMasaEn ] = useState(-1);
    const [ newGrasa, setGrasa ] = useState([]);
    const [ newPosicionesGrasa, setPosicionesGrasa ] = useState([]);
    const [ newMasa, setMasa ] = useState([]);
    const [ newPosicionesMasa, setPosicionesMasa ] = useState([]);
    let [ aguaEntry, setAguaEn ] = useState(-1);
    let [ oseaEntry, setOseaEn ] = useState(-1);
    let [ visceralEntry, setVisceralEn ] = useState(-1);
    let [ tMetabolicaEntry, setTMetabolicaEn ] = useState(-1);
    let [ eMetabolicaEntry, setEMetabolicaEn ] = useState(-1);
    const [ newAgua, setAgua ] = useState([]);
    const [ newPosicionesAgua, setPosicionesAgua ] = useState([]);
    const [ newOsea, setOsea ] = useState([]);
    const [ newPosicionesOsea, setPosicionesOsea ] = useState([]);
    const [ newVisceral, setViceral ] = useState([]);
    const [ newPosicionesViscelar, setPosicionesVisceral ] = useState([]);
    const [ newTMetabolica, setTMetabolica ] = useState([]); //Tasa Metabolica
    const [ newPosicionesTMetabolica, setPosicionesTMetabolica ] = useState([]);
    const [ newEMetabolica, setEMetabolica ] = useState([]); //Edad metabolica
    const [ newPosicionesEMetabolica, setPosicionesEMetabolica ] = useState([]);

    //Estado General
    let [ cansansioEntry, setCansansioEn ] = useState(-1);
    //const [posicionGrasa, setPosicionGrasa] = useState();
    let [ mareoEntry, setMareoEn ] = useState(-1);
    const [ newCansansio, setCansanseo ] = useState([]);
    const [ newPosicionesCansanseo, setPosicionesCansanseo ] = useState([]);
    const [ newMareo, setMareo ] = useState([]);
    const [ newPosicionesMareo, setPosicionesMareo ] = useState([]);
    let [ sedEntry, setSedEn ] = useState(-1);
    let [ ganasDOrinarEntry, setGanasDOrinarEn ] = useState(-1);
    let [ hambreEntry, setHambreEn ] = useState(-1);
    const [ newSed, setSed ] = useState([]);
    const [ newPosicionesSed, setPosicionesSed ] = useState([]);
    const [ newGanasaDOrinar, setGanasDOrinar ] = useState([]);
    const [ newPosicionesGanasDOrinar, setPosicionesGanasDOrinar ] = useState([]);
    const [ newHambre, setHambre ] = useState([]);
    const [ newPosicionesHambre, setPosicionesHambre ] = useState([]);

    function onChange(date, dateString) {
        //const dateString2 = dateString;
        //console.log(date, dateString);
        //console.log(dateString);
        setFechaNacimiento(dateString);
    }

    //popup Window Circunferencia
    const [ isOpen, setIsOpen ] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    //popup Window Campos Corporales
    const [ isOpenCampCor, setIsOpenCampCor ] = useState(false);
    const togglePopupCampCor = () => {
        setIsOpenCampCor(!isOpenCampCor);
    };

    //popup Window Estado General
    const [ isOpenEstadoG, setIsOpenEstadoG ] = useState(false);
    const togglePopupEstadoG = () => {
        setIsOpenEstadoG(!isOpenEstadoG);
    };

    useEffect(() => {
        return () => {
            setState({});
        };
    }, []);

    useEffect(() => {
        fethInfo();
        return () => {
            setInfo([]);
        };
    }, [ window.location.hash ]);

    const fethInfo = async () => {
        try {
            const userId = window.location.hash.split('usuarios/')[ 1 ].trim();
            const { data, status } = await apiURL(
                `/informacionUsuarios/individual?usuario=${userId}`
            );
            console.log(data);
            setInfo(data);
        } catch (error) {
            console.groupCollapsed('Error en la funcion fetchInfo');
            console.error(error);
            console.groupEnd();
        }
    };

    //setInfo para circunfernecia
    const setinfo = async () => {
        const cintura = [
            30, 35, 33, 37, 40, 30, 35, 33, 37, 40, 30, 35, 33, 37, 40,
        ];
        const posisciones = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ];
        const posiscionesCad = [ 1, 2, 3, 4, 5, 6 ];
        //setPosicionesCinturas(posisciones);
        setCinturas(cintura);

        //Aqui lo que pienso que vas a tener que hacer es comparar cual tiene mas datos y agregar esa a las posiciones
        //algo como Inisio de test
        if (posisciones >= posiscionesCad) {
            setPosicionesCinturas(posisciones);
        } else {
            setPosicionesCinturas(posiscionesCad);
        }
        //fin de test

        const cadera = [ 40, 42, 39, 44, 45, 43 ];
        //const posiscionesCad = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        //setPosicionesCadera(posiscionesCad);
        setCadera(cadera);
    };

    //setInfo para campos corporales
    const setinfoCampCor = async () => {
        const grasa = [
            30, 35, 33, 37, 40, 30, 35, 33, 37, 40, 30, 35, 33, 37, 40,
        ];
        const posiscionesGrasa = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
        ];
        setPosicionesGrasa(posiscionesGrasa);
        setGrasa(grasa);

        const masa = [
            40, 42, 39, 44, 45, 43, 40, 38, 41, 48, 49, 44, 46, 40, 43,
        ];
        //const posiscionesMasa = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        //setPosicionesMasa(posiscionesMasa);
        setMasa(masa);

        const agua = [
            20, 25, 30, 22, 24, 28, 20, 19, 22, 23, 25, 24, 28, 29, 30,
        ];
        //const posiscionesAgua = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        //setPosicionesAgua(posiscionesAgua);
        setAgua(agua);

        const osea = [ 5, 10, 15, 10, 8, 4, 9, 12, 15, 18, 13, 17, 7, 9, 13 ];
        //const posiscionesOsea = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        //setPosicionesOsea(posiscionesOsea);
        setOsea(osea);

        const visceral = [
            50, 52, 55, 60, 68, 65, 62, 60, 57, 55, 52, 56, 57, 62, 67,
        ];
        //const posiscionesVisceral = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        //setPosicionesVisceral(posiscionesVisceral);
        setViceral(visceral);

        const tMetabolica = [
            80, 82, 85, 87, 82, 88, 90, 93, 98, 95, 94, 91, 88, 84, 87,
        ];
        //const posiscionesTMetabolica = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        //setPosicionesTMetabolica(posiscionesTMetabolica);
        setTMetabolica(tMetabolica);

        const eMetabolica = [
            70, 75, 72, 78, 82, 85, 80, 77, 74, 70, 69, 64, 60, 67, 70,
        ];
        //const posiscionesEMetabolica = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        //setPosicionesEMetabolica(posiscionesEMetabolica);
        setEMetabolica(eMetabolica);
    };

    //setInfo para estado general
    const setInfoEstadoGen = async () => {
        const cansancio = [
            30, 35, 33, 37, 40, 30, 35, 33, 37, 40, 30, 35, 33, 37, 40,
        ];
        const posiscionesCansancio = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
        ];
        setPosicionesCansanseo(posiscionesCansancio);
        setCansanseo(cansancio);

        const mareo = [
            40, 42, 39, 44, 45, 43, 40, 38, 41, 48, 49, 44, 46, 40, 43,
        ];
        //const posiscionesMareo= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        //setPosicionesMareo(posiscionesMareo);
        setMareo(mareo);

        const sed = [
            20, 25, 30, 22, 24, 28, 20, 19, 22, 23, 25, 24, 28, 29, 30,
        ];
        //const posiscionesSed = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        //setPosicionesAgua(posiscionesSed);
        setSed(sed);

        const GanDOriniar = [
            5, 10, 15, 10, 8, 4, 9, 12, 15, 18, 13, 17, 7, 9, 13,
        ];
        //const posiscionesGanDOrinar = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        //setPosicionesGanasDOrinar(posiscionesGanDOrinar);
        setGanasDOrinar(GanDOriniar);

        const hambre = [
            50, 52, 55, 60, 68, 65, 62, 60, 57, 55, 52, 56, 57, 62, 67,
        ];
        //const posiscionesHambre = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        //setPosicionesHambre(posiscionesHambre);
        setHambre(hambre);
    };

    /*
    const fethConsumo = async () => {
        try{
            const {data, status} = await apiURL(`/estadisticasConsumo/${window.location.pathname.split('usuarios/')[1]}`);
            console.log(data);
            setConsumo(data); 
        }catch(error){
            console.groupCollapsed('Error en la funcion fetchConsumo');
            console.error(error);
            console.groupEnd();
        }
    }

    const fethConsumo = async () => {
        try{
            const {data, status} = await apiURL(`/estadisticasConsumo/${window.location.pathname.split('usuarios/')[1]}`);
            console.log(data);
            setConsumo(data); 
        }catch(error){
            console.groupCollapsed('Error en la funcion fetchInfo');
            console.error(error);
            console.groupEnd();
        }
    }
    */

    const save = async () => {
        //guardar con patch o post.
    };

    const updateCinturas = () => {
        console.log('test');
        console.log(cinturaEntry);
        console.log(caderaEntry);
        if (cinturaEntry !== -1 || caderaEntry !== -1) {
            if (cinturaEntry !== -1) {
                setCinturas([ ...newCinturas, cinturaEntry ]);
                if (newCinturas.length >= newPosicionesCinturas.length) {
                    setPosicionesCinturas([
                        ...newPosicionesCinturas,
                        newPosicionesCinturas.length + 1,
                    ]);
                }
            } else {
                setCinturas([
                    ...newCinturas,
                    newCinturas[ newCinturas.length - 1 ],
                ]);
                //console.log("entering else")
                if (newCinturas.length >= newPosicionesCinturas.length) {
                    setPosicionesCinturas([
                        ...newPosicionesCinturas,
                        newPosicionesCinturas.length + 1,
                    ]);
                }
            }

            if (caderaEntry !== -1) {
                setCadera([ ...newCadera, caderaEntry ]);
                //setPosicionesCadera([...newPosicionesCadera,newPosicionesCadera.length+1]);
                if (newCadera.length >= newPosicionesCinturas.length) {
                    setPosicionesCinturas([
                        ...newPosicionesCinturas,
                        newPosicionesCinturas.length + 1,
                    ]);
                }
            } else {
                setCadera([ ...newCadera, newCadera[ newCadera.length - 1 ] ]);
                //console.log('entering else 2')
                if (newCinturas.length >= newPosicionesCinturas.length) {
                    setPosicionesCinturas([
                        ...newPosicionesCinturas,
                        newPosicionesCinturas.length + 1,
                    ]);
                }
            }
            setIsOpen(false);
        }
        setCinturaEn(-1);
        setCaderaEn(-1);
        //cinturaEntry = -1;
        //caderaEntry = -1;
        setIsOpen(false);

        //window.location.reload();

        /*
        let temp_copyCintura = [...newCinturas];
        let temp_elementCintura = {...temp_copyCintura};
        temp_elementCintura.counter = temp_elementCintura.counter+1;
        temp_copyCintura[0] = temp_elementCintura;
        setCinturas(temp_copyCintura);
        

        let temp_posicionesCintura = [...newPosicionesCinturas];
        let temp_elementPosicionesCintura = {...temp_posicionesCintura[0]};
        temp_posicionesCintura[0] = temp_elementPosicionesCintura+1;
        setPosicionesCinturas(temp_posicionesCintura);
        */
    };

    console.log(newCinturas);

    //Cirunferencia graph
    const dataCintura = {
        labels: newPosicionesCinturas,
        datasets: [
            {
                label: 'Cintura',
                fill: false,
                lineTension: 0.3,
                backgroundColor: 'rgba(75,192,19,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: newCinturas,
            },
            {
                label: 'Cadera',
                fill: false,
                lineTension: 0.3,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: newCadera,
            },
        ],
    };
    /*
      const dataCadera = {
        labels: ['January', 'February', 'March',
                 'April', 'May'],
        datasets: [
          {
            label: 'Cadera',
            fill: false,
            lineTension: 0.3,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [40, 42, 39, 44, 45]
          }
        ]
      }
      */

    const updateCampCor = () => {
        if (
            grasaEntry !== -1 ||
            masaEntry !== -1 ||
            aguaEntry !== -1 ||
            oseaEntry !== -1 ||
            visceralEntry !== -1 ||
            tMetabolicaEntry !== -1 ||
            eMetabolicaEntry !== -1
        ) {
            if (grasaEntry !== -1) {
                setGrasa([ ...newGrasa, grasaEntry ]);
                if (newGrasa.length >= newPosicionesGrasa.length) {
                    setPosicionesGrasa([
                        ...newPosicionesGrasa,
                        newPosicionesGrasa.length + 1,
                    ]);
                }
            } else {
                setGrasa([ ...newGrasa, newGrasa[ newGrasa.length - 1 ] ]);
                if (newGrasa.length >= newPosicionesGrasa.length) {
                    setPosicionesGrasa([
                        ...newPosicionesGrasa,
                        newPosicionesGrasa.length + 1,
                    ]);
                }
            }

            if (masaEntry !== -1) {
                setMasa([ ...newMasa, masaEntry ]);
                if (newMasa.length >= newPosicionesGrasa.length) {
                    setPosicionesGrasa([
                        ...newPosicionesGrasa,
                        newPosicionesGrasa.length + 1,
                    ]);
                }
            } else {
                setMasa([ ...newMasa, newMasa[ newMasa.length - 1 ] ]);
                if (newMasa.length >= newPosicionesGrasa.length) {
                    setPosicionesGrasa([
                        ...newPosicionesGrasa,
                        newPosicionesGrasa.length + 1,
                    ]);
                }
            }

            if (aguaEntry !== -1) {
                setAgua([ ...newAgua, aguaEntry ]);
                if (newAgua.length >= newPosicionesGrasa.length) {
                    setPosicionesGrasa([
                        ...newPosicionesGrasa,
                        newPosicionesGrasa.length + 1,
                    ]);
                }
            } else {
                setAgua([ ...newAgua, newAgua[ newAgua.length - 1 ] ]);
                if (newAgua.length >= newPosicionesGrasa.length) {
                    setPosicionesGrasa([
                        ...newPosicionesGrasa,
                        newPosicionesGrasa.length + 1,
                    ]);
                }
            }

            if (oseaEntry !== -1) {
                setOsea([ ...newOsea, oseaEntry ]);
                if (newOsea.length >= newPosicionesGrasa.length) {
                    setPosicionesGrasa([
                        ...newPosicionesGrasa,
                        newPosicionesGrasa.length + 1,
                    ]);
                }
            } else {
                setOsea([ ...newOsea, newOsea[ newOsea.length - 1 ] ]);
                if (newOsea.length >= newPosicionesGrasa.length) {
                    setPosicionesGrasa([
                        ...newPosicionesGrasa,
                        newPosicionesGrasa.length + 1,
                    ]);
                }
            }

            if (visceralEntry !== -1) {
                setViceral([ ...newVisceral, visceralEntry ]);
                if (newVisceral.length >= newPosicionesGrasa.length) {
                    setPosicionesGrasa([
                        ...newPosicionesGrasa,
                        newPosicionesGrasa.length + 1,
                    ]);
                }
            } else {
                setViceral([
                    ...newVisceral,
                    newVisceral[ newVisceral.length - 1 ],
                ]);
                if (newVisceral.length >= newPosicionesGrasa.length) {
                    setPosicionesGrasa([
                        ...newPosicionesGrasa,
                        newPosicionesGrasa.length + 1,
                    ]);
                }
            }

            if (tMetabolicaEntry !== -1) {
                setTMetabolica([ ...newTMetabolica, tMetabolicaEntry ]);
                if (newTMetabolica.length >= newPosicionesGrasa.length) {
                    setPosicionesGrasa([
                        ...newPosicionesGrasa,
                        newPosicionesGrasa.length + 1,
                    ]);
                }
            } else {
                setTMetabolica([
                    ...newTMetabolica,
                    newTMetabolica[ newTMetabolica.length - 1 ],
                ]);
                if (newTMetabolica.length >= newPosicionesGrasa.length) {
                    setPosicionesGrasa([
                        ...newPosicionesGrasa,
                        newPosicionesGrasa.length + 1,
                    ]);
                }
            }

            if (eMetabolicaEntry !== -1) {
                setEMetabolica([ ...newEMetabolica, eMetabolicaEntry ]);
                if (newEMetabolica.length >= newPosicionesGrasa.length) {
                    setPosicionesGrasa([
                        ...newPosicionesGrasa,
                        newPosicionesGrasa.length + 1,
                    ]);
                }
            } else {
                setEMetabolica([
                    ...newEMetabolica,
                    newEMetabolica[ newEMetabolica.length - 1 ],
                ]);
                if (newEMetabolica.length >= newPosicionesGrasa.length) {
                    setPosicionesGrasa([
                        ...newPosicionesGrasa,
                        newPosicionesGrasa.length + 1,
                    ]);
                }
            }
            setIsOpenCampCor(false);
        }
        setGrasaEn(-1);
        setMasaEn(-1);
        setAguaEn(-1);
        setOseaEn(-1);
        setVisceralEn(-1);
        setTMetabolicaEn(-1);
        setEMetabolicaEn(-1);
        setIsOpenCampCor(false);
    };

    console.log(newCinturas);

    //Cirunferencia graph
    const dataCampCor = {
        labels: newPosicionesGrasa,
        datasets: [
            {
                label: 'Grasa',
                fill: false,
                lineTension: 0.3,
                backgroundColor: 'rgba(75,192,19,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: newGrasa,
            },
            {
                label: 'Masa',
                fill: false,
                lineTension: 0.3,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: newMasa,
            },
            {
                label: 'Agua',
                fill: false,
                lineTension: 0.3,
                backgroundColor: 'rgba(75,19,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: newAgua,
            },
            {
                label: 'Osea',
                fill: false,
                lineTension: 0.3,
                backgroundColor: 'rgba(175,19,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: newOsea,
            },
            {
                label: 'Visceral',
                fill: false,
                lineTension: 0.3,
                backgroundColor: 'rgba(250,19,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: newVisceral,
            },
            {
                label: 'Tasa metabolica',
                fill: false,
                lineTension: 0.3,
                backgroundColor: 'rgba(250,219,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: newTMetabolica,
            },
            {
                label: 'Edad metabolica',
                fill: false,
                lineTension: 0.3,
                backgroundColor: 'rgba(200,200,25,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: newEMetabolica,
            },
        ],
    };

    //This part is being used for test purposes only

    const updateEstadoGeneral = () => {
        if (
            cansansioEntry !== -1 ||
            mareoEntry !== -1 ||
            sedEntry !== -1 ||
            ganasDOrinarEntry !== -1 ||
            hambreEntry !== -1
        ) {
            if (cansansioEntry !== -1) {
                setCansanseo([ ...newCansansio, cansansioEntry ]);
                if (newCansansio.length >= newPosicionesCansanseo.length) {
                    setPosicionesCansanseo([
                        ...newPosicionesCansanseo,
                        newPosicionesCansanseo.length + 1,
                    ]);
                }
            } else {
                setCansanseo([
                    ...newCansansio,
                    newCansansio[ newCansansio.length - 1 ],
                ]);
                if (newCansansio.length >= newPosicionesCansanseo.length) {
                    setPosicionesCansanseo([
                        ...newPosicionesCansanseo,
                        newPosicionesCansanseo.length + 1,
                    ]);
                }
            }

            if (mareoEntry !== -1) {
                setMareo([ ...newMareo, mareoEntry ]);
                if (newMareo.length >= newPosicionesCansanseo.length) {
                    setPosicionesCansanseo([
                        ...newPosicionesCansanseo,
                        newPosicionesCansanseo.length + 1,
                    ]);
                }
            } else {
                setMareo([ ...newMareo, newMareo[ newMareo.length - 1 ] ]);
                if (newMareo.length >= newPosicionesCansanseo.length) {
                    setPosicionesCansanseo([
                        ...newPosicionesCansanseo,
                        newPosicionesCansanseo.length + 1,
                    ]);
                }
            }

            if (sedEntry !== -1) {
                setSed([ ...newSed, sedEntry ]);
                if (newSed.length >= newPosicionesCansanseo.length) {
                    setPosicionesCansanseo([
                        ...newPosicionesCansanseo,
                        newPosicionesCansanseo.length + 1,
                    ]);
                }
            } else {
                setSed([ ...newSed, newSed[ newSed.length - 1 ] ]);
                if (newSed.length >= newPosicionesCansanseo.length) {
                    setPosicionesCansanseo([
                        ...newPosicionesCansanseo,
                        newPosicionesCansanseo.length + 1,
                    ]);
                }
            }

            if (ganasDOrinarEntry !== -1) {
                setGanasDOrinar([ ...newGanasaDOrinar, ganasDOrinarEntry ]);
                if (newGanasaDOrinar.length >= newPosicionesCansanseo.length) {
                    setPosicionesCansanseo([
                        ...newPosicionesCansanseo,
                        newPosicionesCansanseo.length + 1,
                    ]);
                }
            } else {
                setGanasDOrinar([
                    ...newGanasaDOrinar,
                    newGanasaDOrinar[ newGanasaDOrinar.length - 1 ],
                ]);
                if (newGanasaDOrinar.length >= newPosicionesCansanseo.length) {
                    setPosicionesCansanseo([
                        ...newPosicionesCansanseo,
                        newPosicionesCansanseo.length + 1,
                    ]);
                }
            }

            if (hambreEntry !== -1) {
                setHambre([ ...newHambre, hambreEntry ]);
                if (newHambre.length >= newPosicionesCansanseo.length) {
                    setPosicionesCansanseo([
                        ...newPosicionesCansanseo,
                        newPosicionesCansanseo.length + 1,
                    ]);
                }
            } else {
                setHambre([ ...newHambre, newHambre[ newHambre.length - 1 ] ]);
                if (newHambre.length >= newPosicionesCansanseo.length) {
                    setPosicionesCansanseo([
                        ...newPosicionesCansanseo,
                        newPosicionesCansanseo.length + 1,
                    ]);
                }
            }
            setIsOpenEstadoG(false);
        }

        setCansansioEn(-1);
        setMareoEn(-1);
        setSedEn(-1);
        setGanasDOrinarEn(-1);
        setHambreEn(-1);
        setIsOpenEstadoG(false);
    };

    //Estado General graph
    const dataEstadoGeneral = {
        labels: newPosicionesCansanseo,
        datasets: [
            {
                label: 'Cansancio',
                fill: false,
                lineTension: 0.3,
                backgroundColor: 'rgba(75,192,19,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: newCansansio,
            },
            {
                label: 'Mareo',
                fill: false,
                lineTension: 0.3,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: newMareo,
            },
            {
                label: 'Sed',
                fill: false,
                lineTension: 0.3,
                backgroundColor: 'rgba(75,19,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: newSed,
            },
            {
                label: 'Ganas de Orinar',
                fill: false,
                lineTension: 0.3,
                backgroundColor: 'rgba(175,19,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: newGanasaDOrinar,
            },
            {
                label: 'Hambre',
                fill: false,
                lineTension: 0.3,
                backgroundColor: 'rgba(250,19,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: newHambre,
            },
        ],
    };

    //end test

    async function GuardarCambios() {
        //const test = document.getElementByName('nombre');
        /*
        console.log(name);
        console.log(apellidoP);
        console.log(apellidoM);
        console.log(celular);
        console.log(ciudadResidencia);
        console.log(tiempoResidando);
        console.log(estadoDeNacomiento);
        console.log(fechaNacimiento);
        console.log(genero);
        */
        if (name !== '') {
            info.nombre = name;
            console.log(info.nombre);
        }

        if (apellidoP !== '') {
            info.apellidoPaterno = apellidoP;
            console.log(info.apellidoPaterno);
        }

        if (apellidoM !== '') {
            info.apellidoMaterno = apellidoM;
            console.log(info.apellidoMaterno);
        }

        if (celular !== '') {
            info.celular = celular;
            console.log(info.celular);
        }

        if (ciudadResidencia !== '') {
            info.ciudadDeResidencia = ciudadResidencia;
            console.log(info.ciudadDeResidencia);
        }

        if (tiempoResidando !== '') {
            info.tiempoViviendoAhi = tiempoResidando;
            console.log(info.tiempoViviendoAhi);
        }

        if (estadoDeNacomiento !== '') {
            info.estadoDeNacimiento = estadoDeNacomiento;
            console.log(info.estadoDeNacimiento);
        }

        if (fechaNacimiento !== '') {
            info.fechaDeNacimiento = fechaNacimiento;
            console.log(info.fechaDeNacimiento);
        }

        if (genero !== '') {
            info.genero = genero;
            console.log(info.genero);
        }
    }

    function handleChange(value, e) { }

    return (
        <>
            <div className='glassbackground'>
                <div className='containerBasicInfo'>
                    <div className='basicInfo-Title'>Profile Settings</div>

                    <div className='profile-imgBasic'>
                        <img src={profile} className='photo' alt='profile' />
                    </div>

                    <div className='basicInfo-Name-Container'>
                        <div className='basicInfo-Name-Container2'>
                            <label className='id-name'>Nombre:</label>
                            <input
                                className='lb-name'
                                placeholder={info.nombre || ''}
                                type='text'
                                name='nombre'
                                onChange={(event) =>
                                    setName(event.target.value)
                                }></input>
                        </div>
                        <div className='basicInfo-Name-Container2'>
                            <label className='id-name'>Apellido Paterno:</label>
                            <input
                                className='lb-name'
                                placeholder={info.apellidoPaterno || ''}
                                type='text'
                                name='apellidoPaterno'
                                onChange={(event) =>
                                    setApellidoP(event.target.value)
                                }></input>
                        </div>
                        <div className='basicInfo-Name-Container2'>
                            <label className='id-name'>Apellido Materno:</label>
                            <input
                                className='lb-name'
                                placeholder={info.apellidoMaterno || ''}
                                type='text'
                                name='apellidoMaterno'
                                onChange={(event) =>
                                    setApellidoM(event.target.value)
                                }></input>
                        </div>
                    </div>
                    <div className='basicInfo-homeCel-Container'>
                        <div className='basicInfo-homeCel-Container2'>
                            <label className='id-name'>Celular:</label>
                            <input
                                className='lb-name'
                                placeholder={info.celular || ''}
                                type='number'
                                name='celular'
                                onChange={(event) =>
                                    setCelular(event.target.value)
                                }></input>
                        </div>
                        <div className='basicInfo-homeCel-Container2'>
                            <label className='id-name'>
                                Ciudad de residencia:
                            </label>
                            <input
                                className='lb-name'
                                placeholder={info.ciudadDeResidencia || ''}
                                type='text'
                                name='ciudad'
                                onChange={(event) =>
                                    setCiudadResidencia(event.target.value)
                                }></input>
                        </div>
                        <div className='basicInfo-homeCel-Container2'>
                            <label className='id-name'>Tiempo Residando:</label>
                            <input
                                className='lb-name'
                                placeholder={info.tiempoViviendoAhi || ''}
                                type='text'
                                name='residando'
                                onChange={(event) =>
                                    setTiempoResidando(event.target.value)
                                }></input>
                        </div>
                    </div>
                    <div className='basicInfo-birthPlaceGender-Container'>
                        <div className='basicInfo-birthPlaceGender-Container2'>
                            <label className='id-name'>
                                Estado de Nacimiento:
                            </label>
                            <input
                                className='lb-name'
                                placeholder={info.estadoDeNacimiento || ''}
                                type='text'
                                name='estadoDN'
                                onChange={(event) =>
                                    setEstadoDeNacimiento(event.target.value)
                                }></input>
                        </div>
                        <div className='basicInfo-birthPlaceGender-Container2'>
                            <label className='id-name'>
                                Fecha de Nacimiento:
                            </label>
                            <Space direction='vertical'>
                                <DatePicker
                                    placeholder={info.fechaDeNacimiento || ''}
                                    onChange={onChange}
                                />
                            </Space>
                            {/*<input className='lb-name' placeholder={info.fechaDeNacimiento || ''} type="text" name='fechaDN' onChange={event => setFechaNacimiento(event.target.value)}></input>*/}
                        </div>
                        <div className='basicInfo-birthPlaceGender-Container2'>
                            <label className='id-name'>Genero:</label>
                            <input
                                className='lb-name'
                                placeholder={info.genero || ''}
                                type='text'
                                name='genero'
                                onChange={(event) =>
                                    setGenero(event.target.value)
                                }></input>
                        </div>
                    </div>
                    <div className='basicInfo-Save-Container'>
                        <div className='basicInfo-Save-Container2'>
                            <button
                                className='btn-Save-basicInfo'
                                onClick={() => GuardarCambios()}>
                                Save
                            </button>
                        </div>
                    </div>
                </div>

                <div className='containerCircunferencia'>
                    <div className='basicInfo-Title'>Circunferencia</div>
                    {/*
                    <div className='circunferencia-Container'>
                        <div id='select-pro'>
                        <ul>
                            {lista}
                        </ul>
                        </div> 
                        <div className='circunferencia-Container2'>
                            <label className='label-circunferencia'>Cintura:</label>
                            <input className='input-circunferencia'  type="text" name='nombre' /*onChange={event => setName(event.target.value)}></input>
                        </div>
                        <div id='select-pro'>
                            <Select className = 'select-pro2' labelInValue defaultValue={{ value: 'Cadera' }} >
                            {
                                lista.map( index => (
                                <Option placeholder={'Cadera' || ''} >{lista || ''}</Option>
                                ))
                            }                  
                            </Select>
                        </div> 
                        <div className='circunferencia-Container2'>
                            <label className='label-circunferencia'>Cadera:</label>
                            <input className='input-circunferencia' type="text" name='nombre' /*onChange={event => setName(event.target.value)}></input>
                        </div>
                    </div>
                        */}
                    {/*Grafica-----------------------------------------------------------------------*/}
                    <div className='circunferencia-Container3'>
                        <div>
                            <Line
                                width={750}
                                height={500}
                                data={dataCintura}
                                options={{
                                    maintainAspectRatio: false,
                                    /*
                                yAxes:[{
                                    ticks: {
                                        beginAtZero: true,
                                        min:0,
                                        max: 100,
                                        stepSize:20
                                    }
                                }],/*
                                xAxes:[{
                                    ticks: {
                                        beginAtZero: true,
                                        min:0,
                                        max: 100,
                                        stepSize:20
                                    }
                                }],*/
                                    //scales: { xAxes: [{ gridLines: { display: false } }], yAxes: [{ gridLines: { display: false } }] },
                                    title: {
                                        display: true,
                                        text: 'Circunferencia',
                                        fontSize: 20,
                                    },
                                    legend: {
                                        display: true,
                                        position: 'right',
                                    },
                                }}
                            />
                        </div>
                        {/*
                        <div className='circunferencia-Container3'>
                            <Line
                                data={dataCadera}
                                options={{
                                title:{
                                    display:true,
                                    text:'Average Rainfall per month',
                                    fontSize:20
                                },
                                legend:{
                                    display:true,
                                    position:'right'
                                }
                                }}
                            />
                        </div>
                            */}
                    </div>
                    {/*Fin de grafica----------------------------------------------------------------*/}
                    <div>
                        <div className='circunferencia-Container'>
                            {/*
                            <div className='circunferencia-Container2'>
                                <label className='label-circunferencia'>Cintura:</label>
                                <input className='input-circunferencia' type="text" name='nombre' /*onChange={event => setName(event.target.value)}></input>
                            </div>
                            <div className='circunferencia-Container2'>
                                <label className='label-circunferencia'>Cadera:</label>
                                <input className='input-circunferencia' type="text" name='nombre' /*onChange={event => setName(event.target.value)}></input>
                            </div>
                            */}
                            <div className='campoCor-Container2'>
                                <input
                                    type='button'
                                    value='Agregar'
                                    onClick={togglePopup}
                                    className='btn-see-circunferencia'
                                />
                                <p></p>
                                {isOpen && (
                                    <Popup
                                        content={
                                            <>
                                                <b>Agregando un nuevo valor</b>
                                                <div>
                                                    <div className='circunferencia-Container'>
                                                        <div className='circunferencia-Container4'>
                                                            <label className='label-circunferencia'>
                                                                Cintura:
                                                            </label>
                                                            <input
                                                                className='input-circunferencia'
                                                                type='number'
                                                                name='numero'
                                                                min={0}
                                                                placeholder={''}
                                                                onChange={(
                                                                    event
                                                                ) =>
                                                                    setCinturaEn(
                                                                        event
                                                                            .target
                                                                            .value
                                                                    )
                                                                }></input>
                                                        </div>
                                                        <div className='circunferencia-Container4'>
                                                            <label className='label-circunferencia'>
                                                                Cadera:
                                                            </label>
                                                            <input
                                                                className='input-circunferencia'
                                                                type='number'
                                                                name='numero'
                                                                min={0}
                                                                placeholder={''}
                                                                onChange={(
                                                                    event
                                                                ) =>
                                                                    setCaderaEn(
                                                                        event
                                                                            .target
                                                                            .value
                                                                    )
                                                                }></input>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button
                                                    className='btn-see-circunferencia'
                                                    onClick={updateCinturas}
                                                    value='Add'>
                                                    Agregar
                                                </button>
                                            </>
                                        }
                                        handleClose={togglePopup}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                {/*
                <div className='containerCampoCor'>
                    <div className='basicInfo-Title'>
                        Campos Corporales
                    </div>
                    <div >
                        <div className='campCor-Container'>
                            <div className='campoCor-Container2'>
                                <label className='label-campCor'>Porcentaje de grasa:</label>
                                <input className='input-campCor' type="text" name='nombre' /*onChange={event => setName(event.target.value)></input>
                            </div>
                            <div className='campoCor-Container2'>
                                <label className='label-campCor'>Porcentaje de masa:</label>
                                <input className='input-campCor' type="text" name='nombre' /*onChange={event => setName(event.target.value)}></input>
                            </div>
                            <div className='campoCor-Container2'>
                                <label className='label-campCor'>Porcentaje de agua:</label>
                                <input className='input-campCor' type="text" name='nombre' /*onChange={event => setName(event.target.value)}></input>
                            </div>
                        </div>
                        
                    </div>
                    <div >
                        <div className='campCor-Container'>
                            <div className='campoCor-Container2'>
                                <label className='label-campCor'>Densidad osea:</label>
                                <input className='input-campCor' type="text" name='nombre' /*onChange={event => setName(event.target.value)}></input>
                            </div>
                            <div className='campoCor-Container2'>
                                <label className='label-campCor'>Grasa viseral:</label>
                                <input className='input-campCor' type="text" name='nombre' /*onChange={event => setName(event.target.value)}></input>
                            </div>
                            <div className='campoCor-Container2'>
                                <label className='label-campCor'>Tasa Metabolica:</label>
                                <input className='input-campCor' type="text" name='nombre' /*onChange={event => setName(event.target.value)}></input>
                            </div>
                        </div>
                    </div>

                    <div >
                        <div className='campCor-Container'>
                            <div className='campoCor-Container2'>
                                <label className='label-campCor2'>Edad metabolica:</label>
                                <input className='input-campCor2' type="text" name='nombre' /*onChange={event => setName(event.target.value)}></input>
                            </div>
                            
                        </div>
                    </div>

                    <div >
                        <div className='campCor-Container'>
                            <div className='campoCor-Container2'>
                                <button className='btn-see-camCor' /*onClick={() => GuardarCambios()}>Mostrar Grafica</button>
                            </div>
                        </div>
                    </div>
                </div>
                */}

                {/*new Campos Corporales--------------------------------------------------------------------------------------------------------------------------------------------------- */}
                <div className='containerCampoCor'>
                    <div className='basicInfo-Title'>Campos Corporales</div>
                    {/*Grafica-----------------------------------------------------------------------*/}
                    <div className='campCor-Container3'>
                        <div>
                            <Line
                                width={750}
                                height={500}
                                data={dataCampCor}
                                options={{
                                    maintainAspectRatio: false,
                                    title: {
                                        display: true,
                                        text: 'Campos Corporales',
                                        fontSize: 20,
                                    },
                                    legend: {
                                        display: true,
                                        position: 'right',
                                    },
                                }}
                            />
                        </div>
                    </div>
                    {/*Fin de grafica----------------------------------------------------------------*/}
                    <div>
                        <div className='campCor-Container'>
                            <div className='campoCor-Container2'>
                                <input
                                    type='button'
                                    value='Agregar'
                                    onClick={togglePopupCampCor}
                                    className='btn-see-camCor'
                                />
                                <p></p>
                                {isOpenCampCor && (
                                    <Popup
                                        content={
                                            <>
                                                <b>Agregando un nuevo valor</b>
                                                <div>
                                                    <div className='campoCor-Container'>
                                                        <div className='campCor-Container4'>
                                                            <label className='label-campCor'>
                                                                Porcentaje de
                                                                grasa:
                                                            </label>
                                                            <input
                                                                className='input-campCor'
                                                                type='number'
                                                                name='numero'
                                                                min={0}
                                                                placeholder={''}
                                                                onChange={(
                                                                    event
                                                                ) =>
                                                                    setGrasaEn(
                                                                        event
                                                                            .target
                                                                            .value
                                                                    )
                                                                }></input>
                                                        </div>
                                                        <div className='campCor-Container4'>
                                                            <label className='label-campCor'>
                                                                Porcentaje de
                                                                masa:
                                                            </label>
                                                            <input
                                                                className='input-campCor'
                                                                type='number'
                                                                name='numero'
                                                                min={0}
                                                                placeholder={''}
                                                                onChange={(
                                                                    event
                                                                ) =>
                                                                    setMasaEn(
                                                                        event
                                                                            .target
                                                                            .value
                                                                    )
                                                                }></input>
                                                        </div>
                                                        <div className='campCor-Container4'>
                                                            <label className='label-campCor'>
                                                                Porcentaje de
                                                                agua:
                                                            </label>
                                                            <input
                                                                className='input-campCor'
                                                                type='number'
                                                                name='numero'
                                                                min={0}
                                                                placeholder={''}
                                                                onChange={(
                                                                    event
                                                                ) =>
                                                                    setAguaEn(
                                                                        event
                                                                            .target
                                                                            .value
                                                                    )
                                                                }></input>
                                                        </div>
                                                        <div className='campCor-Container4'>
                                                            <label className='label-campCor'>
                                                                Densidad osea:
                                                            </label>
                                                            <input
                                                                className='input-campCor'
                                                                type='number'
                                                                name='numero'
                                                                min={0}
                                                                placeholder={''}
                                                                onChange={(
                                                                    event
                                                                ) =>
                                                                    setOseaEn(
                                                                        event
                                                                            .target
                                                                            .value
                                                                    )
                                                                }></input>
                                                        </div>
                                                        <div className='campCor-Container4'>
                                                            <label className='label-campCor'>
                                                                Grasa visceral:
                                                            </label>
                                                            <input
                                                                className='input-campCor'
                                                                type='number'
                                                                name='numero'
                                                                min={0}
                                                                placeholder={''}
                                                                onChange={(
                                                                    event
                                                                ) =>
                                                                    setVisceralEn(
                                                                        event
                                                                            .target
                                                                            .value
                                                                    )
                                                                }></input>
                                                        </div>
                                                        <div className='campCor-Container4'>
                                                            <label className='label-campCor'>
                                                                Tasa metabolica:
                                                            </label>
                                                            <input
                                                                className='input-campCor'
                                                                type='number'
                                                                name='numero'
                                                                min={0}
                                                                placeholder={''}
                                                                onChange={(
                                                                    event
                                                                ) =>
                                                                    setTMetabolicaEn(
                                                                        event
                                                                            .target
                                                                            .value
                                                                    )
                                                                }></input>
                                                        </div>
                                                        <div className='campCor-Container4'>
                                                            <label className='label-campCor'>
                                                                Edad metabolica:
                                                            </label>
                                                            <input
                                                                className='input-campCor'
                                                                type='number'
                                                                name='numero'
                                                                min={0}
                                                                placeholder={''}
                                                                onChange={(
                                                                    event
                                                                ) =>
                                                                    setEMetabolicaEn(
                                                                        event
                                                                            .target
                                                                            .value
                                                                    )
                                                                }></input>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button
                                                    className='btn-see-camCor'
                                                    onClick={updateCampCor}
                                                    value='Add'>
                                                    Agregar
                                                </button>
                                            </>
                                        }
                                        handleClose={togglePopupCampCor}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/*----------------------------------------------------------------------------------------------------------------------------------------------------*/}
                {/*
                <div className='containerEstadoGen'>
                    <div className='basicInfo-Title'>
                        Estado General
                    </div>
                    <div >
                        <div className='estadoGen-Container'>
                            <div className='estadoGen-Container2'>
                                <label className='label-estadoGen'>Nivel de cansancio:</label>
                                <input className='input-campCor' type="text" name='nombre' /*onChange={event => setName(event.target.value)}></input>
                            </div>
                            <div className='estadoGen-Container2'>
                                <label className='label-estadoGen'>Mareos:</label>
                                <input className='input-campCor' type="text" name='nombre' /*onChange={event => setName(event.target.value)}></input>
                            </div>
                            <div className='estadoGen-Container2'>
                                <label className='label-estadoGen'>Nivel de sed:</label>
                                <input className='input-campCor' type="text" name='nombre' /*onChange={event => setName(event.target.value)}></input>
                            </div>
                        </div>
                        
                    </div>

                    <div >
                        <div className='estadoGen-Container'>
                            <div className='estadoGen-Container2'>
                                <label className='label-estadoGen'>Frecuencia de orinar:</label>
                                <input className='input-campCor' type="text" name='nombre' /*onChange={event => setName(event.target.value)}></input>
                            </div>
                            <div className='estadoGen-Container2'>
                                <label className='label-estadoGen'>Frecuencia de hambre:</label>
                                <input className='input-campCor' type="text" name='nombre' /*onChange={event => setName(event.target.value)}></input>
                            </div>
                        </div>
                    </div>

                    <div >
                        <div className='estadoGen-Container'>
                            <div className='estadoGen-Container2'>
                                <label className='label-estadoGen2'>___________________________________________________________________________________________________</label>
                                <label className='label-estadoGen3'>Pies y Manos</label>
                            </div>
                            
                        </div>
                    </div>

                    <div >
                        <div className='estadoGen-Container'>
                            <div className='estadoGen-Container2'>
                                <label className='label-estadoGen'>Se hinchan:</label>
                                <input className='input-campCor' type="text" name='nombre' /*onChange={event => setName(event.target.value)}></input>
                            </div>
                            <div className='estadoGen-Container2'>
                                <label className='label-estadoGen'>A que Hora:</label>
                                <input className='input-campCor' type="text" name='nombre' /*onChange={event => setName(event.target.value)}></input>
                            </div>
                            <div className='estadoGen-Container2'>
                                <label className='label-estadoGen'>Frecuencia:</label>
                                <input className='input-campCor' type="text" name='nombre' /*onChange={event => setName(event.target.value)}></input>
                            </div>
                        </div>
                    </div>

                    <div >
                        <div className='estadoGen-Container'>
                            <div className='estadoGen-Container2'>
                                <label className='label-estadoGen'>Horas sentado:</label>
                                <input className='input-campCor' type="text" name='nombre' /*onChange={event => setName(event.target.value)}></input>
                            </div>
                            <div className='estadoGen-Container2'>
                                <label className='label-estadoGen'>Horas parado:</label>
                                <input className='input-campCor' type="text" name='nombre' /*onChange={event => setName(event.target.value)}></input>
                            </div>
                        </div>
                    </div>

                    <div >
                        <div className='estadoGen-Container'>
                            <div className='estadoGen-Container2'>
                                <button className='btn-see-camCor' /*onClick={() => GuardarCambios()}>Mostrar Grafica</button>
                            </div>
                        </div>
                    </div>
                </div>
                */}

                {/*new Estado General--------------------------------------------------------------------------------------------------------------------------------------------------- */}
                <div className='containerCampoCor'>
                    <div className='basicInfo-Title'>Estado General</div>
                    {/*Grafica-----------------------------------------------------------------------*/}
                    <div className='campCor-Container3'>
                        <div>
                            <Line
                                width={750}
                                height={500}
                                data={dataEstadoGeneral}
                                options={{
                                    maintainAspectRatio: false,
                                    title: {
                                        display: true,
                                        text: 'Campos Corporales',
                                        fontSize: 20,
                                    },
                                    legend: {
                                        display: true,
                                        position: 'right',
                                    },
                                }}
                            />
                        </div>
                    </div>
                    {/*Fin de grafica----------------------------------------------------------------*/}
                    <div>
                        <div className='campCor-Container'>
                            <div className='campoCor-Container2'>
                                <input
                                    type='button'
                                    value='Agregar'
                                    onClick={togglePopupEstadoG}
                                    className='btn-see-camCor'
                                />
                                <p></p>
                                {isOpenEstadoG && (
                                    <Popup
                                        content={
                                            <>
                                                <b>Agregando un nuevo valor</b>
                                                <div>
                                                    <div className='campoCor-Container'>
                                                        <div className='campCor-Container4'>
                                                            <label className='label-campCor'>
                                                                Nivel de
                                                                cansancio:
                                                            </label>
                                                            <input
                                                                className='input-campCor'
                                                                type='number'
                                                                name='numero'
                                                                min={0}
                                                                placeholder={''}
                                                                onChange={(
                                                                    event
                                                                ) =>
                                                                    setCansansioEn(
                                                                        event
                                                                            .target
                                                                            .value
                                                                    )
                                                                }></input>
                                                        </div>
                                                        <div className='campCor-Container4'>
                                                            <label className='label-campCor'>
                                                                Nivel de mareo:
                                                            </label>
                                                            <input
                                                                className='input-campCor'
                                                                type='number'
                                                                name='numero'
                                                                min={0}
                                                                placeholder={''}
                                                                onChange={(
                                                                    event
                                                                ) =>
                                                                    setMareoEn(
                                                                        event
                                                                            .target
                                                                            .value
                                                                    )
                                                                }></input>
                                                        </div>
                                                        <div className='campCor-Container4'>
                                                            <label className='label-campCor'>
                                                                Nivel de sed:
                                                            </label>
                                                            <input
                                                                className='input-campCor'
                                                                type='number'
                                                                name='numero'
                                                                min={0}
                                                                placeholder={''}
                                                                onChange={(
                                                                    event
                                                                ) =>
                                                                    setSedEn(
                                                                        event
                                                                            .target
                                                                            .value
                                                                    )
                                                                }></input>
                                                        </div>
                                                        <div className='campCor-Container4'>
                                                            <label className='label-campCor'>
                                                                Frecuencia de
                                                                orinar:
                                                            </label>
                                                            <input
                                                                className='input-campCor'
                                                                type='number'
                                                                name='numero'
                                                                min={0}
                                                                placeholder={''}
                                                                onChange={(
                                                                    event
                                                                ) =>
                                                                    setGanasDOrinarEn(
                                                                        event
                                                                            .target
                                                                            .value
                                                                    )
                                                                }></input>
                                                        </div>
                                                        <div className='campCor-Container4'>
                                                            <label className='label-campCor'>
                                                                Nivel de sed:
                                                            </label>
                                                            <input
                                                                className='input-campCor'
                                                                type='number'
                                                                name='numero'
                                                                min={0}
                                                                placeholder={''}
                                                                onChange={(
                                                                    event
                                                                ) =>
                                                                    setHambreEn(
                                                                        event
                                                                            .target
                                                                            .value
                                                                    )
                                                                }></input>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button
                                                    className='btn-see-camCor'
                                                    onClick={
                                                        updateEstadoGeneral
                                                    }
                                                    value='Add'>
                                                    Agregar
                                                </button>
                                            </>
                                        }
                                        handleClose={togglePopupEstadoG}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Usuarios;
