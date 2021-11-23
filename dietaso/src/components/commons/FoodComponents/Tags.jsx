import { Tag } from 'antd';
import { useEffect, useState } from 'react';


const Tags = ({itm}) => {
    const [data,setData] = useState([]);
    
    useEffect(() => {   
        setData(itm)
    }, [itm])

    console.log(itm)
    return(
        <>     
            
            <Tag color="magenta">{data}</Tag>
            
            {/*<Tag color="magenta">magenta</Tag>
            <Tag color="red">red</Tag>
            <Tag color="volcano">volcano</Tag>
            <Tag color="orange">orange</Tag>
            <Tag color="gold">gold</Tag>                        
        <Tag color="magenta">magenta</Tag>                        */}
        </>
    );
}

export default Tags;