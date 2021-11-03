import React from "react";
import apiURL from '../../../axios/axiosConfig';
import { useEffect, useState } from 'react';
import {  message } from 'antd';


import { SmileTwoTone, MehTwoTone,FrownTwoTone } from '@ant-design/icons';


const IconsComponent = ({img}) => {    
    const [data, setData] = useState([]);
    /*console.log("Nutricional: ")
    console.log(data.icono.iconoNutricional)
    console.log("Ambiental: ")
    console.log(data.icono.iconoCulturaSociedad)
    console.log("Economia: ")
    console.log(data.icono.iconoCulturaSociedad)
    console.log("Cultura y Sociedad: ")
    console.log(data.icono.iconoCulturaSociedad)*/


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
                    <h1 id="healt">Icono nutricional</h1>  
                    <div id="icons-icons">
                        <SmileTwoTone twoToneColor={data?.icono?.iconoNutricional == 1? " #27ae60":"#d4efdf"} style={{ fontSize: '35px'}} />     
                        <MehTwoTone twoToneColor={data?.icono?.iconoNutricional == 2? "#ffcb00":"#f7efcd"} style={{ fontSize: '35px'}}/>   
                        <FrownTwoTone twoToneColor={data?.icono?.iconoNutricional == 3? " #c0392b":" #f2d7d5"} style={{ fontSize: '35px'}}/>
                    </div>
                </div>
                <div class="icon_enviroment" > 
                    <h1 id="enviro">Icono medioambiental</h1>
                    <div id="icons-icons">
                        <SmileTwoTone twoToneColor={data?.icono?.iconoCulturaSociedad == 1? " #27ae60":"#d4efdf"} style={{ fontSize: '35px'}}/>     
                        <MehTwoTone twoToneColor={data?.icono?.iconoCulturaSociedad == 2? "#ffcb00":"#f7efcd"} style={{ fontSize: '35px'}}/>   
                        <FrownTwoTone twoToneColor={data?.icono?.iconoCulturaSociedad == 3? " #c0392b":" #f2d7d5"} style={{ fontSize: '35px'}}/>
                    </div>
                </div>
                <div class="icon_economy" >
                    <h1 id="economy">Icono economía</h1> 
                    <div id="icons-icons">
                        <SmileTwoTone twoToneColor={data?.icono?.iconoCulturaSociedad == 1? " #27ae60":"#d4efdf"} style={{ fontSize: '35px'}}/>     
                        <MehTwoTone twoToneColor={data?.icono?.iconoCulturaSociedad == 2? "#ffcb00":"#f7efcd"} style={{ fontSize: '35px'}}/>   
                        <FrownTwoTone twoToneColor={data?.icono?.iconoCulturaSociedad == 3? " #c0392b":" #f2d7d5"} style={{ fontSize: '35px'}}/>
                    </div> 
                </div>
                <div class="icon_culture_society" > 
                    <h1 id="culture">Icono cultura y sociedad</h1>
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
