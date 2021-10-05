import { Button, Empty, Input, message, Space } from 'antd';
import apiURL from '../../../axios/axiosConfig';
import { useEffect, useState} from 'react';

const { Search } = Input;

//onChange={revisar} onSearch={buscar}
/*const datos = async() =>{
    const { data, status } = await apiURL.get('/alimentos');    
}
*/

//copiaDeData = data.filter((alimento) => alimento.nombreAlimento.includes(busquedaDelInput));

const saludar = () =>{
    alert('Ya jala!');
}

const Consulta = () => {    
    
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetchData();
        return () => {
            setData([]);
        };
    }, []);

    const fetchData = async () => {
        try {
            const { data } = await apiURL.get('/alimentos');
            setData(data);
        } catch (error) {
            message.error(`Error: ${error.message}`);
        }
    };

    return(
        
        <div class="food">                                 
            <div className="search">
                <Input.Group>
                    <Search  id="valor" placeholder="Busqueda rápida"></Search>                    
                </Input.Group> 
            </div>                       
            
            <div class="grid_food" id="img-food">                                     
                {
                    data.length > 0 ?
                        data.map((alimento) =>                   
                            //<img src={alimento.imagen} onClick={saludar}></img>                                                                
                            <h1>{alimento.nombreAlimento}</h1>
                        ) : null
                }
            </div>                                                                      
        </div>
        
    )    
}

export default Consulta