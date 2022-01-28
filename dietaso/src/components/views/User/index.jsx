import React, {useState,useEffect,Component} from 'react'
import {Select} from 'antd';
import apiURL from '../../../axios/axiosConfig';
import './user.scss';
import profile from "./profile.jpg";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'
import Popup from './popup';

//para lo del calendario 
import { DatePicker, Space } from 'antd';


const Usuarios = () => {
    
    //var CanvasJSChart = CanvasJSReact.CanvasJSChart;

    //Get the id from params
    const [info, setInfo] = useState({});
    const [state, setState] = useState({});
    //const [consumo, setConsumo] = useState({});
    const { Option } = Select;
    //Variables 
    const [name, setName] = useState('');
    const [apellidoP, setApellidoP] = useState('');
    const [apellidoM, setApellidoM] = useState('');
    const [celular, setCelular] = useState('');
    const [ciudadResidencia, setCiudadResidencia] = useState('');
    const [tiempoResidando, setTiempoResidando] = useState('');
    const [estadoDeNacomiento, setEstadoDeNacimiento] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [genero, setGenero] = useState('');

    //Circunferencia
    let [cinturaEntry, setCinturaEn] = useState(-1);
    const [posicionCintura, setPosicionCin] = useState();
    let [caderaEntry, setCaderaEn] = useState(-1);
    const [newCinturas, setCinturas] = useState([]);
    const [newPosicionesCinturas, setPosicionesCinturas] = useState([]);
    const [newCadera, setCadera] = useState([]);
    //const [newPosicionesCadera, setPosicionesCadera] = useState([]);

    //Campos Corporales
    let [grasaEntry, setGrasaEn] = useState(-1);
    //const [posicionGrasa, setPosicionGrasa] = useState();
    let [masaEntry, setMasaEn] = useState(-1);
    const [newGrasa, setGrasa] = useState([]);
    const [newPosicionesCampCor, setPosicionesCampCor] = useState([]);
    //const [newPosicionesGrasa, setPosicionesGrasa] = useState([]);
    const [newMasa, setMasa] = useState([]);
    //const [newPosicionesMasa, setPosicionesMasa] = useState([]);
    let [aguaEntry, setAguaEn] = useState(-1);
    let [oseaEntry, setOseaEn] = useState(-1);
    let [visceralEntry, setVisceralEn] = useState(-1);
    let [tMetabolicaEntry, setTMetabolicaEn] = useState(-1);
    let [eMetabolicaEntry, setEMetabolicaEn] = useState(-1);
    const [newAgua, setAgua] = useState([]);
    //const [newPosicionesAgua, setPosicionesAgua] = useState([]);
    const [newOsea, setOsea] = useState([]);
    //const [newPosicionesOsea, setPosicionesOsea] = useState([]);
    const [newVisceral, setViceral] = useState([]);
    //const [newPosicionesViscelar, setPosicionesVisceral] = useState([]);
    const [newTMetabolica, setTMetabolica] = useState([]); //Tasa Metabolica
    //const [newPosicionesTMetabolica, setPosicionesTMetabolica] = useState([]);
    const [newEMetabolica, setEMetabolica] = useState([]);//Edad metabolica
    //const [newPosicionesEMetabolica, setPosicionesEMetabolica] = useState([]);

    //Estado General
    let [cansansioEntry, setCansansioEn] = useState(-1);
    //const [posicionGrasa, setPosicionGrasa] = useState();
    let [mareoEntry, setMareoEn] = useState(-1);
    const [newCansansio, setCansanseo] = useState([]);
    const [newPosicionesEstadoGen, setPosicionesEstadoGen] = useState([]);
    //const [newPosicionesCansanseo, setPosicionesCansanseo] = useState([]);
    const [newMareo, setMareo] = useState([]);
    //const [newPosicionesMareo, setPosicionesMareo] = useState([]);
    let [sedEntry, setSedEn] = useState(-1);
    let [ganasDOrinarEntry, setGanasDOrinarEn] = useState(-1);
    let [hambreEntry, setHambreEn] = useState(-1);
    const [newSed, setSed] = useState([]);
    //const [newPosicionesSed, setPosicionesSed] = useState([]);
    const [newGanasaDOrinar, setGanasDOrinar] = useState([]);
    //const [newPosicionesGanasDOrinar, setPosicionesGanasDOrinar] = useState([]);
    const [newHambre, setHambre] = useState([]);
    //const [newPosicionesHambre, setPosicionesHambre] = useState([]);

    //Exposicion Solar 
    let [minSolEntry, setMinSolEn] = useState(-1);
    let [cubrePielEntry, setCubrePielEn] = useState(-1);
    let [bloqueadorSolEntry, setBloqueadroSolEn] = useState(-1);
    let [diasXSemEntry, setDiasXSemEn] = useState(-1);
    const [newMinSol, setMinSol] = useState([]);
    const [newCubrePiel, setCubrePiel] = useState([]);
    const [newBloqueadorSol, setBloqueadorSol] = useState([]);
    const [newDiasXSem, setDiasXSem] = useState([]);
    const [newPosicionesExpoSol, setPosicionesExpoSol] = useState([]);

    //Gastro intestinal 
    const [inflamacionIntestinal,setInflaInt] = useState();
    const [diarea,setDiarrea] = useState();
    const [estrenimiento,setEstrenimiento] = useState();
    const [reflujo,setReflujo] = useState();
    const [frecuenciaInflamacionIntestinal,setFrecuenciaInfInt] = useState();
    const [frecuenciaDiarrea, setFrecuenciaDiarrea] = useState('');
    const [frecuenciaEstreimiento, setFrecuenciaEstreimiento] = useState('');
    const [frecuenciaReflujo, setFrecuenciaReflujo] = useState('');

    //Indicadores Bioquimicos
    let[glucosaAyunoEntry, setGlucosaAyunoEn] = useState();
    let[glucosaDespuesEntry, setGlucosaDespuesEn] = useState();
    let[trigliceridosEntry, setTrigliceridosEn] = useState();
    let[colesterolTotalEntry, setColesterolTotalEn] = useState();
    let[colesterolLDLEntry, setColesterolLDLEn] = useState();
    let[colesterolHDLEntry, setColesterolHDLEn] = useState();
    let[microbiotaIntestinalEntry, setMicrobiotaIntestinalEn] = useState();
    const [newGlucosaAyuno, setGlucosaAyuno] = useState([]);
    const [newGlucosaDespues, setGlucosaDespues] = useState([]);
    const [newTrigliceridos, setTrigliceridos] = useState([]);
    const [newColesterolTotal, setColesterolTotal] = useState([]);
    const [newColesterolLDL, setColesterolLDL] = useState([]);
    const [newColesterolHDL, setColesterolHDL] = useState([]);
    const [newMicrobiotaIntestinal, setMicrobiotaIntestinal] = useState([]);
    const [newPosicionesIndicadoresBio, setPosicionesIndicadoresBio] = useState([]);


    function onChange(date, dateString) {
        //const dateString2 = dateString;
        //console.log(date, dateString);
        //console.log(dateString);
        setFechaNacimiento(dateString);
    }

    //popup Window Circunferencia
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
      setIsOpen(!isOpen);
    }

    //popup Window Campos Corporales
    const [isOpenCampCor, setIsOpenCampCor] = useState(false);
    const togglePopupCampCor = () => {
        setIsOpenCampCor(!isOpenCampCor);
    }

    //popup Window Estado General
    const [isOpenEstadoG, setIsOpenEstadoG] = useState(false);
    const togglePopupEstadoG = () => {
        setIsOpenEstadoG(!isOpenEstadoG);
    }

    //popup Window Exposicion solar 
    const [isOpenExpoSol, setIsOpenExpoSol] = useState(false);
    const togglePopupExpoSol = () => {
        setIsOpenExpoSol(!isOpenExpoSol);
    }

    //popup Window Indicadores bioquimicos  
    const [isOpenIndicadoresBio, setIsOpenIndicadoresBio] = useState(false);
    const togglePopupIndicadoresBio = () => {
        setIsOpenIndicadoresBio(!isOpenIndicadoresBio);
    }

    

    console.log(window.location.pathname.split('usuarios/')[1]);

    useEffect(() => {
        fethInfo();
        setinfo();
        setinfoCampCor();
        setInfoEstadoGen();
        setInfoExpoSol();
        //fethConsumo();
        return () => {
            console.log('oal');
            setState({});
        }
    }, [])

    const fethInfo = async () => {
        try{
            const {data, status} = await apiURL(`/informacionUsuarios/individual?usuario=${window.location.pathname.split('usuarios/')[1]}`);
            console.log(data);
            setInfo(data); 
        }catch(error){
            console.groupCollapsed('Error en la funcion fetchInfo');
            console.error(error);
            console.groupEnd();
        }
    }

    //setInfo para circunfernecia
    const setinfo = async () => {
        const cintura = [30, 35, 33, 37, 40, 30, 35, 33, 37, 40, 30, 35, 33, 37, 40];
        const posisciones = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        const posiscionesCad = [1,2,3,4,5,6];
        //setPosicionesCinturas(posisciones);
        setCinturas(cintura);

        //Aqui lo que pienso que vas a tener que hacer es comparar cual tiene mas datos y agregar esa a las posiciones
        //algo como Inisio de test
        if(posisciones >= posiscionesCad){
            setPosicionesCinturas(posisciones);
        }else{
            setPosicionesCinturas(posiscionesCad)
        }
        //fin de test

        const cadera = [40, 42, 39, 44, 45, 43];
        //const posiscionesCad = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        //setPosicionesCadera(posiscionesCad);
        setCadera(cadera);
    }

    //setInfo para campos corporales
    const setinfoCampCor = async () => {
        const grasa = [30, 35, 33, 37, 40, 30, 35, 33, 37, 40, 30, 35, 33, 37, 40];
        //const posiscionesGrasa = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        //setPosicionesGrasa(posiscionesGrasa);
        setGrasa(grasa);

        const masa = [40, 42, 39, 44, 45, 43, 40, 38, 41, 48, 49, 44, 46, 40, 43];
        //const posiscionesMasa = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        //setPosicionesMasa(posiscionesMasa);
        setMasa(masa);

        const agua = [20, 25, 30, 22, 24, 28, 20, 19, 22, 23, 25, 24, 28, 29, 30];
        //const posiscionesAgua = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        //setPosicionesAgua(posiscionesAgua);
        setAgua(agua);

        const osea = [5, 10, 15, 10, 8, 4, 9, 12, 15, 18, 13, 17, 7, 9, 13];
        //const posiscionesOsea = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        //setPosicionesOsea(posiscionesOsea);
        setOsea(osea);

        const visceral = [50, 52, 55, 60, 68, 65, 62, 60, 57, 55, 52, 56, 57, 62, 67];
        //const posiscionesVisceral = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        //setPosicionesVisceral(posiscionesVisceral);
        setViceral(visceral);

        const tMetabolica = [80, 82, 85, 87, 82, 88, 90, 93, 98, 95, 94, 91, 88, 84, 87];
        //const posiscionesTMetabolica = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        //setPosicionesTMetabolica(posiscionesTMetabolica);
        setTMetabolica(tMetabolica);

        const eMetabolica = [70, 75, 72, 78, 82, 85, 80, 77, 74, 70, 69, 64, 60, 67, 70];
        //const posiscionesEMetabolica = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        //setPosicionesEMetabolica(posiscionesEMetabolica);
        setEMetabolica(eMetabolica);

        const posiscionesCampCor = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        setPosicionesCampCor(posiscionesCampCor);
    }

    //setInfo para estado general
    const setInfoEstadoGen = async () => {
        const cansancio = [30, 35, 33, 37, 40, 30, 35, 33, 37, 40, 30, 35, 33, 37, 40];
        const posiscionesCansancio = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        setPosicionesEstadoGen(posiscionesCansancio);
        setCansanseo(cansancio);

        const mareo = [40, 42, 39, 44, 45, 43, 40, 38, 41, 48, 49, 44, 46, 40, 43];
        //const posiscionesMareo= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        //setPosicionesMareo(posiscionesMareo);
        setMareo(mareo);

        const sed = [20, 25, 30, 22, 24, 28, 20, 19, 22, 23, 25, 24, 28, 29, 30];
        //const posiscionesSed = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        //setPosicionesAgua(posiscionesSed);
        setSed(sed);

        const GanDOriniar = [5, 10, 15, 10, 8, 4, 9, 12, 15, 18, 13, 17, 7, 9, 13];
        //const posiscionesGanDOrinar = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        //setPosicionesGanasDOrinar(posiscionesGanDOrinar);
        setGanasDOrinar(GanDOriniar);

        const hambre = [50, 52, 55, 60, 68, 65, 62, 60, 57, 55, 52, 56, 57, 62, 67];
        //const posiscionesHambre = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        //setPosicionesHambre(posiscionesHambre);
        setHambre(hambre);
    }

    //setInfo para exposicon solar
    const setInfoExpoSol = async () => {
        const minSol = [30, 35, 33, 37, 40, 30, 35, 33, 37, 40, 30, 35, 33, 37, 40];
        setMinSol(minSol);

        const cubrePiel = [40, 42, 39, 44, 45, 43, 40, 38, 41, 48, 49, 44, 46, 40, 43];
        setCubrePiel(cubrePiel);

        const bloqueadroSol = [20, 25, 30, 22, 24, 28, 20, 19, 22, 23, 25, 24, 28, 29, 30];
        setBloqueadorSol(bloqueadroSol);

        const diasXSem = [5, 10, 15, 10, 8, 4, 9, 12, 15, 18, 13, 17, 7, 9, 13];
        setDiasXSem(diasXSem);

        const posicionesExpoSolGen = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        setPosicionesExpoSol(posicionesExpoSolGen);
    }

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

    const save = async() => {
        //guardar con patch o post.
    };
    
    
    const updateCinturas = () =>{
        //console.log('test')
        //console.log(cinturaEntry);
        //console.log(caderaEntry);
        const lengthCircunferencia = [0,0];
        let EntryCircunferencia = 0;
        if(cinturaEntry !== -1 || caderaEntry !== -1){
            if(cinturaEntry !== -1){
                setCinturas([...newCinturas,cinturaEntry]);
                lengthCircunferencia[0] = newCinturas.length;
            }else{
                setCinturas([...newCinturas,newCinturas[newCinturas.length-1]]);
                //console.log("entering else")
                lengthCircunferencia[0] = newCinturas.length;
            }
            
            if(caderaEntry !== -1){
                setCadera([...newCadera,caderaEntry]);
                //setPosicionesCadera([...newPosicionesCadera,newPosicionesCadera.length+1]);
                lengthCircunferencia[1] = newCadera.length;
            }else{
                setCadera([...newCadera,newCadera[newCadera.length-1]]);
                //console.log('entering else 2')
                lengthCircunferencia[1] = newCadera.length;
            }

            //Dont delete yet 
            if(newCinturas.length >= newPosicionesCinturas.length){
                setPosicionesCinturas([...newPosicionesCinturas,newPosicionesCinturas.length+1]);
            }

            for(let x = 0; x <= 1; x++){
                if(EntryCircunferencia === 1){
                    break;
                }else{
                    if(lengthCircunferencia[x] >= newPosicionesCinturas.length){
                        setPosicionesCinturas([...newPosicionesCinturas,newPosicionesCinturas.length+1]);
                        EntryCircunferencia = 1;
                    }
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
    }

    console.log(newCinturas)
    
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
            data: newCadera
          }
        ],
        
      }
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

          
    const updateCampCor = () =>{
        const lengthCampCor = [0,0,0,0,0,0,0];
        let EntryCampCor = 0;
        if(grasaEntry !== -1 || masaEntry !== -1 || aguaEntry !== -1 || oseaEntry !== -1 || visceralEntry !== -1 || tMetabolicaEntry !== -1 || eMetabolicaEntry !== -1){
            if(grasaEntry !== -1){
                setGrasa([...newGrasa,grasaEntry]);
                lengthCampCor[0] = newGrasa.length;
            }else{
                setGrasa([...newGrasa,newGrasa[newGrasa.length-1]]);
                lengthCampCor[0] = newGrasa.length;
            }

            if(masaEntry !== -1){
                setMasa([...newMasa,masaEntry]);
                lengthCampCor[1] = newMasa.length;
            }else{
                setMasa([...newMasa,newMasa[newMasa.length-1]]);
                lengthCampCor[1] = newMasa.length;
            }

            if(aguaEntry !== -1){
                setAgua([...newAgua,aguaEntry]);
                lengthCampCor[2] = newAgua.length;
            }else{
                setAgua([...newAgua,newAgua[newAgua.length-1]]);
                lengthCampCor[2] = newAgua.length;
            }

            if(oseaEntry !== -1){
                setOsea([...newOsea,oseaEntry]);
                lengthCampCor[3] = newOsea.length;
            }else{
                setOsea([...newOsea,newOsea[newOsea.length-1]]);
                lengthCampCor[3] = newOsea.length;
            }

            if(visceralEntry !== -1){
                setViceral([...newVisceral,visceralEntry]);
                lengthCampCor[4] = newVisceral.length;
            }else{
                setViceral([...newVisceral,newVisceral[newVisceral.length-1]]);
                lengthCampCor[4] = newVisceral.length;
            }

            if(tMetabolicaEntry !== -1){
                setTMetabolica([...newTMetabolica,tMetabolicaEntry]);
                lengthCampCor[5] = newTMetabolica.length;
            }else{
                setTMetabolica([...newTMetabolica,newTMetabolica[newTMetabolica.length-1]]);
                lengthCampCor[5] = newTMetabolica.length;
            }

            if(eMetabolicaEntry !== -1){
                setEMetabolica([...newEMetabolica,eMetabolicaEntry]);
                lengthCampCor[6] = newEMetabolica.length;
            }else{
                setEMetabolica([...newEMetabolica,newEMetabolica[newEMetabolica.length-1]]);
                lengthCampCor[6] = newEMetabolica.length;
            }

            for(let x = 0; x <= 6; x++){
                if(EntryCampCor === 1){
                    break;
                }else{
                    if(lengthCampCor[x] >= newPosicionesCampCor.length){
                        setPosicionesCampCor([...newPosicionesCampCor,newPosicionesCampCor.length+1]);
                        EntryCampCor = 1;
                    }
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
    }

    console.log(newCinturas)
    
    //Cirunferencia graph
    const dataCampCor = {
        labels: newPosicionesCampCor,
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
            data: newMasa
          },
          {
            label: 'Agua',
            fill: false,
            lineTension: 0.3,
            backgroundColor: 'rgba(75,19,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: newAgua
          },
          {
            label: 'Osea',
            fill: false,
            lineTension: 0.3,
            backgroundColor: 'rgba(175,19,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: newOsea
          },
          {
            label: 'Visceral',
            fill: false,
            lineTension: 0.3,
            backgroundColor: 'rgba(250,19,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: newVisceral
          },
          {
            label: 'Tasa metabolica',
            fill: false,
            lineTension: 0.3,
            backgroundColor: 'rgba(250,219,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: newTMetabolica
          },
          {
            label: 'Edad metabolica',
            fill: false,
            lineTension: 0.3,
            backgroundColor: 'rgba(200,200,25,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: newEMetabolica
          }
        ],        
        
      }    

      
    const updateEstadoGeneral = () =>{
        const lengthEstadoGen = [0,0,0,0,0];
        let EntryEstadoGen = 0;
        if(cansansioEntry !== -1 || mareoEntry !== -1 || sedEntry !== -1 || ganasDOrinarEntry !== -1 || hambreEntry !== -1){
            if(cansansioEntry !== -1){
                setCansanseo([...newCansansio,cansansioEntry]);
                lengthEstadoGen[0] = newCansansio.length;
            }else{
                setCansanseo([...newCansansio,newCansansio[newCansansio.length-1]]);
                lengthEstadoGen[0] = newCansansio.length;
            }

            if(mareoEntry !== -1){
                setMareo([...newMareo,mareoEntry]);
                lengthEstadoGen[1] = newMareo.length;
            }else{
                setMareo([...newMareo,newMareo[newMareo.length-1]]);
                lengthEstadoGen[1] = newMareo.length;
            }

            if(sedEntry !== -1){
                setSed([...newSed,sedEntry]);
                lengthEstadoGen[2] = newSed.length;
            }else{
                setSed([...newSed,newSed[newSed.length-1]]);
                lengthEstadoGen[2] = newSed.length;
            }

            if(ganasDOrinarEntry !== -1){
                setGanasDOrinar([...newGanasaDOrinar,ganasDOrinarEntry]);
                lengthEstadoGen[3] = newGanasaDOrinar.length;
            }else{
                setGanasDOrinar([...newGanasaDOrinar,newGanasaDOrinar[newGanasaDOrinar.length-1]]);
                lengthEstadoGen[3] = newGanasaDOrinar.length;
            }

            if(hambreEntry !== -1){
                setHambre([...newHambre,hambreEntry]);
                lengthEstadoGen[4] = newHambre.length;
            }else{
                setHambre([...newHambre,newHambre[newHambre.length-1]]);
                lengthEstadoGen[4] = newHambre.length;
            }

            for(let x = 0; x <= 4; x++){
                if(EntryEstadoGen === 1){
                    break;
                }else{
                    if(lengthEstadoGen[x] >= newPosicionesEstadoGen.length){
                        setPosicionesEstadoGen([...newPosicionesEstadoGen,newPosicionesEstadoGen.length+1]);
                        EntryEstadoGen = 1;
                    }
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
    }
    
    //Estado General graph
    const dataEstadoGeneral = {
        labels: newPosicionesEstadoGen,
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
            data: newMareo
          },
          {
            label: 'Sed',
            fill: false,
            lineTension: 0.3,
            backgroundColor: 'rgba(75,19,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: newSed
          },
          {
            label: 'Ganas de Orinar',
            fill: false,
            lineTension: 0.3,
            backgroundColor: 'rgba(175,19,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: newGanasaDOrinar
          },
          {
            label: 'Hambre',
            fill: false,
            lineTension: 0.3,
            backgroundColor: 'rgba(250,19,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: newHambre
          }
        ],
        
      }    

    const updateExpoSol = () =>{
        const lengthExpoSol = [0,0,0,0];
        let EntryExpoSol = 0;
        if(minSolEntry !== -1 || cubrePielEntry !== -1 || bloqueadorSolEntry !== -1 || diasXSemEntry !== -1){
            if(minSolEntry !== -1){
                setMinSol([...newMinSol,minSolEntry]);
                lengthExpoSol[0] = newMinSol.length;
            }else{
                setMinSol([...newMinSol,newMinSol[newMinSol.length-1]]);
                lengthExpoSol[0] = newMinSol.length;
            }

            if(cubrePielEntry !== -1){
                setCubrePiel([...newCubrePiel,cubrePielEntry]);
                lengthExpoSol[1] = newCubrePiel.length;
            }else{
                setCubrePiel([...newCubrePiel,newCubrePiel[newCubrePiel.length-1]]);
                lengthExpoSol[1] = newCubrePiel.length;
            }

            if(bloqueadorSolEntry !== -1){
                setBloqueadorSol([...newBloqueadorSol,bloqueadorSolEntry]);
                lengthExpoSol[2] = newBloqueadorSol.length;
            }else{
                setBloqueadorSol([...newBloqueadorSol,newBloqueadorSol[newBloqueadorSol.length-1]]);
                lengthExpoSol[2] = newBloqueadorSol.length;
            }

            if(diasXSemEntry !== -1){
                setDiasXSem([...newDiasXSem,diasXSemEntry]);
                lengthExpoSol[3] = newDiasXSem.length;
            }else{
                setDiasXSem([...newDiasXSem,newDiasXSem[newDiasXSem.length-1]]);
                lengthExpoSol[3] = newDiasXSem.length;
            }

            for(let x = 0; x <= 3; x++){
                if(EntryExpoSol === 1){
                    break;
                }else{
                    //dont delete yet
                    if(lengthExpoSol[x] >= newPosicionesExpoSol.length){
                        setPosicionesExpoSol([...newPosicionesExpoSol,newPosicionesExpoSol.length+1]);
                        EntryExpoSol = 1;
                    }
                }
            }

            EntryExpoSol = 0;
            
            setIsOpenExpoSol(false);
        }

        setMinSolEn(-1);
        setCubrePielEn(-1);
        setBloqueadroSolEn(-1);
        setDiasXSemEn(-1);
        setIsOpenExpoSol(false);
    }
    
    //Exposicion solar graph
    const dataExpoSol = {
        labels: newPosicionesExpoSol,
        datasets: [
          {
            label: 'Minutos en el sol',
            fill: false,
            lineTension: 0.3,
            backgroundColor: 'rgba(75,192,19,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: newMinSol,
          },
          {
            label: 'Piel cubierta',
            fill: false,
            lineTension: 0.3,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: newCubrePiel
          },
          {
            label: 'Bloqueador solar',
            fill: false,
            lineTension: 0.3,
            backgroundColor: 'rgba(75,19,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: newBloqueadorSol
          },
          {
            label: 'Dias por semana',
            fill: false,
            lineTension: 0.3,
            backgroundColor: 'rgba(175,19,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: newDiasXSem
          }
        ],
    }  

    //This part is being used for test purposes only--------------------------------------------------------------------------------------------------
    function InflamacionInt(e) {
        //console.log(e);
        const x = e;
        setInflaInt(x);
        console.log(inflamacionIntestinal);
    }  

    //end test -----------------------------------------------------------------------------------------------------------------------------------

    async function GuardarCambios(){
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
        if(name !== ''){
            info.nombre = name;
            console.log(info.nombre);
        }

        if(apellidoP !== ''){
            info.apellidoPaterno = apellidoP;
            console.log(info.apellidoPaterno);
        }

        if(apellidoM !== ''){
            info.apellidoMaterno = apellidoM;
            console.log(info.apellidoMaterno);
        }

        if(celular !== ''){
            info.celular = celular;
            console.log(info.celular);
        }

        if(ciudadResidencia !== ''){
            info.ciudadDeResidencia = ciudadResidencia;
            console.log(info.ciudadDeResidencia);
        }

        if(tiempoResidando !== ''){
            info.tiempoViviendoAhi = tiempoResidando;
            console.log(info.tiempoViviendoAhi);
        }

        if(estadoDeNacomiento !== ''){
            info.estadoDeNacimiento = estadoDeNacomiento;
            console.log(info.estadoDeNacimiento);
        }

        if(fechaNacimiento !== ''){
            info.fechaDeNacimiento = fechaNacimiento;
            console.log(info.fechaDeNacimiento);
        }

        if(genero !== ''){
            info.genero = genero;
            console.log(info.genero);
        }
    }

    async function GuardarGastroInt(){
        console.log(inflamacionIntestinal);
        console.log(diarea);
        console.log(estrenimiento);
        console.log(reflujo);
        console.log(frecuenciaInflamacionIntestinal);
        console.log(frecuenciaDiarrea);
        console.log(frecuenciaEstreimiento);
        console.log(frecuenciaReflujo);
    }

    function handleChange(value, e) {
        
    } 


 return (
        <>
            <div className='glassbackground'>
                <div className='containerBasicInfo'>
                    <div className='basicInfo-Title'>
                        Profile Settings
                    </div>

                    <div className="profile-imgBasic">
                        <img src={profile} className="photo" alt="profile" />
                    </div>

                    <div className='basicInfo-Name-Container'>
                        <div className='basicInfo-Name-Container2'>
                            <label className='id-name'>Nombre:</label>
                            <input className='lb-name' placeholder={info.nombre || ''} type="text" name='nombre' onChange={event => setName(event.target.value)}></input>
                        </div>
                        <div className='basicInfo-Name-Container2'>
                            <label className='id-name'>Apellido Paterno:</label>
                            <input className='lb-name' placeholder={info.apellidoPaterno || ''} type="text" name='apellidoPaterno' onChange={event => setApellidoP(event.target.value)}></input>
                        </div>
                        <div className='basicInfo-Name-Container2'>
                            <label className='id-name'>Apellido Materno:</label>
                            <input className='lb-name' placeholder={info.apellidoMaterno || ''} type="text" name='apellidoMaterno' onChange={event => setApellidoM(event.target.value)}></input>
                        </div>
                    </div>
                    <div className='basicInfo-homeCel-Container'>
                        <div className='basicInfo-homeCel-Container2'>
                            <label className='id-name'>Celular:</label>
                            <input className='lb-name' placeholder={info.celular || ''} type="number" name='celular' onChange={event => setCelular(event.target.value)}></input>
                        </div>
                        <div className='basicInfo-homeCel-Container2'>
                            <label className='id-name'>Ciudad de residencia:</label>
                            <input className='lb-name' placeholder={info.ciudadDeResidencia || ''} type="text" name='ciudad' onChange={event => setCiudadResidencia(event.target.value)}></input>
                        </div>
                        <div className='basicInfo-homeCel-Container2'>
                            <label className='id-name'>Tiempo Residando:</label>
                            <input className='lb-name' placeholder={info.tiempoViviendoAhi || ''} type="text" name='residando' onChange={event => setTiempoResidando(event.target.value)}></input>
                        </div>
                    </div>
                    <div className='basicInfo-birthPlaceGender-Container'>
                        <div className='basicInfo-birthPlaceGender-Container2'>
                            <label className='id-name'>Estado de Nacimiento:</label>
                            <input className='lb-name' placeholder={info.estadoDeNacimiento || ''} type="text" name='estadoDN'onChange={event => setEstadoDeNacimiento(event.target.value)}></input>
                        </div>
                        <div className='basicInfo-birthPlaceGender-Container2'>
                            <label className='id-name'>Fecha de Nacimiento:</label>
                            <Space direction="vertical" >
                                <DatePicker placeholder={info.fechaDeNacimiento || ''} onChange={onChange} />
                            </Space>
                            {/*<input className='lb-name' placeholder={info.fechaDeNacimiento || ''} type="text" name='fechaDN' onChange={event => setFechaNacimiento(event.target.value)}></input>*/}
                        </div>
                        <div className='basicInfo-birthPlaceGender-Container2'>
                            <label className='id-name'>Genero:</label>
                            <input className='lb-name' placeholder={info.genero || ''} type="text" name='genero' onChange={event => setGenero(event.target.value)}></input>
                        </div>
                    </div>
                    <div className='basicInfo-Save-Container'>
                        <div className='basicInfo-Save-Container2'>
                            <button className='btn-Save-basicInfo' onClick={() => GuardarCambios()}>Save</button>
                        </div>
                    </div>
                </div>
                
                <div className='containerCircunferencia'>
                    <div className='basicInfo-Title'>
                        Circunferencia
                    </div>
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
                            <Line width={750} height={500}
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
                                title:{
                                    display:true,
                                    text:'Circunferencia',
                                    fontSize:20
                                },
                                legend:{
                                    display:true,
                                    position:'right'
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
                    <div >
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
                                <input type="button" value="Agregar" onClick={togglePopup} className='btn-see-circunferencia'/>
                                <p></p>
                                {isOpen && <Popup
                                content={<>
                                    <b>Agregando un nuevo valor</b>
                                    <div>
                                        <div className='circunferencia-Container'>
                                            <div className='circunferencia-Container4'>
                                                <label className='label-circunferencia'>Cintura:</label>
                                                <input className='input-circunferencia' type="number" name='numero' min={0} placeholder={''} onChange={event => setCinturaEn(event.target.value)}></input>
                                            </div>
                                            <div className='circunferencia-Container4'>
                                                <label className='label-circunferencia'>Cadera:</label>
                                                <input className='input-circunferencia' type="number" name='numero' min={0} placeholder={''} onChange={event => setCaderaEn(event.target.value)}></input>
                                            </div>
                                        </div>
                                    </div>
                                    <button className='btn-see-circunferencia' onClick={updateCinturas} value="Add">Agregar</button>
                                </>}
                                handleClose={togglePopup}
                                />}
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
                    <div className='basicInfo-Title'>
                        Campos Corporales
                    </div>
                    {/*Grafica-----------------------------------------------------------------------*/}
                    <div className='campCor-Container3'>
                        <div>
                            <Line width={750} height={500}
                                data={dataCampCor}
                                options={{
                                maintainAspectRatio: false,
                                title:{
                                    display:true,
                                    text:'Estado General',
                                    fontSize:20
                                },
                                legend:{
                                    display:true,
                                    position:'right'
                                },
                                }}
                            />
                            
                        </div>
                    </div>
                    {/*Fin de grafica----------------------------------------------------------------*/}
                    <div >
                        <div className='campCor-Container'>
                            <div className='campoCor-Container2'>
                                <input type="button" value="Agregar" onClick={togglePopupCampCor} className='btn-see-camCor'/>
                                <p></p>
                                {isOpenCampCor && <Popup
                                content={<>
                                    <b>Agregando un nuevo valor</b>
                                    <div>
                                        <div className='campoCor-Container'>
                                            <div className='campCor-Container4'>
                                                <label className='label-campCor'>Porcentaje de grasa:</label>
                                                <input className='input-campCor' type="number" name='numero' min={0} placeholder={''} onChange={event => setGrasaEn(event.target.value)}></input>
                                            </div>
                                            <div className='campCor-Container4'>
                                                <label className='label-campCor'>Porcentaje de masa:</label>
                                                <input className='input-campCor' type="number" name='numero' min={0} placeholder={''} onChange={event => setMasaEn(event.target.value)}></input>
                                            </div>
                                            <div className='campCor-Container4'>
                                                <label className='label-campCor'>Porcentaje de agua:</label>
                                                <input className='input-campCor' type="number" name='numero' min={0} placeholder={''} onChange={event => setAguaEn(event.target.value)}></input>
                                            </div>
                                            <div className='campCor-Container4'>
                                                <label className='label-campCor'>Densidad osea:</label>
                                                <input className='input-campCor' type="number" name='numero' min={0} placeholder={''} onChange={event => setOseaEn(event.target.value)}></input>
                                            </div>
                                            <div className='campCor-Container4'>
                                                <label className='label-campCor'>Grasa visceral:</label>
                                                <input className='input-campCor' type="number" name='numero' min={0} placeholder={''} onChange={event => setVisceralEn(event.target.value)}></input>
                                            </div>
                                            <div className='campCor-Container4'>
                                                <label className='label-campCor'>Tasa metabolica:</label>
                                                <input className='input-campCor' type="number" name='numero' min={0} placeholder={''} onChange={event => setTMetabolicaEn(event.target.value)}></input>
                                            </div>
                                            <div className='campCor-Container4'>
                                                <label className='label-campCor'>Edad metabolica:</label>
                                                <input className='input-campCor' type="number" name='numero' min={0} placeholder={''} onChange={event => setEMetabolicaEn(event.target.value)}></input>
                                            </div>
                                        </div>
                                    </div>
                                    <button className='btn-see-camCor' onClick={updateCampCor} value="Add">Agregar</button>
                                </>}
                                handleClose={togglePopupCampCor}
                                />}
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
                    <div className='basicInfo-Title'>
                        Estado General
                    </div>
                    {/*Grafica-----------------------------------------------------------------------*/}
                    <div className='campCor-Container3'>
                        <div>
                            <Line width={750} height={500}
                                data={dataEstadoGeneral}
                                options={{
                                maintainAspectRatio: false,
                                title:{
                                    display:true,
                                    text:'Exposicion Solar',
                                    fontSize:20
                                },
                                legend:{
                                    display:true,
                                    position:'right'
                                },
                                }}
                            />
                            
                        </div>
                    </div>
                    {/*Fin de grafica----------------------------------------------------------------*/}
                    <div >
                        <div className='campCor-Container'>
                            <div className='campoCor-Container2'>
                                <input type="button" value="Agregar" onClick={togglePopupEstadoG} className='btn-see-camCor'/>
                                <p></p>
                                {isOpenEstadoG && <Popup
                                content={<>
                                    <b>Agregando un nuevo valor</b>
                                    <div>
                                        <div className='campoCor-Container'>
                                            <div className='campCor-Container4'>
                                                <label className='label-campCor'>Nivel de cansancio:</label>
                                                <input className='input-campCor' type="number" name='numero' min={0} placeholder={''} onChange={event => setCansansioEn(event.target.value)}></input>
                                            </div>
                                            <div className='campCor-Container4'>
                                                <label className='label-campCor'>Nivel de mareo:</label>
                                                <input className='input-campCor' type="number" name='numero' min={0} placeholder={''} onChange={event => setMareoEn(event.target.value)}></input>
                                            </div>
                                            <div className='campCor-Container4'>
                                                <label className='label-campCor'>Nivel de sed:</label>
                                                <input className='input-campCor' type="number" name='numero' min={0} placeholder={''} onChange={event => setSedEn(event.target.value)}></input>
                                            </div>
                                            <div className='campCor-Container4'>
                                                <label className='label-campCor'>Frecuencia de orinar:</label>
                                                <input className='input-campCor' type="number" name='numero' min={0} placeholder={''} onChange={event => setGanasDOrinarEn(event.target.value)}></input>
                                            </div>
                                            <div className='campCor-Container4'>
                                                <label className='label-campCor'>Nivel de hambre:</label>
                                                <input className='input-campCor' type="number" name='numero' min={0} placeholder={''} onChange={event => setHambreEn(event.target.value)}></input>
                                            </div>
                                        </div>
                                    </div>
                                    <button className='btn-see-camCor' onClick={updateEstadoGeneral} value="Add">Agregar</button>
                                </>}
                                handleClose={togglePopupEstadoG}
                                />}
                            </div>
                        </div>
                    </div>
                </div>

                {/*Exposicion solar--------------------------------------------------------------------------------------------------------------------------------------------------- */}
                <div className='containerCampoCor'>
                    <div className='basicInfo-Title'>
                        Exposición Solar
                    </div>
                    {/*Grafica-----------------------------------------------------------------------*/}
                    <div className='campCor-Container3'>
                        <div>
                            <Line width={750} height={500}
                                data={dataExpoSol}
                                options={{
                                maintainAspectRatio: false,
                                title:{
                                    display:true,
                                    text:'Campos Corporales',
                                    fontSize:20
                                },
                                legend:{
                                    display:true,
                                    position:'right'
                                },
                                }}
                            />
                            
                        </div>
                    </div>
                    {/*Fin de grafica----------------------------------------------------------------*/}
                    <div >
                        <div className='campCor-Container'>
                            <div className='campoCor-Container2'>
                                <input type="button" value="Agregar" onClick={togglePopupExpoSol} className='btn-see-camCor'/>
                                <p></p>
                                {isOpenExpoSol && <Popup
                                content={<>
                                    <b>Agregando un nuevo valor</b>
                                    <div>
                                        <div className='campoCor-Container'>
                                            <div className='campCor-Container4'>
                                                <label className='label-campCor'>Minutos en el sol:</label>
                                                <input className='input-campCor' type="number" name='numero' min={0} placeholder={''} onChange={event => setMinSolEn(event.target.value)}></input>
                                            </div>
                                            <div className='campCor-Container4'>
                                                <label className='label-campCor'>Piel cubierta:</label>
                                                <input className='input-campCor' type="number" name='numero' min={0} placeholder={''} onChange={event => setCubrePielEn(event.target.value)}></input>
                                            </div>
                                            <div className='campCor-Container4'>
                                                <label className='label-campCor'>Bloqueador solar usado:</label>
                                                <input className='input-campCor' type="number" name='numero' min={0} placeholder={''} onChange={event => setBloqueadroSolEn(event.target.value)}></input>
                                            </div>
                                            <div className='campCor-Container4'>
                                                <label className='label-campCor'>Dias por semana:</label>
                                                <input className='input-campCor' type="number" name='numero' min={0} placeholder={''} onChange={event => setDiasXSemEn(event.target.value)}></input>
                                            </div>
                                        </div>
                                    </div>
                                    <button className='btn-see-camCor' onClick={updateExpoSol} value="Add">Agregar</button>
                                </>}
                                handleClose={togglePopupExpoSol}
                                />}
                            </div>
                        </div>
                    </div>
                </div>

                {/*Gastro intestinal--------------------------------------------------------------------------------------------------------------------------------------------------- */}
                <div className='containerGastroInt'>
                    <div className='basicInfo-Title'>
                        Gastro intestinal
                    </div>

                    <div className='basicInfo-Name-Container'>
                        <div className='basicInfo-Name-Container2'>
                            <label className='id-gastroIn'>Inflamación intestinal:</label>
                            <Select id='inflaInt' defaultValue={"No"} className='lb-gastrInSelect' onChange = {(e)=>InflamacionInt(e)}>
                                <Option value={"Si"}>Si</Option>
                                <Option value={"No"}>No</Option>
                            </Select>
                        </div>
                        <div className='basicInfo-Name-Container2'>
                            <label className='id-gastroIn'>Frecuencia:</label>
                            <input className='lb-gastrIn' placeholder={''} type="text" name='Frecuencia' onChange={event => setFrecuenciaInfInt(event.target.value)}></input>
                        </div>
                    </div>
                    <div className='basicInfo-homeCel-Container'>
                        <div className='basicInfo-Name-Container2'>
                            <label className='id-gastroIn'>Diarrea:</label>
                            <Select id='inflaInt' defaultValue={"No"} className='lb-gastrInSelect' onChange = {(e)=>setDiarrea(e)}>
                                <Option value={"Si"}>Si</Option>
                                <Option value={"No"}>No</Option>
                            </Select>
                        </div>
                        <div className='basicInfo-Name-Container2'>
                            <label className='id-gastroIn'>Frecuencia:</label>
                            <input className='lb-gastrIn' placeholder={''} type="text" name='Frecuencia' onChange={event => setFrecuenciaDiarrea(event.target.value)}></input>
                        </div>
                    </div>
                    <div className='basicInfo-birthPlaceGender-Container'>
                    <div className='basicInfo-Name-Container2'>
                            <label className='id-gastroIn'>Estreñimiento:</label>
                            <Select id='inflaInt' defaultValue={"No"} className='lb-gastrInSelect' onChange = {(e)=>setEstrenimiento(e)}>
                                <Option value={"Si"}>Si</Option>
                                <Option value={"No"}>No</Option>
                            </Select>
                        </div>
                        <div className='basicInfo-Name-Container2'>
                            <label className='id-gastroIn'>Frecuencia:</label>
                            <input className='lb-gastrIn' placeholder={''} type="text" name='Frecuencia' onChange={event => setFrecuenciaEstreimiento(event.target.value)}></input>
                        </div>
                    </div>
                    <div className='basicInfo-Name-Container'>
                        <div className='basicInfo-Name-Container2'>
                            <label className='id-gastroIn'>Reflujo:</label>
                            <Select id='inflaInt' defaultValue={"No"} className='lb-gastrInSelect' onChange = {(e)=>setReflujo(e)}>
                                <Option value={"Si"}>Si</Option>
                                <Option value={"No"}>No</Option>
                            </Select>
                        </div>
                        <div className='basicInfo-Name-Container2'>
                            <label className='id-gastroIn'>Frecuencia:</label>
                            <input className='lb-gastrIn' placeholder={''} type="text" name='Frecuencia' onChange={event => setFrecuenciaReflujo(event.target.value)}></input>
                        </div>
                    </div>
                    <div className='basicInfo-Save-Container'>
                        <div className='basicInfo-Save-Container2'>
                            <button className='btn-Save-basicInfo' onClick={() => GuardarGastroInt()}>Save</button>
                        </div>
                    </div>
                </div>
                
                {/*Indicadores Bioquimicos--------------------------------------------------------------------------------------------------------------------------------------------------- */}
                <div className='containerCampoCor'>
                    <div className='basicInfo-Title'>
                        Indicadores Bioquimicos
                    </div>
                    {/*Grafica-----------------------------------------------------------------------*/}
                    <div className='campCor-Container3'>
                        <div>
                            <Line width={750} height={500}
                                data={dataExpoSol}
                                options={{
                                maintainAspectRatio: false,
                                title:{
                                    display:true,
                                    text:'Campos Corporales',
                                    fontSize:20
                                },
                                legend:{
                                    display:true,
                                    position:'right'
                                },
                                }}
                            />
                            
                        </div>
                    </div>
                    {/*Fin de grafica----------------------------------------------------------------*/}
                    <div >
                        <div className='campCor-Container'>
                            <div className='campoCor-Container2'>
                                <input type="button" value="Agregar" onClick={togglePopupIndicadoresBio} className='btn-see-camCor'/>
                                <p></p>
                                {isOpenIndicadoresBio && <Popup
                                content={<>
                                    <b>Agregando un nuevo valor</b>
                                    <div>
                                        <div className='campoCor-Container'>
                                            <div className='campCor-Container4'>
                                                <label className='label-campCor'>Glucosa en el ayuno:</label>
                                                <input className='input-campCor' type="number" name='numero' min={0} placeholder={''} onChange={event => setMinSolEn(event.target.value)}></input>
                                            </div>
                                            <div className='campCor-Container4'>
                                                <label className='label-campCor'>Glucosa despues:</label>
                                                <input className='input-campCor' type="number" name='numero' min={0} placeholder={''} onChange={event => setCubrePielEn(event.target.value)}></input>
                                            </div>
                                            <div className='campCor-Container4'>
                                                <label className='label-campCor'>Trigliceridos:</label>
                                                <input className='input-campCor' type="number" name='numero' min={0} placeholder={''} onChange={event => setBloqueadroSolEn(event.target.value)}></input>
                                            </div>
                                            <div className='campCor-Container4'>
                                                <label className='label-campCor'>Colesterol total:</label>
                                                <input className='input-campCor' type="number" name='numero' min={0} placeholder={''} onChange={event => setDiasXSemEn(event.target.value)}></input>
                                            </div>
                                            <div className='campCor-Container4'>
                                                <label className='label-campCor'>Colesterol LDL:</label>
                                                <input className='input-campCor' type="number" name='numero' min={0} placeholder={''} onChange={event => setDiasXSemEn(event.target.value)}></input>
                                            </div>
                                            <div className='campCor-Container4'>
                                                <label className='label-campCor'>Colesterol HDL:</label>
                                                <input className='input-campCor' type="number" name='numero' min={0} placeholder={''} onChange={event => setDiasXSemEn(event.target.value)}></input>
                                            </div>
                                            <div className='campCor-Container4'>
                                                <label className='label-campCor'>Microbiota Intestinal:</label>
                                                <input className='input-campCor' type="number" name='numero' min={0} placeholder={''} onChange={event => setDiasXSemEn(event.target.value)}></input>
                                            </div>
                                        </div>
                                    </div>
                                    <button className='btn-see-camCor' onClick={updateExpoSol} value="Add">Agregar</button>
                                </>}
                                handleClose={togglePopupIndicadoresBio}
                                />}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Usuarios