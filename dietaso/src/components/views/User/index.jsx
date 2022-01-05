import React, {useState,useEffect,Component} from 'react'
import apiURL from '../../../axios/axiosConfig';
import './user.scss';
import profile from "./profile.jpg";

const Usuarios = () => {

    //Get the id from params
    const [info, setInfo] = useState({});
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

    

    console.log(window.location.pathname.split('usuarios/')[1]);

    useEffect(() => {
        fethInfo();
        return () => {
            console.log('oal')
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
    

    const save = async() => {
        //guardar con patch o post.
    };

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
        </>
    )
}

export default Usuarios