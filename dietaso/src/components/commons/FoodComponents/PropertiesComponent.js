import { PlusCircleTwoTone} from '@ant-design/icons';
import { useEffect, useState } from 'react';
import Props from './Props'
import Tags from './Tags';

//({item, itemName})
const PropertiesComponent = ({item}) => {
    //const [name, setName] = useState([]) 
    //const [data, setData] = useState([]);

    //console.log(name?.nombreAlimento)
    //console.log(item.nombreAlimento)

    useEffect(() => {
        //item && setData(item);
        //itemName && setName(itemName);
        /*return () => {
            setData([]); 
            //setName([]);   
            
        };*/
        establecerValores()                                         
    }, [item]);
    //[item]



    const establecerValores = () => {
        if(item.nombreAlimento != null){
            document.getElementById('pName').value = item?.nombreAlimento;

        }        
    }


    return (
        <>
            <div class="props">                    
                <div class="head_props"><h1 id="title">Propiedades</h1></div>
                <div class="data_props">                
                    <Props/>    
                </div>
                <div class="preparaciones">                
                    <div class="tags">  
                        <Tags/>
                    </div>
                    <div class="add_tag">   
                        <PlusCircleTwoTone twoToneColor="#3467B9" style={{ fontSize: '26px'}}/>                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default PropertiesComponent;