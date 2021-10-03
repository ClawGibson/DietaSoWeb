import './Alimentos.scss';

import { Input, Space } from 'antd';
import { Row, Col, Divider } from 'antd';

const style = { background: '#0092ff', padding: '8px 0' };

const { Search } = Input;


const buscar = () =>{
    
}

const setImg = () =>{

}


const Alimentos = () => {
    return(                
        <body>        
            <div class="container">                                
                <div class="food">                                 
                    <div className="search">
                        <Input.Group>
                            <Search onSearch={buscar}></Search>
                        </Input.Group> 
                    </div>        
                     
                    <div class="grid_food">
                        <img src="https://images.pexels.com/photos/1400172/pexels-photo-1400172.jpeg?cs=srgb&dl=pexels-adonyi-g%C3%A1bor-1400172.jpg&fm=jpg" ></img>
                        <img src="https://images.pexels.com/photos/3621225/pexels-photo-3621225.jpeg?cs=srgb&dl=pexels-rfstudio-3621225.jpg&fm=jpg" ></img>
                        <img src="https://images.pexels.com/photos/3872373/pexels-photo-3872373.jpeg?cs=srgb&dl=pexels-polina-tankilevitch-3872373.jpg&fm=jpg" ></img>
                        <img src="https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?cs=srgb&dl=pexels-lumn-1410235.jpg&fm=jpg"></img>
                        <img src="https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?cs=srgb&dl=pexels-iina-luoto-1211887.jpg&fm=jpg" ></img>
                        <img src="https://images.pexels.com/photos/704571/pexels-photo-704571.jpeg?cs=srgb&dl=pexels-daria-shevtsova-704571.jpg&fm=jpg"></img>
                        <img src="https://images.pexels.com/photos/4207654/pexels-photo-4207654.jpeg?cs=srgb&dl=pexels-karolina-grabowska-4207654.jpg&fm=jpg"></img>
                    </div>                                                                      
                </div>        

                <div class="icons">
                    <div class="img_food">
                        
                    </div>                    
                    <div class="icon_healty"> </div>
                    <div class="icon_enviroment"> </div>
                    <div class="icon_economy"> </div>
                    <div class="icon_culture_society"> </div>                    
                </div>

                <div class="props">                    
                    <div class="head_props"><h1 id="title">Propiedades</h1></div>
                    <div class="data_props">    </div>
                    <div class="preparaciones">
                        <div class="tags">  </div>
                        <div class="add_tag">   </div>
                    </div>
                </div>

                <div class="button_save">

                </div>
            </div>        
        </body>
    );
};

export default Alimentos;