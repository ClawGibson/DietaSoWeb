import './Alimentos.scss';

//import { Input, Space } from 'antd';
import FoodComponent from '../../commons/FoodComponents/FoodComponent';
import IconsComponent from '../../commons/FoodComponents/IconsComponent';
import PropertiesComponent from '../../commons/FoodComponents/PropertiesComponent';
import SaveButton from '../../commons/FoodComponents/SaveButton';
import Consulta from '../../commons/FoodComponents/Consulta.jsx';



const Alimentos = () => {
    return(    
        <div class="container" >
            <Consulta/>
            <IconsComponent/>
            <PropertiesComponent/>
            <SaveButton/>
        </div>        
    );
};

export default Alimentos;