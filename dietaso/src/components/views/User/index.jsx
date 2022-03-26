import React, { useState, useEffect } from 'react';
import apiURL from '../../../axios/axiosConfig';

//import { Line } from 'react-chartjs-2';
import { DatePicker, Space, Select, Tabs, Form } from 'antd';
import Popup from './popup';

import PesoEstatura from '../../commons/Charts/PesoEstatura';
import Circunferencia from '../../commons/Charts/Circunferencia';
import CampoCor from '../../commons/Charts/CampoCor';
import { Rules } from '../../../utils/formRules';

import profile from './profile.jpg';
import './user.scss';

const Usuarios = () => {
    const [ form ] = Form.useForm();
    const [ info, setInfo ] = useState({});
    const { Option } = Select;
    const { TabPane } = Tabs;
    //Variables
    let [ name, setName ] = useState('');
    let [ apellidoP, setApellidoP ] = useState('');
    let [ apellidoM, setApellidoM ] = useState('');
    let [ celular, setCelular ] = useState('');
    let [ ciudadResidencia, setCiudadResidencia ] = useState('');
    let [ tiempoResidando, setTiempoResidando ] = useState('');
    let [ estadoDeNacomiento, setEstadoDeNacimiento ] = useState('');
    let [ fechaNacimiento, setFechaNacimiento ] = useState('');
    let [ genero, setGenero ] = useState('');

    // Peso
    const [ peso, setPeso ] = useState({});
    const [ pesoDates, setPesoDates ] = useState({ peso: '', estatura: '' });

    //Circunferencia
    const [ infoCircunferencia, setInfoCircunferencia ] = useState({});
    const [ circunferenciaDates, setCircunferenciaDates ] = useState({
        cintura: '',
        cadera: '',
    });
    const [ cinturaEntry, setCinturaEn ] = useState(-1);
    const [ caderaEntry, setCaderaEn ] = useState(-1);

    //Campos Corporales
    const [ infoCampoCor, setInfoCampCor ] = useState({});
    const [ infoCorDates, setInfoCorDates ] = useState({});
    let [ grasaEntry, setGrasaEn ] = useState(-1);
    //const [posicionGrasa, setPosicionGrasa] = useState();
    let [ masaEntry, setMasaEn ] = useState(-1);
    const [ newGrasa, setGrasa ] = useState([]);
    const [ newPosicionesCampCor, setPosicionesCampCor ] = useState([]);
    //const [newPosicionesGrasa, setPosicionesGrasa] = useState([]);
    const [ newMasa, setMasa ] = useState([]);
    //const [newPosicionesMasa, setPosicionesMasa] = useState([]);
    let [ aguaEntry, setAguaEn ] = useState(-1);
    let [ oseaEntry, setOseaEn ] = useState(-1);
    let [ visceralEntry, setVisceralEn ] = useState(-1);
    let [ tMetabolicaEntry, setTMetabolicaEn ] = useState(-1);
    let [ eMetabolicaEntry, setEMetabolicaEn ] = useState(-1);
    const [ newAgua, setAgua ] = useState([]);
    //const [newPosicionesAgua, setPosicionesAgua] = useState([]);
    const [ newOsea, setOsea ] = useState([]);
    //const [newPosicionesOsea, setPosicionesOsea] = useState([]);
    const [ newVisceral, setViceral ] = useState([]);
    //const [newPosicionesViscelar, setPosicionesVisceral] = useState([]);
    const [ newTMetabolica, setTMetabolica ] = useState([]); //Tasa Metabolica
    //const [newPosicionesTMetabolica, setPosicionesTMetabolica] = useState([]);
    const [ newEMetabolica, setEMetabolica ] = useState([]); //Edad metabolica
    //const [newPosicionesEMetabolica, setPosicionesEMetabolica] = useState([]);

    //Estado General
    let [ cansansioEntry, setCansansioEn ] = useState(-1);
    //const [posicionGrasa, setPosicionGrasa] = useState();
    let [ mareoEntry, setMareoEn ] = useState(-1);
    const [ newCansansio, setCansanseo ] = useState([]);
    const [ newPosicionesEstadoGen, setPosicionesEstadoGen ] = useState([]);
    //const [newPosicionesCansanseo, setPosicionesCansanseo] = useState([]);
    const [ newMareo, setMareo ] = useState([]);
    //const [newPosicionesMareo, setPosicionesMareo] = useState([]);
    let [ sedEntry, setSedEn ] = useState(-1);
    let [ ganasDOrinarEntry, setGanasDOrinarEn ] = useState(-1);
    let [ hambreEntry, setHambreEn ] = useState(-1);
    const [ newSed, setSed ] = useState([]);
    //const [newPosicionesSed, setPosicionesSed] = useState([]);
    const [ newGanasaDOrinar, setGanasDOrinar ] = useState([]);
    //const [newPosicionesGanasDOrinar, setPosicionesGanasDOrinar] = useState([]);
    const [ newHambre, setHambre ] = useState([]);
    //const [newPosicionesHambre, setPosicionesHambre] = useState([]);

    //Exposicion Solar
    let [ minSolEntry, setMinSolEn ] = useState(-1);
    let [ cubrePielEntry, setCubrePielEn ] = useState(-1);
    let [ bloqueadorSolEntry, setBloqueadroSolEn ] = useState(-1);
    let [ diasXSemEntry, setDiasXSemEn ] = useState(-1);
    const [ newMinSol, setMinSol ] = useState([]);
    const [ newCubrePiel, setCubrePiel ] = useState([]);
    const [ newBloqueadorSol, setBloqueadorSol ] = useState([]);
    const [ newDiasXSem, setDiasXSem ] = useState([]);
    const [ newPosicionesExpoSol, setPosicionesExpoSol ] = useState([]);

    //Gastro intestinal
    const [ inflamacionIntestinal, setInflaInt ] = useState();
    const [ diarea, setDiarrea ] = useState();
    const [ estrenimiento, setEstrenimiento ] = useState();
    const [ reflujo, setReflujo ] = useState();
    const [ frecuenciaInflamacionIntestinal, setFrecuenciaInfInt ] = useState();
    const [ frecuenciaDiarrea, setFrecuenciaDiarrea ] = useState('');
    const [ frecuenciaEstreimiento, setFrecuenciaEstreimiento ] = useState('');
    const [ frecuenciaReflujo, setFrecuenciaReflujo ] = useState('');

    //Indicadores Bioquimicos
    let [ glucosaAyunoEntry, setGlucosaAyunoEn ] = useState();
    let [ glucosaDespuesEntry, setGlucosaDespuesEn ] = useState();
    let [ trigliceridosEntry, setTrigliceridosEn ] = useState();
    let [ colesterolTotalEntry, setColesterolTotalEn ] = useState();
    let [ colesterolLDLEntry, setColesterolLDLEn ] = useState();
    let [ colesterolHDLEntry, setColesterolHDLEn ] = useState();
    let [ microbiotaIntestinalEntry, setMicrobiotaIntestinalEn ] = useState();
    const [ newGlucosaAyuno, setGlucosaAyuno ] = useState([]);
    const [ newGlucosaDespues, setGlucosaDespues ] = useState([]);
    const [ newTrigliceridos, setTrigliceridos ] = useState([]);
    const [ newColesterolTotal, setColesterolTotal ] = useState([]);
    const [ newColesterolLDL, setColesterolLDL ] = useState([]);
    const [ newColesterolHDL, setColesterolHDL ] = useState([]);
    const [ newMicrobiotaIntestinal, setMicrobiotaIntestinal ] = useState([]);
    const [ newPosicionesIndicadoresBio, setPosicionesIndicadoresBio ] = useState(
        []
    );

    //Indicadores Clinicos Schema
    let [ presionArterialEntry, setPresionArterialEn ] = useState();
    let [ acanthosisNigricansEntry, setAcenthosisNigricansEn ] = useState();
    const [ newPresionArterial, setPresionArterial ] = useState([]);
    const [ newAcanthosisNigricans, setAcanthosisNigricans ] = useState([]);
    const [ newPosicionesCliSchema, setPosicionesCliSchema ] = useState([]);

    //Indicadores de Sueño
    let [ horasDeSleepEntry, setHorasDeSleepEn ] = useState();
    let [ estadoDeDescansoEntry, setEstadoDeDescansoEn ] = useState();
    //let [frecuenciaDesXNocheEntry, setFrecuenciaDesXNocheEn] = useState();
    const [ newHorasSleep, setHorasSleep ] = useState([]);
    const [ newEstadoDeDescanso, setEstadoDeDescanso ] = useState([]);
    const [ despiertaXNoche, setDespiertaXNoche ] = useState();
    const [ frecuenciaDesXNoche, setFrecuenciaDesXNoche ] = useState();
    const [ newPosicionesIndSleep, setPosicionesIndSleep ] = useState([]);

    //Lactancia
    const [ maternaExclusiva, setMaternaExlusiva ] = useState();
    const [ artificial, setArtificial ] = useState();
    const [ mixta, setMixta ] = useState();
    const [ maternaContemplada, setMaternaContemplada ] = useState();
    const [ mixtaContemplada, setMixtaContemplada ] = useState();
    const [ artificalContemplada, setArtificalContemplada ] = useState();

    function onChange(date, dateString) {
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

    //popup Window Exposicion solar
    const [ isOpenExpoSol, setIsOpenExpoSol ] = useState(false);
    const togglePopupExpoSol = () => {
        setIsOpenExpoSol(!isOpenExpoSol);
    };

    //popup Window Indicadores bioquimicos
    const [ isOpenIndicadoresBio, setIsOpenIndicadoresBio ] = useState(false);
    const togglePopupIndicadoresBio = () => {
        setIsOpenIndicadoresBio(!isOpenIndicadoresBio);
    };

    //popup Window Indicadores Clinicos Schema
    const [ isOpenIndicadoresCliSchema, setIsOpenIndicadoresCliShema ] =
        useState(false);
    const togglePopupIndicadoresCliSchema = () => {
        setIsOpenIndicadoresCliShema(!isOpenIndicadoresCliSchema);
    };

    //popup Window Indicadores Sueño
    const [ isOpenIndicadoresSleep, setIsOpenIndicadoresSleep ] = useState(false);
    const togglePopupIndicadoresSleep = () => {
        setIsOpenIndicadoresSleep(!isOpenIndicadoresSleep);
    };

    //popup Window Error Circunferencia
    const [ isOpenError, setIsOpenError ] = useState(false);
    const togglePopupError = () => {
        setIsOpenError(!isOpenError);
    };

    //popup Window Error Circunferencia
    const [ isOpenErrorCampCor, setIsOpenErrorCampCor ] = useState(false);
    const togglePopupErrorCampCor = () => {
        setIsOpenErrorCampCor(!isOpenErrorCampCor);
    };

    useEffect(() => {
        fethInfo();
        return () => {
            setInfo({});
        };
    }, []);

    useEffect(() => {
        if (info?.usuario) {
            fetchPesoEstatura();
            getCircunferencias();
            getinfoCampCor();
        }
    }, [ info ]);

    const fethInfo = async () => {
        try {
            const userId = window.location.hash.split('usuarios/')[ 1 ].trim();

            const { data, status } = await apiURL.get(
                `/informacionUsuarios/individual?usuario=${userId}`
            );

            setInfo(data);
        } catch (error) {
            console.groupCollapsed('Error en la funcion fetchInfo');
            console.error(error);
            console.groupEnd();
        }
    };

    const fetchPesoEstatura = async () => {
        try {
            const { data } = await apiURL.get(
                `datosUsuarios/individual?usuario=${info?.usuario}`
            );

            if (data.length > 0) {
                const datesPeso = data[ 0 ].registroPeso;

                setPesoDates({ peso: datesPeso });
                setPeso({
                    peso: data[ 0 ].peso,
                    altura: data[ 0 ].altura,
                });
            }
        } catch (error) {
            console.groupCollapsed(
                '[index.jsx] Error en la funcion fetchPesoEstatura'
            );
            console.error(error);
            console.groupEnd();
        }
    };

    const getCircunferencias = async () => {
        try {
            const { data, status } = await apiURL.get(
                `/extrasCircunferencia/individual?usuario=${info?.usuario}`
            );

            if (status === 200 || data.length > 0) {
                const cadera = data[ 0 ].cadera.map((elem) => elem.valor);
                const cintura = data[ 0 ].cintura.map((elem) => elem.valor);
                const datesCadera = data[ 0 ].cadera.map((elem) => elem.fecha);
                const datesCintura = data[ 0 ].cintura.map((elem) => elem.fecha);

                setCircunferenciaDates({
                    cadera: datesCadera,
                    cintura: datesCintura,
                });

                setInfoCircunferencia({
                    cadera: cadera,
                    cintura: cintura,
                });
            }
        } catch (error) {
            console.groupCollapsed('Error en la funcion fetchInfo');
            console.error(error);
            console.groupEnd();
        }
    };

    const getinfoCampCor = async () => {
        try {
            const { data, status } = await apiURL.get(
                `/extrasComposCorp/individual?usuario=${info?.usuario}`
            );

            if (status === 200 || data.length > 0) {
                const grasas = data[ 0 ].porcentGrasa.map((elem) => elem.valor);
                const masas = data[ 0 ].porcentMasa.map((elem) => elem.valor);
                const agua = data[ 0 ].porcentAgua.map((elem) => elem.valor);
                const grasaVisceral = data[ 0 ].grasaVisceral.map(
                    (elem) => elem.valor
                );
                const densidadOsea = data[ 0 ].densidadOsea.map(
                    (elem) => elem.valor
                );
                const edadMetabolica = data[ 0 ].edadMetabolica.map(
                    (elem) => elem.valor
                );
                const tasaMetabolica = data[ 0 ].tasaMetabolica.map(
                    (elem) => elem.valor
                );
                const dates = data[ 0 ].porcentGrasa.map((elem) => elem.fecha);

                setInfoCorDates(dates);

                setInfoCampCor({
                    grasas,
                    masas,
                    agua,
                    grasaVisceral,
                    densidadOsea,
                    edadMetabolica,
                    tasaMetabolica,
                });
            }
        } catch (error) {
            console.groupCollapsed('Error en la funcion fetchInfo');
            console.error(error);
            console.groupEnd();
        }
    };

    const updateCinturas = async () => {
        if (cinturaEntry !== -1 && caderaEntry !== -1) {
            if (!infoCircunferencia?.cadera || !infoCircunferencia?.cintura) {
                try {
                    const body = {
                        cintura: { fecha: new Date(), valor: cinturaEntry },
                        cadera: { fecha: new Date(), valor: caderaEntry },
                    };

                    const cin = await apiURL.post(
                        `/extrasCircunferencia/individual?usuario=${info.usuario}`,
                        body
                    );
                    console.log(cin);
                } catch (error) {
                    console.groupCollapsed('Error en la funcion updateCintura');
                    console.error(error);
                    console.groupEnd();
                }
            } else {
                try {
                    const body = {
                        cintura: { fecha: new Date(), valor: cinturaEntry },
                        cadera: { fecha: new Date(), valor: caderaEntry },
                    };

                    const cin = await apiURL.patch(
                        `/extrasCircunferencia/individual?usuario=${info.usuario}`,
                        body
                    );
                    console.log(cin);
                } catch (error) {
                    console.groupCollapsed('Error en la funcion updateCintura');
                    console.error(error);
                    console.groupEnd();
                }
            }

            setIsOpen(false);
        } else {
            setIsOpenError(true);
        }
        setCinturaEn(-1);
        setCaderaEn(-1);
        setIsOpen(false);
    };

    const updateCampCor = async () => {
        if (
            grasaEntry !== -1 ||
            masaEntry !== -1 ||
            aguaEntry !== -1 ||
            oseaEntry !== -1 ||
            visceralEntry !== -1 ||
            tMetabolicaEntry !== -1 ||
            eMetabolicaEntry !== -1
        ) {
            if (!infoCampoCor?.masas) {
                try {
                    console.log('POST');
                    const body = {
                        porcentGrasa: { fecha: new Date(), valor: grasaEntry },
                        porcentMasa: { fecha: new Date(), valor: masaEntry },
                        porcentAgua: { fecha: new Date(), valor: aguaEntry },
                        densidadOsea: { fecha: new Date(), valor: oseaEntry },
                        grasaVisceral: {
                            fecha: new Date(),
                            valor: visceralEntry,
                        },
                        tasaMetabolica: {
                            fecha: new Date(),
                            valor: tMetabolicaEntry,
                        },
                        edadMetabolica: {
                            fecha: new Date(),
                            valor: eMetabolicaEntry,
                        },
                    };

                    const res2 = await apiURL.post(
                        `/extrasComposCorp/individual?usuario=${info.usuario}`,
                        body
                    );
                    console.log(res2);
                } catch (error) {
                    console.groupCollapsed('Error en la funcion updateCampCor');
                    console.error(error);
                    console.groupEnd();
                }
            } else {
                try {
                    console.log('PATCH');
                    const body = {
                        porcentGrasa: { fecha: new Date(), valor: grasaEntry },
                        porcentMasa: { fecha: new Date(), valor: masaEntry },
                        porcentAgua: { fecha: new Date(), valor: aguaEntry },
                        densidadOsea: { fecha: new Date(), valor: oseaEntry },
                        grasaVisceral: {
                            fecha: new Date(),
                            valor: visceralEntry,
                        },
                        tasaMetabolica: {
                            fecha: new Date(),
                            valor: tMetabolicaEntry,
                        },
                        edadMetabolica: {
                            fecha: new Date(),
                            valor: eMetabolicaEntry,
                        },
                    };

                    const res2 = await apiURL.patch(
                        `/extrasComposCorp/individual?usuario=${info.usuario}`,
                        body
                    );
                    console.log(res2);
                } catch (error) {
                    console.groupCollapsed('Error en la funcion updateCampCor');
                    console.error(error);
                    console.groupEnd();
                }
            }
            setIsOpenCampCor(false);
        } else {
            setIsOpenErrorCampCor(true);
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

    const updateEstadoGeneral = () => {
        const lengthEstadoGen = [ 0, 0, 0, 0, 0 ];
        let EntryEstadoGen = 0;
        if (
            cansansioEntry !== -1 ||
            mareoEntry !== -1 ||
            sedEntry !== -1 ||
            ganasDOrinarEntry !== -1 ||
            hambreEntry !== -1
        ) {
            if (cansansioEntry !== -1) {
                setCansanseo([ ...newCansansio, cansansioEntry ]);
                lengthEstadoGen[ 0 ] = newCansansio.length;
            } else {
                setCansanseo([
                    ...newCansansio,
                    newCansansio[ newCansansio.length - 1 ],
                ]);
                lengthEstadoGen[ 0 ] = newCansansio.length;
            }

            if (mareoEntry !== -1) {
                setMareo([ ...newMareo, mareoEntry ]);
                lengthEstadoGen[ 1 ] = newMareo.length;
            } else {
                setMareo([ ...newMareo, newMareo[ newMareo.length - 1 ] ]);
                lengthEstadoGen[ 1 ] = newMareo.length;
            }

            if (sedEntry !== -1) {
                setSed([ ...newSed, sedEntry ]);
                lengthEstadoGen[ 2 ] = newSed.length;
            } else {
                setSed([ ...newSed, newSed[ newSed.length - 1 ] ]);
                lengthEstadoGen[ 2 ] = newSed.length;
            }

            if (ganasDOrinarEntry !== -1) {
                setGanasDOrinar([ ...newGanasaDOrinar, ganasDOrinarEntry ]);
                lengthEstadoGen[ 3 ] = newGanasaDOrinar.length;
            } else {
                setGanasDOrinar([
                    ...newGanasaDOrinar,
                    newGanasaDOrinar[ newGanasaDOrinar.length - 1 ],
                ]);
                lengthEstadoGen[ 3 ] = newGanasaDOrinar.length;
            }

            if (hambreEntry !== -1) {
                setHambre([ ...newHambre, hambreEntry ]);
                lengthEstadoGen[ 4 ] = newHambre.length;
            } else {
                setHambre([ ...newHambre, newHambre[ newHambre.length - 1 ] ]);
                lengthEstadoGen[ 4 ] = newHambre.length;
            }

            for (let x = 0; x <= 4; x++) {
                if (EntryEstadoGen === 1) {
                    break;
                } else {
                    if (lengthEstadoGen[ x ] >= newPosicionesEstadoGen.length) {
                        setPosicionesEstadoGen([
                            ...newPosicionesEstadoGen,
                            newPosicionesEstadoGen.length + 1,
                        ]);
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
    };

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

    const updateExpoSol = () => {
        const lengthExpoSol = [ 0, 0, 0, 0 ];
        let EntryExpoSol = 0;
        if (
            minSolEntry !== -1 ||
            cubrePielEntry !== -1 ||
            bloqueadorSolEntry !== -1 ||
            diasXSemEntry !== -1
        ) {
            if (minSolEntry !== -1) {
                setMinSol([ ...newMinSol, minSolEntry ]);
                lengthExpoSol[ 0 ] = newMinSol.length;
            } else {
                setMinSol([ ...newMinSol, newMinSol[ newMinSol.length - 1 ] ]);
                lengthExpoSol[ 0 ] = newMinSol.length;
            }

            if (cubrePielEntry !== -1) {
                setCubrePiel([ ...newCubrePiel, cubrePielEntry ]);
                lengthExpoSol[ 1 ] = newCubrePiel.length;
            } else {
                setCubrePiel([
                    ...newCubrePiel,
                    newCubrePiel[ newCubrePiel.length - 1 ],
                ]);
                lengthExpoSol[ 1 ] = newCubrePiel.length;
            }

            if (bloqueadorSolEntry !== -1) {
                setBloqueadorSol([ ...newBloqueadorSol, bloqueadorSolEntry ]);
                lengthExpoSol[ 2 ] = newBloqueadorSol.length;
            } else {
                setBloqueadorSol([
                    ...newBloqueadorSol,
                    newBloqueadorSol[ newBloqueadorSol.length - 1 ],
                ]);
                lengthExpoSol[ 2 ] = newBloqueadorSol.length;
            }

            if (diasXSemEntry !== -1) {
                setDiasXSem([ ...newDiasXSem, diasXSemEntry ]);
                lengthExpoSol[ 3 ] = newDiasXSem.length;
            } else {
                setDiasXSem([
                    ...newDiasXSem,
                    newDiasXSem[ newDiasXSem.length - 1 ],
                ]);
                lengthExpoSol[ 3 ] = newDiasXSem.length;
            }

            for (let x = 0; x <= 3; x++) {
                if (EntryExpoSol === 1) {
                    break;
                } else {
                    //dont delete yet
                    if (lengthExpoSol[ x ] >= newPosicionesExpoSol.length) {
                        setPosicionesExpoSol([
                            ...newPosicionesExpoSol,
                            newPosicionesExpoSol.length + 1,
                        ]);
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
    };

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
                data: newCubrePiel,
            },
            {
                label: 'Bloqueador solar',
                fill: false,
                lineTension: 0.3,
                backgroundColor: 'rgba(75,19,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: newBloqueadorSol,
            },
            {
                label: 'Dias por semana',
                fill: false,
                lineTension: 0.3,
                backgroundColor: 'rgba(175,19,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: newDiasXSem,
            },
        ],
    };

    const updateIndicadoresBio = async (values) => {
        try {

            const body = {
                glucosaAyuno: { valor: values.glucosaAyuno, fecha: new Date() },
                glucosaDespues: { valor: values.glucosaDespues, fecha: new Date(), minutos: values.minutos },
                trigliceridos: { valor: values.trigliceridos, fecha: new Date() },
                colesterolTotal: { valor: values.colesterolTotal, fecha: new Date() },
                colesterolLDL: { valor: values.colesterolLDL, fecha: new Date() },
                colesterolHDL: { valor: values.colesterolHDL, fecha: new Date() },
                microbiotaIntestinal: { valor: values.microbiotaIntestinal, fecha: new Date() },
            };

            const { data } = await apiURL.post(`bioquimicos/individual?usuario=${info.usuario}`, body);
            console.log(data);

        } catch (error) {
            console.groupCollapsed('[ERROR] updateIndicadoresBio');
            console.error(error);
            console.groupEnd();
        }

        /* setIsOpenIndicadoresBio(false); */
    };

    //Exposicion solar graph
    const dataIndicadoresBio = {
        labels: newPosicionesIndicadoresBio,
        datasets: [
            {
                label: 'Glucosa ayuno',
                fill: false,
                lineTension: 0.3,
                backgroundColor: 'rgba(75,192,19,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: newGlucosaAyuno,
            },
            {
                label: 'Glucosa despues',
                fill: false,
                lineTension: 0.3,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: newGlucosaDespues,
            },
            {
                label: 'Trigliceridos',
                fill: false,
                lineTension: 0.3,
                backgroundColor: 'rgba(75,19,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: newTrigliceridos,
            },
            {
                label: 'Colesterol Total',
                fill: false,
                lineTension: 0.3,
                backgroundColor: 'rgba(175,19,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: newColesterolTotal,
            },
            {
                label: 'Colesterol LDL',
                fill: false,
                lineTension: 0.3,
                backgroundColor: 'rgba(250,19,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: newColesterolLDL,
            },
            {
                label: 'Colesterol HDL',
                fill: false,
                lineTension: 0.3,
                backgroundColor: 'rgba(250,219,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: newColesterolHDL,
            },
            {
                label: 'Microbiota Intestinal',
                fill: false,
                lineTension: 0.3,
                backgroundColor: 'rgba(200,200,25,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: newMicrobiotaIntestinal,
            },
        ],
    };

    const updateIndicadoresCliSchema = () => {
        const lengthIndicadoresCliSchema = [ 0, 0 ];
        let EntryIndicadoresCliSchema = 0;
        if (presionArterialEntry !== -1 || acanthosisNigricansEntry !== -1) {
            if (presionArterialEntry !== -1) {
                setPresionArterial([
                    ...newPresionArterial,
                    presionArterialEntry,
                ]);
                lengthIndicadoresCliSchema[ 0 ] = newPresionArterial.length;
            } else {
                setPresionArterial([
                    ...newPresionArterial,
                    newPresionArterial[ newPresionArterial.length - 1 ],
                ]);
                lengthIndicadoresCliSchema[ 0 ] = newPresionArterial.length;
            }

            if (acanthosisNigricansEntry !== -1) {
                setAcanthosisNigricans([
                    ...newAcanthosisNigricans,
                    acanthosisNigricansEntry,
                ]);
                lengthIndicadoresCliSchema[ 1 ] = newAcanthosisNigricans.length;
            } else {
                setAcanthosisNigricans([
                    ...newAcanthosisNigricans,
                    newAcanthosisNigricans[ newAcanthosisNigricans.length - 1 ],
                ]);
                lengthIndicadoresCliSchema[ 1 ] = newAcanthosisNigricans.length;
            }

            for (let x = 0; x <= 6; x++) {
                if (EntryIndicadoresCliSchema === 1) {
                    break;
                } else {
                    if (
                        lengthIndicadoresCliSchema[ x ] >=
                        newPosicionesCliSchema.length
                    ) {
                        setPosicionesCliSchema([
                            ...newPosicionesCliSchema,
                            newPosicionesCliSchema.length + 1,
                        ]);
                        EntryIndicadoresCliSchema = 1;
                    }
                }
            }

            EntryIndicadoresCliSchema = 0;

            setIsOpenIndicadoresCliShema(false);
        }

        setPresionArterialEn(-1);
        setAcenthosisNigricansEn(-1);
        setIsOpenIndicadoresCliShema(false);
    };

    //Exposicion solar graph
    const dataIndicadoresCliSchema = {
        labels: newPosicionesCliSchema,
        datasets: [
            {
                label: 'Presion arterial',
                fill: false,
                lineTension: 0.3,
                backgroundColor: 'rgba(75,192,19,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: newPresionArterial,
            },
            {
                label: 'Acantosis nigricans',
                fill: false,
                lineTension: 0.3,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: newAcanthosisNigricans,
            },
        ],
    };

    const updateIndicadoresSleep = () => {
        const lengthIndicadoresSleep = [ 0, 0 ];
        let EntryIndicadoresSleep = 0;
        if (horasDeSleepEntry !== -1 || estadoDeDescansoEntry !== -1) {
            if (horasDeSleepEntry !== -1) {
                setHorasSleep([ ...newHorasSleep, horasDeSleepEntry ]);
                lengthIndicadoresSleep[ 0 ] = newHorasSleep.length;
            } else {
                setHorasSleep([
                    ...newHorasSleep,
                    newHorasSleep[ newHorasSleep.length - 1 ],
                ]);
                lengthIndicadoresSleep[ 0 ] = newHorasSleep.length;
            }

            if (estadoDeDescansoEntry !== -1) {
                setEstadoDeDescanso([
                    ...newEstadoDeDescanso,
                    estadoDeDescansoEntry,
                ]);
                lengthIndicadoresSleep[ 1 ] = newEstadoDeDescanso.length;
            } else {
                setEstadoDeDescanso([
                    ...newEstadoDeDescanso,
                    newEstadoDeDescanso[ newEstadoDeDescanso.length - 1 ],
                ]);
                lengthIndicadoresSleep[ 1 ] = newEstadoDeDescanso.length;
            }
            /*
            if (frecuenciaDesXNocheEntry !== -1) {
                setFrecuenciaDesXNoche([ ...newFrecuenciaDesXNoche, estadoDeDescansoEntry ]);
                lengthIndicadoresSleep[ 1 ] = newEstadoDeDescanso.length;
            } else {
                setEstadoDeDescanso([ ...newEstadoDeDescanso, newEstadoDeDescanso[newEstadoDeDescanso.length -1] ]);
                lengthIndicadoresSleep[ 1 ] = newEstadoDeDescanso.length;
            }
            */

            for (let x = 0; x <= 1; x++) {
                if (EntryIndicadoresSleep === 1) {
                    break;
                } else {
                    if (
                        lengthIndicadoresSleep[ x ] >=
                        newPosicionesIndSleep.length
                    ) {
                        setPosicionesIndSleep([
                            ...newPosicionesIndSleep,
                            newPosicionesIndSleep.length + 1,
                        ]);
                        EntryIndicadoresSleep = 1;
                    }
                }
            }

            //console.log(despiertaXNoche);
            //console.log(frecuenciaDesXNoche);

            EntryIndicadoresSleep = 0;

            setIsOpenIndicadoresSleep(false);
        }

        setHorasDeSleepEn(-1);
        setEstadoDeDescansoEn(-1);
        //setFrecuenciaDesXNocheEn(-1);
        setIsOpenIndicadoresSleep(false);
    };

    //Indicadores de sueño graph
    const dataIndicadoresSleep = {
        labels: newPosicionesIndSleep,
        datasets: [
            {
                label: 'Horas de sueño',
                fill: false,
                lineTension: 0.3,
                backgroundColor: 'rgba(75,192,19,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: newHorasSleep,
            },
            {
                label: 'Estado de descanso',
                fill: false,
                lineTension: 0.3,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: newEstadoDeDescanso,
            },
        ],
    };

    const closeError = () => {
        setIsOpenError(false);
    };

    const closeErrorCampCor = () => {
        setIsOpenErrorCampCor(false);
    };

    function InflamacionInt(e) {
        //console.log(e);
        const x = e;
        setInflaInt(x);
        //console.log(inflamacionIntestinal);
    }

    //This part is being used for test purposes only--------------------------------------------------------------------------------------------------

    //end test -----------------------------------------------------------------------------------------------------------------------------------

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
            //info.nombre = name;
            //console.log(info.nombre);
        } else {
            //setName(info.nombre);
            name = info.nombre;
        }

        if (apellidoP !== '') {
            //info.apellidoPaterno = apellidoP;
            //console.log(info.apellidoPaterno);
        } else {
            //setApellidoP(info.apellidoPaterno);
            apellidoP = info.apellidoPaterno;
        }

        if (apellidoM !== '') {
            //info.apellidoMaterno = apellidoM;
            //console.log(info.apellidoMaterno);
        } else {
            //setApellidoM(info.apellidoMaterno);
            apellidoM = info.apellidoMaterno;
        }

        if (celular !== '') {
            //info.celular = celular;
            //console.log(info.celular);
        } else {
            //setCelular(info.celular);
            celular = info.celular;
        }

        if (ciudadResidencia !== '') {
            //info.ciudadDeResidencia = ciudadResidencia;
            //console.log(info.ciudadDeResidencia);
        } else {
            //setCiudadResidencia(info.ciudadDeResidencia);
            ciudadResidencia = info.ciudadDeResidencia;
        }

        if (tiempoResidando !== '') {
            //info.tiempoViviendoAhi = tiempoResidando;
            //console.log(info.tiempoViviendoAhi);
        } else {
            //setTiempoResidando(info.tiempoViviendoAhi);
            tiempoResidando = info.tiempoViviendoAhi;
        }

        if (estadoDeNacomiento !== '') {
            //info.estadoDeNacimiento = estadoDeNacomiento;
            //console.log(info.estadoDeNacimiento);
        } else {
            //setEstadoDeNacimiento(info.estadoDeNacimiento);
            estadoDeNacomiento = info.estadoDeNacimiento;
        }

        if (fechaNacimiento !== '') {
            //info.fechaDeNacimiento = fechaNacimiento;
            //console.log(info.fechaDeNacimiento);
        } else {
            //setFechaNacimiento(info.fechaDeNacimiento);
            fechaNacimiento = info.fechaDeNacimiento;
        }

        if (genero !== '') {
            //info.genero = genero;
            //console.log(info.genero);
        } else {
            //setGenero(info.genero);
            genero = info.genero;
        }

        try {
            const userId = window.location.hash.split('usuarios/')[ 1 ].trim();

            const body = {
                nombre: name,
                apellidoPaterno: apellidoP,
                apellidoMaterno: apellidoM,
                celular: celular,
                ciudadDeResidencia: ciudadResidencia,
                tiempoViviendoAhi: tiempoResidando,
                estadoDeNacimiento: estadoDeNacomiento,
                fechaDeNacimiento: fechaNacimiento,
                genero: genero,
            };

            const res = await apiURL.patch(
                `/informacionUsuarios/individual?usuario=${userId}`,
                body
            );
            console.log(res);
        } catch (error) {
            console.groupCollapsed('Error en la funcion fetchInfo');
            console.error(error);
            console.groupEnd();
        }

        fethInfo();
    }

    async function GuardarGastroInt() {
        /*
        console.log(inflamacionIntestinal);
        console.log(diarea);
        console.log(estrenimiento);
        console.log(reflujo);
        console.log(frecuenciaInflamacionIntestinal);
        console.log(frecuenciaDiarrea);
        console.log(frecuenciaEstreimiento);
        console.log(frecuenciaReflujo);
        */
    }

    async function guardarLactancia() {
        /*
        console.log(maternaExclusiva);
        console.log(artificial);
        console.log(mixta);
        console.log(maternaContemplada);
        console.log(mixtaContemplada);
        console.log(artificalContemplada);
        */
    }

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
                    <div className='basicInfo-Title'>Peso</div>
                    <div className='circunferencia-Container3'>
                        <Tabs defaultActiveKey='peso'>
                            <TabPane tab='Peso' key='peso'>
                                {pesoDates?.peso?.length > 0 && (
                                    <PesoEstatura
                                        data={peso}
                                        dates={pesoDates.peso}
                                    />
                                )}
                            </TabPane>
                            <TabPane tab='Altura' key='altura'>
                                {pesoDates?.estatura?.length > 0 && (
                                    <PesoEstatura
                                        data={peso}
                                        dates={pesoDates.estatura}
                                        option={2}
                                    />
                                )}
                            </TabPane>
                        </Tabs>
                    </div>
                </div>
                <div className='containerCircunferencia'>
                    <div className='basicInfo-Title'>Circunferencia</div>
                    <div className='circunferencia-Container3'>
                        {infoCircunferencia?.cintura?.length > 0 && (
                            <Circunferencia
                                data={infoCircunferencia}
                                dates={circunferenciaDates.cadera}
                            />
                        )}
                    </div>
                    {/*Fin de grafica----------------------------------------------------------------*/}
                    <div>
                        <div className='circunferencia-Container'>
                            <div className='campoCor-Container2'>
                                <input
                                    type='button'
                                    value='Agregar'
                                    onClick={togglePopup}
                                    className='btn-see-circunferencia'
                                />
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

                    {/*PopUpError----------------------------------------------------------------*/}
                    <div>
                        <div className='campCor-Container'>
                            <div className='campoCor-Container2'>
                                <p></p>
                                {isOpenError && (
                                    <Popup
                                        content={
                                            <>
                                                <b>Error</b>
                                                <div>
                                                    <div className='campoCor-Container'>
                                                        <div className='campCor-Container4'>
                                                            <label className='label-campCor'>
                                                                Porfavor ingrese
                                                                todos los campos
                                                                para guardar
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button
                                                    className='btn-see-camCor'
                                                    onClick={closeError}
                                                    value='Add'>
                                                    Okay
                                                </button>
                                            </>
                                        }
                                        handleClose={togglePopupError}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                {/*new Campos Corporales--------------------------------------------------------------------------------------------------------------------------------------------------- */}
                <div className='containerCampoCor'>
                    <div className='basicInfo-Title'>Campos Corporales</div>
                    {/*Grafica-----------------------------------------------------------------------*/}
                    <div className='campCor-Container3'>
                        <div>
                            {infoCampoCor?.grasas &&
                                Array.isArray(infoCampoCor.grasas) && (
                                    <CampoCor
                                        data={infoCampoCor}
                                        dates={infoCorDates}
                                    />
                                )}
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
                    {/*Error Campos Corporales----------------------------------------------------------------*/}
                    <div>
                        <div className='campCor-Container'>
                            <div className='campoCor-Container2'>
                                <p></p>
                                {isOpenErrorCampCor && (
                                    <Popup
                                        content={
                                            <>
                                                <b>Error</b>
                                                <div>
                                                    <div className='campoCor-Container'>
                                                        <div className='campCor-Container4'>
                                                            <label className='label-campCor'>
                                                                Porfavor ingrese
                                                                todos los campos
                                                                para guardar
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button
                                                    className='btn-see-camCor'
                                                    onClick={closeErrorCampCor}
                                                    value='Add'>
                                                    Okay
                                                </button>
                                            </>
                                        }
                                        handleClose={togglePopupErrorCampCor}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                {/*new Estado General--------------------------------------------------------------------------------------------------------------------------------------------------- */}
                <div className='containerCampoCor'>
                    <div className='basicInfo-Title'>Estado General</div>
                    {/*Grafica-----------------------------------------------------------------------*/}
                    <div className='campCor-Container3'>
                        <div>
                            {/* <Line
                                width={750}
                                height={500}
                                data={dataEstadoGeneral}
                                options={{
                                    maintainAspectRatio: false,
                                    title: {
                                        display: true,
                                        text: 'Exposicion Solar',
                                        fontSize: 20,
                                    },
                                    legend: {
                                        display: true,
                                        position: 'right',
                                    },
                                }}
                            /> */}
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
                                                                Nivel de hambre:
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

                {/*Exposicion solar--------------------------------------------------------------------------------------------------------------------------------------------------- */}
                <div className='containerCampoCor'>
                    <div className='basicInfo-Title'>Exposición Solar</div>
                    {/*Grafica-----------------------------------------------------------------------*/}
                    <div className='campCor-Container3'>
                        <div>
                            {/* <Line
                                width={750}
                                height={500}
                                data={dataExpoSol}
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
                            /> */}
                        </div>
                    </div>
                    {/*Fin de grafica----------------------------------------------------------------*/}
                    <div>
                        <div className='campCor-Container'>
                            <div className='campoCor-Container2'>
                                <input
                                    type='button'
                                    value='Agregar'
                                    onClick={togglePopupExpoSol}
                                    className='btn-see-camCor'
                                />
                                <p></p>
                                {isOpenExpoSol && (
                                    <Popup
                                        content={
                                            <>
                                                <b>Agregando un nuevo valor</b>
                                                <div>
                                                    <div className='campoCor-Container'>
                                                        <div className='campCor-Container4'>
                                                            <label className='label-campCor'>
                                                                Minutos en el
                                                                sol:
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
                                                                    setMinSolEn(
                                                                        event
                                                                            .target
                                                                            .value
                                                                    )
                                                                }></input>
                                                        </div>
                                                        <div className='campCor-Container4'>
                                                            <label className='label-campCor'>
                                                                Piel cubierta:
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
                                                                    setCubrePielEn(
                                                                        event
                                                                            .target
                                                                            .value
                                                                    )
                                                                }></input>
                                                        </div>
                                                        <div className='campCor-Container4'>
                                                            <label className='label-campCor'>
                                                                Bloqueador solar
                                                                usado:
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
                                                                    setBloqueadroSolEn(
                                                                        event
                                                                            .target
                                                                            .value
                                                                    )
                                                                }></input>
                                                        </div>
                                                        <div className='campCor-Container4'>
                                                            <label className='label-campCor'>
                                                                Dias por semana:
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
                                                                    setDiasXSemEn(
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
                                                    onClick={updateExpoSol}
                                                    value='Add'>
                                                    Agregar
                                                </button>
                                            </>
                                        }
                                        handleClose={togglePopupExpoSol}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/*Gastro intestinal--------------------------------------------------------------------------------------------------------------------------------------------------- */}
                <div className='containerGastroInt'>
                    <div className='basicInfo-Title'>Gastro intestinal</div>

                    <div className='basicInfo-Name-Container'>
                        <div className='basicInfo-Name-Container2'>
                            <label className='id-gastroIn'>
                                Inflamación intestinal:
                            </label>
                            <Select
                                id='inflaInt'
                                defaultValue={'No'}
                                className='lb-gastrInSelect'
                                onChange={(e) => InflamacionInt(e)}>
                                <Option value={'Si'}>Si</Option>
                                <Option value={'No'}>No</Option>
                            </Select>
                        </div>
                        <div className='basicInfo-Name-Container2'>
                            <label className='id-gastroIn'>Frecuencia:</label>
                            <input
                                className='lb-gastrIn'
                                placeholder={''}
                                type='text'
                                name='Frecuencia'
                                onChange={(event) =>
                                    setFrecuenciaInfInt(event.target.value)
                                }></input>
                        </div>
                    </div>
                    <div className='basicInfo-homeCel-Container'>
                        <div className='basicInfo-Name-Container2'>
                            <label className='id-gastroIn'>Diarrea:</label>
                            <Select
                                id='inflaInt'
                                defaultValue={'No'}
                                className='lb-gastrInSelect'
                                onChange={(e) => setDiarrea(e)}>
                                <Option value={'Si'}>Si</Option>
                                <Option value={'No'}>No</Option>
                            </Select>
                        </div>
                        <div className='basicInfo-Name-Container2'>
                            <label className='id-gastroIn'>Frecuencia:</label>
                            <input
                                className='lb-gastrIn'
                                placeholder={''}
                                type='text'
                                name='Frecuencia'
                                onChange={(event) =>
                                    setFrecuenciaDiarrea(event.target.value)
                                }></input>
                        </div>
                    </div>
                    <div className='basicInfo-birthPlaceGender-Container'>
                        <div className='basicInfo-Name-Container2'>
                            <label className='id-gastroIn'>
                                Estreñimiento:
                            </label>
                            <Select
                                id='inflaInt'
                                defaultValue={'No'}
                                className='lb-gastrInSelect'
                                onChange={(e) => setEstrenimiento(e)}>
                                <Option value={'Si'}>Si</Option>
                                <Option value={'No'}>No</Option>
                            </Select>
                        </div>
                        <div className='basicInfo-Name-Container2'>
                            <label className='id-gastroIn'>Frecuencia:</label>
                            <input
                                className='lb-gastrIn'
                                placeholder={''}
                                type='text'
                                name='Frecuencia'
                                onChange={(event) =>
                                    setFrecuenciaEstreimiento(
                                        event.target.value
                                    )
                                }></input>
                        </div>
                    </div>
                    <div className='basicInfo-Name-Container'>
                        <div className='basicInfo-Name-Container2'>
                            <label className='id-gastroIn'>Reflujo:</label>
                            <Select
                                id='inflaInt'
                                defaultValue={'No'}
                                className='lb-gastrInSelect'
                                onChange={(e) => setReflujo(e)}>
                                <Option value={'Si'}>Si</Option>
                                <Option value={'No'}>No</Option>
                            </Select>
                        </div>
                        <div className='basicInfo-Name-Container2'>
                            <label className='id-gastroIn'>Frecuencia:</label>
                            <input
                                className='lb-gastrIn'
                                placeholder={''}
                                type='text'
                                name='Frecuencia'
                                onChange={(event) =>
                                    setFrecuenciaReflujo(event.target.value)
                                }></input>
                        </div>
                    </div>
                    <div className='basicInfo-Save-Container'>
                        <div className='basicInfo-Save-Container2'>
                            <button
                                className='btn-Save-basicInfo'
                                onClick={() => GuardarGastroInt()}>
                                Save
                            </button>
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
                            {
                                //aqui va la grafica
                            }
                        </div>
                    </div>
                    {/*Fin de grafica----------------------------------------------------------------*/}
                    <div>
                        <div className='campCor-Container'>
                            <div className='campoCor-Container2'>
                                <input
                                    type='button'
                                    value='Agregar'
                                    onClick={togglePopupIndicadoresBio}
                                    className='btn-see-camCor'
                                />
                                <p></p>
                                {isOpenIndicadoresBio && (
                                    <Popup
                                        content={
                                            <Form
                                                form={form}
                                                requiredMark={false}
                                                onFinish={updateIndicadoresBio}>
                                                <b>Agregando un nuevo valor</b>
                                                <div>
                                                    <div className='campoCor-Container'>
                                                        <div className='campCor-Container4'>
                                                            <Form.Item
                                                                label='Glucosa en el ayuno'
                                                                name='glucosaAyuno'
                                                                rules={[
                                                                    Rules.minOne,
                                                                ]}>
                                                                <input
                                                                    className='input-campCor'
                                                                    type='number'
                                                                    name='numero'
                                                                    min={0}
                                                                    placeholder={
                                                                        ''
                                                                    }
                                                                    onChange={(
                                                                        event
                                                                    ) =>
                                                                        setGlucosaAyunoEn(
                                                                            event
                                                                                .target
                                                                                .value
                                                                        )
                                                                    }
                                                                />
                                                            </Form.Item>
                                                        </div>
                                                        <div className='campCor-Container4'>
                                                            <Form.Item
                                                                label='Glucosa después'
                                                                name='glucosaDespues'
                                                                rules={[ Rules.minOne ]}>
                                                                <input
                                                                    className='input-campCor'
                                                                    type='number'
                                                                    name='numero'
                                                                    min={0}
                                                                    placeholder={
                                                                        ''
                                                                    }
                                                                    onChange={(
                                                                        event
                                                                    ) =>
                                                                        setGlucosaDespuesEn(
                                                                            event
                                                                                .target
                                                                                .value
                                                                        )
                                                                    }
                                                                />
                                                            </Form.Item>
                                                            <Form.Item
                                                                label='Minutos después'
                                                                name='minutos'
                                                                rules={[ Rules.minZero ]}>
                                                                <input
                                                                    className='input-campCor'
                                                                    type='number'
                                                                    name='numero'
                                                                    min={0}
                                                                    placeholder={
                                                                        ''
                                                                    }
                                                                />
                                                            </Form.Item>
                                                        </div>
                                                        <div className='campCor-Container4'>
                                                            <Form.Item
                                                                label='Trigliceridos'
                                                                name='trigliceridos'
                                                                rules={[ Rules.minOne ]}>
                                                                <input
                                                                    className='input-campCor'
                                                                    type='number'
                                                                    name='numero'
                                                                    min={0}
                                                                    placeholder={
                                                                        ''
                                                                    }
                                                                    onChange={(
                                                                        event
                                                                    ) =>
                                                                        setTrigliceridosEn(
                                                                            event
                                                                                .target
                                                                                .value
                                                                        )
                                                                    }
                                                                />
                                                            </Form.Item>
                                                        </div>
                                                        <div className='campCor-Container4'>
                                                            <Form.Item
                                                                label='Colesterol total'
                                                                name='colesterolTotal'
                                                                rules={[ Rules.minOne ]}>
                                                                <input
                                                                    className='input-campCor'
                                                                    type='number'
                                                                    name='numero'
                                                                    min={0}
                                                                    placeholder={
                                                                        ''
                                                                    }
                                                                    onChange={(
                                                                        event
                                                                    ) =>
                                                                        setColesterolTotalEn(
                                                                            event
                                                                                .target
                                                                                .value
                                                                        )
                                                                    }
                                                                />
                                                            </Form.Item>
                                                        </div>
                                                        <div className='campCor-Container4'>
                                                            <Form.Item
                                                                label='Colesterol LDL'
                                                                name='colesterolLDL'
                                                                rules={[ Rules.minOne ]}>
                                                                <input
                                                                    className='input-campCor'
                                                                    type='number'
                                                                    name='numero'
                                                                    min={0}
                                                                    placeholder={
                                                                        ''
                                                                    }
                                                                    onChange={(
                                                                        event
                                                                    ) =>
                                                                        setColesterolLDLEn(
                                                                            event
                                                                                .target
                                                                                .value
                                                                        )
                                                                    }
                                                                />
                                                            </Form.Item>
                                                        </div>
                                                        <div className='campCor-Container4'>
                                                            <Form.Item
                                                                label='Colesterol HDL'
                                                                name='colesterolHDL'
                                                                rules={[ Rules.minOne ]}>
                                                                <input
                                                                    className='input-campCor'
                                                                    type='number'
                                                                    name='numero'
                                                                    min={0}
                                                                    placeholder={
                                                                        ''
                                                                    }
                                                                    onChange={(
                                                                        event
                                                                    ) =>
                                                                        setColesterolHDLEn(
                                                                            event
                                                                                .target
                                                                                .value
                                                                        )
                                                                    }
                                                                />
                                                            </Form.Item>
                                                        </div>
                                                        <div className='campCor-Container4'>
                                                            <Form.Item
                                                                label='Microbiota intestital'
                                                                name='microbiotaIntestinal'
                                                                rules={[ Rules.minOne ]}>
                                                                <input
                                                                    className='input-campCor'
                                                                    type='number'
                                                                    name='numero'
                                                                    min={0}
                                                                    placeholder={
                                                                        ''
                                                                    }
                                                                    onChange={(
                                                                        event
                                                                    ) =>
                                                                        setMicrobiotaIntestinalEn(
                                                                            event
                                                                                .target
                                                                                .value
                                                                        )
                                                                    }
                                                                />
                                                            </Form.Item>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button
                                                    htmlType='submit'
                                                    className='btn-see-camCor'
                                                    /* onClick={
                                                        updateIndicadoresBio
                                                    } */
                                                    value='Add'>
                                                    Agregar
                                                </button>
                                            </Form>
                                        }
                                        handleClose={togglePopupIndicadoresBio}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/*Indicadores Clinicos Schema--------------------------------------------------------------------------------------------------------------------------------------------------- */}
                <div className='containerCampoCor'>
                    <div className='basicInfo-Title'>
                        Indicadores Clinicos Schema
                    </div>
                    {/*Grafica-----------------------------------------------------------------------*/}
                    <div className='campCor-Container3'>
                        <div>
                            {/*  <Line
                                width={750}
                                height={500}
                                data={dataIndicadoresCliSchema}
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
                            /> */}
                        </div>
                    </div>
                    {/*Fin de grafica----------------------------------------------------------------*/}
                    <div>
                        <div className='campCor-Container'>
                            <div className='campoCor-Container2'>
                                <input
                                    type='button'
                                    value='Agregar'
                                    onClick={togglePopupIndicadoresCliSchema}
                                    className='btn-see-camCor'
                                />
                                <p></p>
                                {isOpenIndicadoresCliSchema && (
                                    <Popup
                                        content={
                                            <>
                                                <b>Agregando un nuevo valor</b>
                                                <div>
                                                    <div className='campoCor-Container'>
                                                        <div className='campCor-Container4'>
                                                            <label className='label-campCor'>
                                                                Presion
                                                                arterial:
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
                                                                    setPresionArterialEn(
                                                                        event
                                                                            .target
                                                                            .value
                                                                    )
                                                                }></input>
                                                        </div>
                                                        <div className='campCor-Container4'>
                                                            <label className='label-campCor'>
                                                                Acanthosis
                                                                nigricans:
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
                                                                    setAcenthosisNigricansEn(
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
                                                        updateIndicadoresCliSchema
                                                    }
                                                    value='Add'>
                                                    Agregar
                                                </button>
                                            </>
                                        }
                                        handleClose={
                                            togglePopupIndicadoresCliSchema
                                        }
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/*Indicadores Sueño--------------------------------------------------------------------------------------------------------------------------------------------------- */}
                <div className='containerCampoCor'>
                    <div className='basicInfo-Title'>Indicadores de Sueño</div>
                    {/*Grafica-----------------------------------------------------------------------*/}
                    <div className='campCor-Container3'>
                        <div>
                            {/* <Line
                                width={750}
                                height={500}
                                data={dataIndicadoresSleep}
                                options={{
                                    maintainAspectRatio: false,
                                    title: {
                                        display: true,
                                        text: 'Indicadores de Sueño',
                                        fontSize: 20,
                                    },
                                    legend: {
                                        display: true,
                                        position: 'right',
                                    },
                                }}
                            /> */}
                        </div>
                    </div>
                    {/*Fin de grafica----------------------------------------------------------------*/}
                    <div>
                        <div className='campCor-Container'>
                            <div className='campoCor-Container2'>
                                <input
                                    type='button'
                                    value='Agregar'
                                    onClick={togglePopupIndicadoresSleep}
                                    className='btn-see-camCor'
                                />
                                <p></p>
                                {isOpenIndicadoresSleep && (
                                    <Popup
                                        content={
                                            <>
                                                <b>Agregando un nuevo valor</b>
                                                <div>
                                                    <div className='campoCor-Container'>
                                                        <div className='campCor-Container4'>
                                                            <label className='label-campCor'>
                                                                Horas Dormido:
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
                                                                    setHorasDeSleepEn(
                                                                        event
                                                                            .target
                                                                            .value
                                                                    )
                                                                }></input>
                                                        </div>
                                                        <div className='campCor-Container4'>
                                                            <label className='label-campCor'>
                                                                Estado de
                                                                descanso:
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
                                                                    setEstadoDeDescansoEn(
                                                                        event
                                                                            .target
                                                                            .value
                                                                    )
                                                                }></input>
                                                        </div>
                                                        <div className='campCor-Container4'>
                                                            <label className='id-indicadorS'>
                                                                Despierto por la
                                                                noche:
                                                            </label>
                                                            <Select
                                                                id='inflaInt'
                                                                defaultValue={
                                                                    'No'
                                                                }
                                                                className='lb-indicadorSSelect'
                                                                onChange={(e) =>
                                                                    setDespiertaXNoche(
                                                                        e
                                                                    )
                                                                }>
                                                                <Option
                                                                    value={
                                                                        'Si'
                                                                    }>
                                                                    Si
                                                                </Option>
                                                                <Option
                                                                    value={
                                                                        'No'
                                                                    }>
                                                                    No
                                                                </Option>
                                                            </Select>
                                                        </div>
                                                        <div className='campCor-Container4'>
                                                            <label className='label-campCor'>
                                                                Frecuencia:
                                                            </label>
                                                            <input
                                                                className='input-campCor'
                                                                placeholder={''}
                                                                type='text'
                                                                name='Frecuencia'
                                                                onChange={(
                                                                    event
                                                                ) =>
                                                                    setFrecuenciaDesXNoche(
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
                                                        updateIndicadoresSleep
                                                    }
                                                    value='Add'>
                                                    Agregar
                                                </button>
                                            </>
                                        }
                                        handleClose={
                                            togglePopupIndicadoresSleep
                                        }
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/*Lactancia Schema--------------------------------------------------------------------------------------------------------------------------------------------------- */}
                <div className='containerGastroInt'>
                    <div className='basicInfo-Title'>Lactancia</div>

                    <div className='basicInfo-Name-Container'>
                        <div className='basicInfo-Name-Container2'>
                            <label className='id-gastroIn'>
                                Materna exclusiva:
                            </label>
                            <Select
                                id='inflaInt'
                                defaultValue={'No'}
                                className='lb-gastrInSelect'
                                onChange={(e) => setMaternaExlusiva(e)}>
                                <Option value={'Si'}>Si</Option>
                                <Option value={'No'}>No</Option>
                            </Select>
                        </div>
                        <div className='basicInfo-Name-Container2'>
                            <label className='id-gastroIn'>Artifical:</label>
                            <Select
                                id='inflaInt'
                                defaultValue={'No'}
                                className='lb-gastrInSelect'
                                onChange={(e) => setArtificial(e)}>
                                <Option value={'Si'}>Si</Option>
                                <Option value={'No'}>No</Option>
                            </Select>
                        </div>
                    </div>
                    <div className='basicInfo-homeCel-Container'>
                        <div className='basicInfo-Name-Container2'>
                            <label className='id-gastroIn'>Mixta:</label>
                            <Select
                                id='inflaInt'
                                defaultValue={'No'}
                                className='lb-gastrInSelect'
                                onChange={(e) => setMixta(e)}>
                                <Option value={'Si'}>Si</Option>
                                <Option value={'No'}>No</Option>
                            </Select>
                        </div>
                        <div className='basicInfo-Name-Container2'>
                            <label className='id-gastroIn'>
                                Materna contemplada:
                            </label>
                            <Select
                                id='inflaInt'
                                defaultValue={'No'}
                                className='lb-gastrInSelect'
                                onChange={(e) => setMaternaContemplada(e)}>
                                <Option value={'Si'}>Si</Option>
                                <Option value={'No'}>No</Option>
                            </Select>
                        </div>
                    </div>
                    <div className='basicInfo-birthPlaceGender-Container'>
                        <div className='basicInfo-Name-Container2'>
                            <label className='id-gastroIn'>
                                Mixta contemplada:
                            </label>
                            <Select
                                id='inflaInt'
                                defaultValue={'No'}
                                className='lb-gastrInSelect'
                                onChange={(e) => setMixtaContemplada(e)}>
                                <Option value={'Si'}>Si</Option>
                                <Option value={'No'}>No</Option>
                            </Select>
                        </div>
                        <div className='basicInfo-Name-Container2'>
                            <label className='id-gastroIn'>
                                Artifical contemplada:
                            </label>
                            <Select
                                id='inflaInt'
                                defaultValue={'No'}
                                className='lb-gastrInSelect'
                                onChange={(e) => setArtificalContemplada(e)}>
                                <Option value={'Si'}>Si</Option>
                                <Option value={'No'}>No</Option>
                            </Select>
                        </div>
                    </div>
                    <div className='btnLactancia-Save-Container'>
                        <div className='basicInfo-Save-Container2'>
                            <button
                                className='btn-Save-basicInfo'
                                onClick={() => guardarLactancia()}>
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Usuarios;
