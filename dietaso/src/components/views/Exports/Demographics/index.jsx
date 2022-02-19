import React, { useState, useEffect } from 'react';
import apiURL from '../../../../axios/axiosConfig';

import { message } from 'antd';
import dayjs from 'dayjs';

import ButtonsArea from '../../../commons/ButtonsArea';
import { capitilizeWord } from '../../../../utils';

const Demographics = ({ selected = false, loading }) => {
    const [ exportData, setExportData ] = useState([]);
    const [ finalData, setFinalData ] = useState([]);
    const [ info1, setInfo1 ] = useState([]);
    const [ info2, setInfo2 ] = useState([]);
    const [ flag2, setFlag2 ] = useState(false);
    const [ fileReady, setFileReady ] = useState(false);

    useEffect(() => {
        selected && getExportData();
        return () => {
            setExportData(null);
            setFileReady(false);
        };
    }, [ selected ]);

    useEffect(() => {
        getInfo2();
    }, [ info1.length ]);

    useEffect(() => {
        getInfo3();
    }, [ flag2 ]);

    const getExportData = async () => {
        try {

            const { data } = await apiURL.get('/informacionUsuarios');
            setInfo1(data);
        } catch (error) {
            setFileReady(false);
            message.error('Error al obtener los datos');
            console.groupCollapsed('[Demographics.jsx]');
            console.log(error);
            console.groupEnd();
        }
    };

    const getInfo2 = () => {
        try {

            info1.map(async (item, index) => {
                const updatedInfo = {
                    idPaciente: item.usuario,
                    apellidoPaterno: item.apellidoPaterno,
                    apellidoMaterno: item.apellidoMaterno,
                    nombre: item.nombre,
                    fechaDeNacimiento: item.fechaDeNacimiento && dayjs(item.fechaDeNacimiento).format('DD-MM-YYYY') || '',
                    celular: item.celular,
                    genero: capitilizeWord(item.genero),
                    estadoDeNacimiento: item.estadoDeNacimiento,
                    ciudadDeResidencia: item.ciudadDeResidencia,
                    tiempoViviendoAhi: item.tiempoViviendoAhi,
                };

                const { data } = await apiURL.get(`datosUsuarios/individual?usuario=${item.usuario}`)

                updatedInfo.altura = data?.altura ?? '';
                updatedInfo.peso = data?.peso && data.peso[ data.peso.length - 1 ] || '';
                updatedInfo.actividadFisica = data?.actividadFisica?.tipoDeActividad !== '' && 'Sí' || 'No';
                updatedInfo.tipoDeActividad = data?.actividadFisica?.tipoDeActividad && capitilizeWord(data.actividadFisica.tipoDeActividad) || '';
                updatedInfo.intensidad = data?.actividadFisica?.intensidad && capitilizeWord(data.actividadFisica.intensidad) || '';
                updatedInfo.vecesXsemana = data?.actividadFisica?.vecesXsemana || '';
                updatedInfo.minXdia = data?.actividadFisica?.minXdia || '';
                setInfo2((prevState) => [ ...prevState, updatedInfo ]);

                if (index === info1.length - 1) {
                    setFlag2(true);
                }
            });

        } catch (error) {
            console.groupCollapsed('[Demographics.jsx] getInfo2');
            console.log(error);
            console.groupEnd();
        }
    };

    const getInfo3 = () => {
        try {
            info2.map(async (item, index) => {
                const { data } = await apiURL.get(`historialClinico/individual?usuario=${item.usuario}`);
            });
        } catch (error) {
            console.groupCollapsed('[Demographics.jsx] getInfo3');
            console.log(error);
            console.groupEnd();
        }
    };

    return (
        <ButtonsArea
            fileReady={fileReady}
            xlsxData={{
                columns: columns,
                data: exportData,
                fileName: `Datos demográficos total ${dayjs(new Date()).format(
                    'DD-MM-YYYY'
                )}`,
            }}
        />
    );
};

export default Demographics;

