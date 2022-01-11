import React, {useState,useEffect,Component} from 'react'
import {Select} from 'antd';
import apiURL from '../../../axios/axiosConfig';
import './user.scss';
import profile from "./profile.jpg";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'
import Popup from './popup';
///import { render } from "react-dom";
//import CanvasJSReact from "./canvasjs.react";
//var CanvasJSChart = CanvasJSReact.CanvasJSChart;


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

    //popup
    const [isOpen, setIsOpen] = useState(false);
 
    const togglePopup = () => {
      setIsOpen(!isOpen);
    }

    const initialCinturas = [30, 35, 33, 37, 40];
    const initialPosicionesCinturas = [1, 2, 3, 4, 5];
    const [newCinturas, setCinturas] = useState([initialCinturas]);
    const [newPosicionesCinturas, setPosicionesCinturas] = useState([initialPosicionesCinturas]);

    

    console.log(window.location.pathname.split('usuarios/')[1]);

    useEffect(() => {
        fethInfo();
        //fethConsumo();
        return () => {
            console.log('oal');
            setState({});
            setPosicionesCinturas();
            setCinturas();
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

    //This part is being used for test purposes only
    
    const lista = [30, 35, 33, 37, 40];
    console.log(lista);

    const cintura = [30, 35, 33, 37, 40, 30, 35, 33, 37, 40, 30, 35, 33, 37, 40];

    const posisciones = [1,2,3,4,5,1,2,3,4,5,1,2,3,4,5];


   
    const updateCinturas = () =>{
        setCinturas([...newCinturas,10]);
        setPosicionesCinturas([...newPosicionesCinturas,6]);
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
    
    const dataCintura = {
        labels: posisciones,
        datasets: [
          {
            label: 'Cintura',
            fill: false,
            lineTension: 0.3,
            backgroundColor: 'rgba(75,192,19,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: cintura
          },
          {
            label: 'Cadera',
            fill: false,
            lineTension: 0.3,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [40, 42, 39, 44, 45]
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
      

    //end test

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

    function handleChange(e) {
        document.getElementByName('Name').value=0; 
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
                            <input className='lb-name' placeholder={info.celular || ''} type="text" name='celular' onChange={event => setCelular(event.target.value)}></input>
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
                            <input className='lb-name' placeholder={info.fechaDeNacimiento || ''} type="text" name='fechaDN' onChange={event => setFechaNacimiento(event.target.value)}></input>
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
                            <Line
                                data={dataCintura}
                                options={{
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
                                    <p>
                                        <div className='circunferencia-Container'>
                                            <div className='circunferencia-Container4'>
                                                <label className='label-circunferencia'>Cintura:</label>
                                                <input className='input-circunferencia' type="text" name='nombre' /*onChange={event => setName(event.target.value)}*/></input>
                                            </div>
                                            <div className='circunferencia-Container4'>
                                                <label className='label-circunferencia'>Cadera:</label>
                                                <input className='input-circunferencia' type="text" name='nombre' /*onChange={event => setName(event.target.value)}*/></input>
                                            </div>
                                        </div>
                                    </p>
                                    <button className='btn-see-circunferencia' onClick={updateCinturas} value="Add">Agregar</button>
                                </>}
                                handleClose={togglePopup}
                                />}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='containerCampoCor'>
                    <div className='basicInfo-Title'>
                        Campos Corporales
                    </div>
                    <div >
                        <div className='campCor-Container'>
                            <div className='campoCor-Container2'>
                                <label className='label-campCor'>Porcentaje de grasa:</label>
                                <input className='input-campCor' type="text" name='nombre' /*onChange={event => setName(event.target.value)}*/></input>
                            </div>
                            <div className='campoCor-Container2'>
                                <label className='label-campCor'>Porcentaje de masa:</label>
                                <input className='input-campCor' type="text" name='nombre' /*onChange={event => setName(event.target.value)}*/></input>
                            </div>
                            <div className='campoCor-Container2'>
                                <label className='label-campCor'>Porcentaje de agua:</label>
                                <input className='input-campCor' type="text" name='nombre' /*onChange={event => setName(event.target.value)}*/></input>
                            </div>
                        </div>
                        
                    </div>

                    <div >
                        <div className='campCor-Container'>
                            <div className='campoCor-Container2'>
                                <label className='label-campCor'>Densidad osea:</label>
                                <input className='input-campCor' type="text" name='nombre' /*onChange={event => setName(event.target.value)}*/></input>
                            </div>
                            <div className='campoCor-Container2'>
                                <label className='label-campCor'>Grasa viseral:</label>
                                <input className='input-campCor' type="text" name='nombre' /*onChange={event => setName(event.target.value)}*/></input>
                            </div>
                            <div className='campoCor-Container2'>
                                <label className='label-campCor'>Tasa Metabolica:</label>
                                <input className='input-campCor' type="text" name='nombre' /*onChange={event => setName(event.target.value)}*/></input>
                            </div>
                        </div>
                    </div>

                    <div >
                        <div className='campCor-Container'>
                            <div className='campoCor-Container2'>
                                <label className='label-campCor2'>Edad metabolica:</label>
                                <input className='input-campCor2' type="text" name='nombre' /*onChange={event => setName(event.target.value)}*/></input>
                            </div>
                            
                        </div>
                    </div>

                    <div >
                        <div className='campCor-Container'>
                            <div className='campoCor-Container2'>
                                <button className='btn-see-camCor' /*onClick={() => GuardarCambios()}*/ >Mostrar Grafica</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*----------------------------------------------------------------------------------------------------------------------------------------------------*/}
                <div className='containerEstadoGen'>
                    <div className='basicInfo-Title'>
                        Estado General
                    </div>
                    <div >
                        <div className='estadoGen-Container'>
                            <div className='estadoGen-Container2'>
                                <label className='label-estadoGen'>Nivel de cansancio:</label>
                                <input className='input-campCor' type="text" name='nombre' /*onChange={event => setName(event.target.value)}*/></input>
                            </div>
                            <div className='estadoGen-Container2'>
                                <label className='label-estadoGen'>Mareos:</label>
                                <input className='input-campCor' type="text" name='nombre' /*onChange={event => setName(event.target.value)}*/></input>
                            </div>
                            <div className='estadoGen-Container2'>
                                <label className='label-estadoGen'>Nivel de sed:</label>
                                <input className='input-campCor' type="text" name='nombre' /*onChange={event => setName(event.target.value)}*/></input>
                            </div>
                        </div>
                        
                    </div>

                    <div >
                        <div className='estadoGen-Container'>
                            <div className='estadoGen-Container2'>
                                <label className='label-estadoGen'>Frecuencia de orinar:</label>
                                <input className='input-campCor' type="text" name='nombre' /*onChange={event => setName(event.target.value)}*/></input>
                            </div>
                            <div className='estadoGen-Container2'>
                                <label className='label-estadoGen'>Frecuencia de hambre:</label>
                                <input className='input-campCor' type="text" name='nombre' /*onChange={event => setName(event.target.value)}*/></input>
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
                                <input className='input-campCor' type="text" name='nombre' /*onChange={event => setName(event.target.value)}*/></input>
                            </div>
                            <div className='estadoGen-Container2'>
                                <label className='label-estadoGen'>A que Hora:</label>
                                <input className='input-campCor' type="text" name='nombre' /*onChange={event => setName(event.target.value)}*/></input>
                            </div>
                            <div className='estadoGen-Container2'>
                                <label className='label-estadoGen'>Frecuencia:</label>
                                <input className='input-campCor' type="text" name='nombre' /*onChange={event => setName(event.target.value)}*/></input>
                            </div>
                        </div>
                    </div>

                    <div >
                        <div className='estadoGen-Container'>
                            <div className='estadoGen-Container2'>
                                <label className='label-estadoGen'>Horas sentado:</label>
                                <input className='input-campCor' type="text" name='nombre' /*onChange={event => setName(event.target.value)}*/></input>
                            </div>
                            <div className='estadoGen-Container2'>
                                <label className='label-estadoGen'>Horas parado:</label>
                                <input className='input-campCor' type="text" name='nombre' /*onChange={event => setName(event.target.value)}*/></input>
                            </div>
                        </div>
                    </div>

                    <div >
                        <div className='estadoGen-Container'>
                            <div className='estadoGen-Container2'>
                                <button className='btn-see-camCor' /*onClick={() => GuardarCambios()}*/ >Mostrar Grafica</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Usuarios