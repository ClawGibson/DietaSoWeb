import './Alimentos.scss';

import IconsComponent from '../../commons/FoodComponents/IconsComponent.jsx';
import PropertiesComponent from '../../commons/FoodComponents/PropertiesComponent';
import SaveButton from '../../commons/FoodComponents/SaveButton';
import Consulta from '../../commons/FoodComponents/Consulta.jsx';
import { useState } from 'react';
import apiURL from '../../../axios/axiosConfig';
import {  message } from 'antd';





const Alimentos = () => {
    const [data2, setData] = useState([]);      

    const handleClick = (alimento) => {
        console.log("click!",alimento);       
        fetchData(alimento);
    };

    const fetchData = async (alimento) => {        
        
        console.log(alimento)
        try {            
            const { data } = await apiURL.get('/alimentos/'+alimento.id);
            setData(data);  
            console.log(data2)  
        } catch (error) {
            message.error(`Error: ${error.message}`);
        }                           
    };
    
    return(    
        <div class="container" >
            <Consulta onClick={(item) => handleClick(item)}/>
            <IconsComponent img={data2}/>
            <PropertiesComponent/>
            <SaveButton/>
        </div>        
    );
};

export default Alimentos;