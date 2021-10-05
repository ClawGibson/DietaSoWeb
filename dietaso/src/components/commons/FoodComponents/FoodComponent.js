//import { Button, Empty, Input, Space } from 'antd';
//import { useState } from 'react';
//import apiURL from '../../../axios/axiosConfig';
import Consulta from './Consulta'


//const { Search } = Input;


/*const buscar = async() =>{     
    if(!document.getElementById('valor').value){        
        setContentImg();        
    }else{
        try {            
            const { data, status } = await apiURL.get('/alimentos');   
            console.log(data);  
            let text = document.getElementById('valor').value;   
            let img = '';   
            let results = false;          
            for (let i = 0; i  < data.length; i++) {                      //data[i].nombreAlimento.include(text);
                if (data[i].nombreAlimento.includes(text)) {
                    img += `<img src="${data[i].imagen}" onClick=""></img>`;                                    
                    document.getElementById('img-food').innerHTML = img; 
                    console.log(data[i].nombreAlimento);  
                    results = true;                       
                }
            }
            if(!results){
                document.getElementById('img-food').innerHTML = `<h1>No se encontraron resultados.</h1>`;
            }

        } catch (error) {
            console.log(error);
        }                
    }    
}
*/

/*const showProps = () => {
    console.log('Hola');
}*/


/*const setContentImg = async() =>{        
    try{
        const { data, status } = await apiURL.get('/alimentos'); 
        let img = '';
        for (let i = 0; i < data.length; i++) {
            img += `<img src="${data[i].imagen}"></img>`;
        }              
        document.getElementById('img-food').innerHTML = img;
    }catch(error){

    }
}*/


/*const revisar = () => {
    if(!document.getElementById('valor').value){
        setContentImg();
    }     
}*/


const FoodComponent = () => {    
    /*setContentImg();    
    return (
        <>
            <div class="food">                                 
                <div className="search">
                    <Input.Group>
                        <Search  id="valor" onChange={revisar} onSearch={buscar} placeholder="Busqueda rápida"></Search>                    
                    </Input.Group> 
                </div>                       
                
                <div class="grid_food" id="img-food">                                     
                    
                </div>                                                                      
            </div>
        </>
    );    */
    return (
        <>
            <Consulta/>
        </>
    );
}
export default FoodComponent;