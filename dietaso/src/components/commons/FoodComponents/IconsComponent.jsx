import React from "react";
import apiURL from '../../../axios/axiosConfig';
import { useEffect, useState } from 'react';
import {  message } from 'antd';


import { SmileTwoTone, MehTwoTone,FrownTwoTone } from '@ant-design/icons';


const IconsComponent = ({img}) => {    
    const [data, setData] = useState([]);
    /*console.log("Nutricional: ")
    console.log(data?.icono?.iconoNutricional)
    console.log("CulturaSociedad: ")
    console.log(data?.icono?.iconoCulturaSociedad)
    console.log("Economia: ")
    console.log(data?.icono?.iconoEconomia)
    console.log("Cultura y Sociedad: ")
    console.log(data?.icono?.iconoCulturaSociedad)
    */

    useEffect(() => {
        img && setData(img);
        return () => {
            setData([]);                        
        };
    }, [img]);            

    return (
        <>            
            <div class="icons">
                <div class="img_food">
                    <img id={data?.imagen != null? "img-container":"img-container-hiden"} src={data?.imagen} alt={data?.nombreAlimento} ></img>
                </div>                    
                <div class="icon_healty" > 
                    <h1 id="healt">Nutricional</h1>  
                    <div id="icons-icons">
                        <SmileTwoTone twoToneColor={data?.icono?.iconoNutricional == 1? " #27ae60":"#d4efdf"} style={{ fontSize: '35px'}} />     
                        <MehTwoTone twoToneColor={data?.icono?.iconoNutricional == 2? "#ffcb00":"#f7efcd"} style={{ fontSize: '35px'}}/>   
                        <FrownTwoTone twoToneColor={data?.icono?.iconoNutricional == 3? " #c0392b":" #f2d7d5"} style={{ fontSize: '35px'}}/>
                    </div>
                </div>
                <div class="icon_enviroment" > 
                    <h1 id="enviro">Ambiental</h1>
                    <div id="icons-icons">
                        <SmileTwoTone twoToneColor={data?.icono?.iconoAmbiental == 1? " #27ae60":"#d4efdf"} style={{ fontSize: '35px'}}/>     
                        <MehTwoTone twoToneColor={data?.icono?.iconoAmbiental == 2? "#ffcb00":"#f7efcd"} style={{ fontSize: '35px'}}/>   
                        <FrownTwoTone twoToneColor={data?.icono?.iconoAmbiental == 3? " #c0392b":" #f2d7d5"} style={{ fontSize: '35px'}}/>
                    </div>
                </div>
                <div class="icon_economy" >
                    <h1 id="economy">Economía</h1> 
                    <div id="icons-icons">
                        <SmileTwoTone twoToneColor={data?.icono?.iconoEconomia == 1? " #27ae60":"#d4efdf"} style={{ fontSize: '35px'}}/>     
                        <MehTwoTone twoToneColor={data?.icono?.iconoEconomia == 2? "#ffcb00":"#f7efcd"} style={{ fontSize: '35px'}}/>   
                        <FrownTwoTone twoToneColor={data?.icono?.iconoEconomia == 3? " #c0392b":" #f2d7d5"} style={{ fontSize: '35px'}}/>
                    </div> 
                </div>
                <div class="icon_culture_society" > 
                    <h1 id="culture">Cultura sociedad</h1>
                    <div id="icons-icons">
                        <SmileTwoTone twoToneColor={data?.icono?.iconoCulturaSociedad == 1? " #27ae60":"#d4efdf"} style={{ fontSize: '35px'}}/>     
                        <MehTwoTone twoToneColor={data?.icono?.iconoCulturaSociedad == 2? "#ffcb00":"#f7efcd"} style={{ fontSize: '35px'}}/>   
                        <FrownTwoTone twoToneColor={data?.icono?.iconoCulturaSociedad == 3? " #c0392b":" #f2d7d5"} style={{ fontSize: '35px'}}/>
                    </div>
                </div>                    
            </div>
        </>
    );
}

export default IconsComponent;