export const columns = [
    {
        title: 'No. Participante',
        dataIndex: 'idPaciente',
        key: 'idPaciente',
        width: 60,
    },
    {
        title: 'Fecha de registro',
        dataIndex: 'fechaRegistro',
        key: 'fechaRegistro',
        width: 30,
    },
    {
        title: 'Apellido Paterno',
        dataIndex: 'apellidoPaterno',
        key: 'apellidoPaterno',
        width: 100,
    },
    {
        title: 'Apellido Materno',
        dataIndex: 'apellidoMaterno',
        key: 'apellidoMaterno',
        width: 100,
    },
    {
        title: 'Nombre',
        dataIndex: 'nombre',
        key: 'nombre',
        width: 100,
    },
    {
        title: 'Fecha de nacimiento',
        dataIndex: 'fechaDeNacimiento',
        key: 'fechaDeNacimiento',
        width: 30,
    },
    {
        title: 'Celular',
        dataIndex: 'celular',
        key: 'celular',
        width: 30,
    },
    {
        title: 'Edad',
        dataIndex: 'edad',
        key: 'edad',
        width: 30,
    },
    {
        title: 'Correo electrónico',
        dataIndex: 'email',
        key: 'email',
        width: 30,
    },
    {
        title: 'Sexo',
        dataIndex: 'genero',
        key: 'genero',
        width: 30,
    },
    {
        title: 'Estado de nacimiento',
        dataIndex: 'estadoDeNacimiento',
        key: 'estadoDeNacimiento',
        width: 30,
    },
    {
        title: 'Ciudad de residencia',
        dataIndex: 'ciudadDeResidencia',
        key: 'ciudadDeResidencia',
        width: 30,
    },
    {
        title: 'Tiempo de residencia',
        dataIndex: 'tiempoViviendoAhi',
        key: 'tiempoViviendoAhi',
        width: 30,
    },
    {
        title: '¿Cuánto mides?',
        dataIndex: 'altura',
        key: 'altura',
        width: 30,
    },
    {
        title: '¿Cuánto pesas?',
        dataIndex: 'peso',
        key: 'peso',
        width: 30,
    },
    {
        title: 'Actividad física',
        dataIndex: 'actividadFisica',
        key: 'actividadFisica',
        width: 30,
    },
    {
        title: 'Tipode actividad',
        dataIndex: 'tipoDeActividad',
        key: 'tipoDeActividad',
        width: 30,
    },
    {
        title: 'Intensidad',
        dataIndex: 'intensidad',
        key: 'intensidad',
        width: 30,
    },
    {
        title: 'Veces a la semana',
        dataIndex: 'vecesXsemana',
        key: 'vecesXsemana',
        width: 30,
    },
    {
        title: 'Minutos por día',
        dataIndex: 'minXdia',
        key: 'minXdia',
        width: 30,
    },
    {
        title: '¿Padeces alguna enfermedad?',
        dataIndex: 'padeceEnfermedad',
        key: 'padeceEnfermedad',
        width: 50,
    },
    {
        title: '¿Actualmente consumes algún medicamento y/o suplemento?',
        dataIndex: 'suplemento',
        key: 'suplemento',
        width: 60,
    }
    ,
    {
        title: 'Grado de estudios',
        dataIndex: 'educacion',
        key: 'educacion',
        width: 30,
    },
    {
        title: '¿A qué te dedicas?',
        dataIndex: 'ocupacion',
        key: 'ocupacion',
        width: 50,
    },
    {
        title: '¿Cuántos días a la semana trabalhas?',
        dataIndex: 'diasDeTrabajoXsemana',
        key: 'diasDeTrabajoXsemana',
        width: 30,
    },
    {
        title: 'Modalidad',
        dataIndex: 'modalidad',
        key: 'modalidad',
        width: 30,
    },
    {
        title: 'Horario entrada',
        dataIndex: 'horarioEntrada',
        key: 'horarioEntrada',
        width: 30,
    },
    {
        title: 'Horario salida',
        dataIndex: 'horarioSalida',
        key: 'horarioSalida',
        width: 30,
    },
    {
        title: 'Ingreso mensual (MXN aproximado)',
        dataIndex: 'ingresosMes',
        key: 'ingresosMes',
        width: 30,
    },
    {
        title: 'Gasto individual en comida (MXN aproximado)',
        dataIndex: 'dineroDeAlimentacionXmesIndivi',
        key: 'dineroDeAlimentacionXmesIndivi',
        width: 30,
    },
    {
        title: 'Gasto familiar en comida (MXN aproximado)',
        dataIndex: 'dineroDeAlimentacionXmesHogar',
        key: 'dineroDeAlimentacionXmesHogar',
        width: 30,
    },
    {
        title: 'Alimentos favoritos',
        dataIndex: 'comidaFavorita',
        key: 'comidaFavorita',
        width: 30,
    },
    {
        title: 'Alimentos que no te gustan',
        dataIndex: 'comidaNoFavorita',
        key: 'comidaNoFavorita',
        width: 30,
    },
    {
        title: '¿Eres alérgico a algún alimento?',
        dataIndex: 'alergiasAlimentarias',
        key: 'alergiasAlimentarias',
        width: 30,
    },
    {
        title: 'Principal lugar de compra de alimentos',
        dataIndex: 'lugarDeCompras',
        key: 'lugarDeCompras',
        width: 30,
    },
    {
        title: '¿Quién cocina los alimentos que consumes?',
        dataIndex: 'quienCocina',
        key: 'quienCocina',
        width: 30
    },
    {
        title: '¿Actualmente estás siguiendo una dieta específica?',
        dataIndex: 'sigueDieta',
        key: 'sigueDieta',
        width: 30,
    },
    {
        title: '¿La estás siguiendo con algún nutriológo?',
        dataIndex: 'conNutriologo',
        key: 'conNutriologo',
        width: 30,
    },
    {
        title: 'Porcentaje de grasa corporal',
        dataIndex: 'porcentajeGrasa',
        key: 'porcentajeGrasa',
        width: 30,
    },
    {
        title: 'Porcentaje de masa muscular',
        dataIndex: 'porcentajeMasaMuscular',
        key: 'porcentajeMasaMuscular',
        width: 30,
    },
    {
        title: 'Porcentaje de agua corporal',
        dataIndex: 'porcentajeAgua',
        key: 'porcentajeAgua',
        width: 30,
    },
    {
        title: 'Densisad ósea',
        dataIndex: 'densidadOssea',
        key: 'densidadOssea',
        width: 30,
    },
    {
        title: 'Grasa visceral',
        dataIndex: 'grasaVisceral',
        key: 'grasaVisceral',
        width: 30,
    },
    {
        title: 'Tasa metabólica',
        dataIndex: 'tasaMetabolica',
        key: 'tasaMetabolica',
        width: 30,
    },
    {
        title: 'Edad metabólica',
        dataIndex: 'edadMetabolica',
        key: 'edadMetabolica',
        width: 30,
    },
    {
        title: 'Cintura',
        dataIndex: 'cintura',
        key: 'cintura',
        width: 30,
    },
    {
        title: 'Cadera',
        dataIndex: 'cadera',
        key: 'cadera',
        width: 30,
    },
    {
        title: 'Glucosa en ayuno',
        dataIndex: 'glucosaEnAyuno',
        key: 'glucosaEnAyuno',
        width: 30,
    },
    {
        title: 'Glucosa después de comer',
        dataIndex: 'glucosaDespuesDeComer',
        key: 'glucosaDespuesDeComer',
        width: 30,
    },
    {
        title: 'Triglicéridos',
        dataIndex: 'trigliceridos',
        key: 'trigliceridos',
        width: 30,
    },
    {
        title: 'Colesterol total',
        dataIndex: 'colesterolTotal',
        key: 'colesterolTotal',
        width: 30,
    },
    {
        title: 'Colesterol LDL',
        dataIndex: 'colesterolLDL',
        key: 'colesterolLDL',
        width: 30,
    },
    {
        title: 'Colesterol HDL',
        dataIndex: 'colesterolHDL',
        key: 'colesterolHDL',
        width: 30,
    },
    {
        title: 'Microbiota intestinal',
        dataIndex: 'microbiotaIntestinal',
        key: 'microbiotaIntestinal',
        width: 30,
    },
    {
        title: 'Presión arterial',
        dataIndex: 'presionArterial',
        key: 'presionArterial',
        width: 30,
    },
    {
        title: 'Acantosis nigricans',
        dataIndex: 'acantosisNigricans',
        key: 'acantosisNigricans',
        width: 30,
    },
    {
        title: 'Mucho cansancio',
        dataIndex: 'muchoCansancio',
        key: 'muchoCansancio',
        width: 30,
    },
    {
        title: 'Mareos',
        dataIndex: 'mareos',
        key: 'mareos',
        width: 30,
    },
    {
        title: 'Mucha sed',
        dataIndex: 'muchaSed',
        key: 'muchaSed',
        width: 30,
    },
    {
        title: 'Muchas ganas de orinar',
        dataIndex: 'muchasGanasDeOrinar',
        key: 'muchasGanasDeOrinar',
        width: 30,
    },
    {
        title: 'Mucha hambre',
        dataIndex: 'muchaHambre',
        key: 'muchaHambre',
        width: 30,
    },
    {
        title: '¿Se hinchan sus pies o manos?',
        dataIndex: 'hinchanSusPiesOManos',
        key: 'hinchanSusPiesOManos',
        width: 30,
    },
    {
        title: '¿A qué hora del día occure',
        dataIndex: 'queHoraDelDiaOccure',
        key: 'queHoraDelDiaOccure',
        width: 30,
    },
    {
        title: '¿Con qué frecuencia ocurre?',
        dataIndex: 'conQueFrecuenciaOcurre',
        key: 'conQueFrecuenciaOcurre',
        width: 30,
    },
    {
        title: '¿Cuántas horas pasas sentado al día?',
        dataIndex: 'horasSentadoDia',
        key: 'horasSentadoDia',
        width: 30,
    },
    {
        title: '¿Cuántas horas pasas parado al día?',
        dataIndex: 'horasParadoDia',
        key: 'horasParadoDia',
        width: 30,
    },
    {
        title: 'Sangrado de nariz',
        dataIndex: 'sangradoNariz',
        key: 'sangradoNariz',
        width: 30,
    },
    {
        title: '¿Con qué frecuencia?',
        dataIndex: 'sangradoFrecuencia',
        key: 'sangradoFrecuencia',
        width: 30,
    },
    {
        title: 'Inflamación abdominal',
        dataIndex: 'inflamacionFrecuencia',
        key: 'inflamacionFrecuencia',
        width: 30,
    },
    {
        title: '¿Con qué frecuencia?',
        dataIndex: 'inflamacionFrecuencia',
        key: 'inflamacionFrecuencia',
        width: 30,
    },
    {
        title: 'Diarrea',
        dataIndex: 'diarrea',
        key: 'diarrea',
        width: 30,
    },
    {
        title: '¿Con qué frecuencia?',
        dataIndex: 'diarreaFrecuencia',
        key: 'diarreaFrecuencia',
        width: 30,
    },
    {
        title: 'Manchas rojas en su piel o moretes sin motivo',
        dataIndex: 'manchasRojasPielOMoretes',
        key: 'manchasRojasPielOMoretes',
        width: 40,
    },
    {
        title: '¿Con qué frecuencia?',
        dataIndex: 'manchasRojasFrecuencia',
        key: 'manchasRojasFrecuencia',
        width: 30,
    }, {
        title: 'Estreñimiento',
        dataIndex: 'estreñimiento',
        key: 'estreñimiento',
        width: 30,
    },
    {
        title: '¿Con qué frecuencia?',
        dataIndex: 'estreñimientoFrecuencia',
        key: 'estreñimientoFrecuencia',
        width: 30,
    },
    {
        title: 'Reflujo',
        dataIndex: 'reflujo',
        key: 'reflujo',
        width: 30,
    },
    {
        title: '¿Con qué frecuencia?',
        dataIndex: 'reflujoFrecuencia',
        key: 'reflujoFrecuencia',
        width: 30,
    },
    {
        title: 'Uñas quebradizas',
        dataIndex: 'unasQuebradizas',
        key: 'unasQuebradizas',
        width: 30,
    },
    {
        title: 'Tratamiento estético a las uñas recientemente',
        dataIndex: 'tratamientoEsteticoUñas',
        key: 'tratamientoEsteticoUñas',
        width: 30,
    },
    {
        title: 'Caída de cabello',
        dataIndex: 'caidaCabello',
        key: 'caidaCabello',
        width: 30,
    },
    {
        title: 'Cabello quebradizo',
        dataIndex: 'cabelloQuebradizo',
        key: 'cabelloQuebradizo',
        width: 30,
    },
    {
        title: '¿Cabello teñido o bajo tratamiento estético?',
        dataIndex: 'cabelloTeñido',
        key: 'cabelloTeñido',
        width: 30,
    },
    {
        title: 'Contaduras en las comisuras de la boca',
        dataIndex: 'contadurasComisurasBoca',
        key: 'contadurasComisurasBoca',
        width: 30,
    },
    {
        title: '¿Con qué frecuencia?',
        dataIndex: 'contadurasComisurasBocaFrecuencia',
        key: 'contadurasComisurasBocaFrecuencia',
        width: 30,
    },
    {
        title: 'Inflamación de lengua',
        dataIndex: 'inflamacionLengua',
        key: 'inflamacionLengua',
        width: 30,
    },
    {
        title: '¿Con qué frecuencia?',
        dataIndex: 'inflamacionLenguaFrecuencia',
        key: 'inflamacionLenguaFrecuencia',
        width: 30,
    },
    {
        title: 'Inflamación de encías',
        dataIndex: 'inflamacionEncias',
        key: 'inflamacionEncias',
        width: 30,
    },
    {
        title: '¿Con qué frecuencia?',
        dataIndex: 'inflamacionEnciasFrecuencia',
        key: 'inflamacionEnciasFrecuencia',
        width: 30,
    },
    {
        title: 'Sangrado de encías',
        dataIndex: 'sangradoEncias',
        key: 'sangradoEncias',
        width: 30,
    },
    {
        title: '¿Con qué frecuencia?',
        dataIndex: 'sangradoEnciasFrecuencia',
        key: 'sangradoEnciasFrecuencia',
        width: 30,
    },
    {
        title: '¿Cuántas horas duerme al día?',
        dataIndex: 'horasDuermeDia',
        key: 'horasDuermeDia',
        width: 30,
    },
    {
        title: 'Descansa',
        dataIndex: 'descansa',
        key: 'descansa',
        width: 30,
    },
    {
        title: '¿Despierta durante la noche?',
        dataIndex: 'despiertaDuranteNoche',
        key: 'despiertaDuranteNoche',
        width: 30,
    },
    {
        title: '¿Con qué frecuencia?',
        dataIndex: 'despiertaDuranteNocheFrecuencia',
        key: 'despiertaDuranteNocheFrecuencia',
        width: 30,
    },
    {
        title: '¿Cuántos minutos te expones al sol al día?',
        dataIndex: 'minutosExposicionSol',
        key: 'minutosExposicionSol',
        width: 30,
    },
    {
        title: '¿Cubres tu piel con ropa de manga larga, pantalón, gorra o sombrero?',
        dataIndex: 'cubrePielRopa',
        key: 'cubrePielRopa',
        width: 50,
    },
    {
        title: '¿Utilizas bloqueador solar?',
        dataIndex: 'utilizaBloqueadorSolar',
        key: 'utilizaBloqueadorSolar',
        width: 30,
    },
    {
        title: '¿Cuántos días a la semana?',
        dataIndex: 'bloqueadorSolarDias',
        key: 'bloqueadorSolarDias',
        width: 30,
    }, {
        title: 'Naciste por',
        dataIndex: 'nacistePor',
        key: 'nacistePor',
        width: 30,
    },
    {
        title: 'Lactancia',
        dataIndex: 'lactancia',
        key: 'lactancia',
        width: 30,
    },
    {
        title: '¿Por cuánto tiempo?',
        dataIndex: 'lactanciaTiempo',
        key: 'lactanciaTiempo',
        width: 30,
    }
];


export const extraColumns = [
    {
        title: '¿Alguien de tu famila padece alguna enfermedad?',
        dataIndex: 'familiarPadeceEnfermedad',
        key: 'familiarPadeceEnfermedad',
        width: 30,
    },
    {
        title: 'Enfermedad',
        dataIndex: 'enfermedad',
        key: 'enfermedad',
        width: 30,
    },
];