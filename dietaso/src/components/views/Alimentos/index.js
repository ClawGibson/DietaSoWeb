import './Alimentos.scss';

import { Input, Space } from 'antd';
import { Row, Col, Divider } from 'antd';

const style = { background: '#0092ff', padding: '8px 0' };

const { Search } = Input;

const buscar = () => {};

const setImg = () => {};

const Alimentos = () => {
    return (
        <div className='container'>
            <div className='food'>
                <div className='search'>
                    <Input.Group>
                        <Search onSearch={buscar}></Search>
                    </Input.Group>
                </div>

                <div className='grid_food'></div>
            </div>

            <div className='icons'>
                <div className='img_food'></div>
                <div className='icon_healty'> </div>
                <div className='icon_enviroment'> </div>
                <div className='icon_economy'> </div>
                <div className='icon_culture_society'> </div>
            </div>

            <div className='props'>
                <div className='head_props'>
                    <h1 id='title'>Propiedades</h1>
                </div>
                <div className='data_props'> </div>
                <div className='preparaciones'>
                    <div className='tags'> </div>
                    <div className='add_tag'> </div>
                </div>
            </div>

            <div className='button_save'></div>
        </div>
    );
};

export default Alimentos;
