import { Button, Empty, Input, message, Space } from 'antd';
import apiURL from '../../../axios/axiosConfig';
import { useEffect, useState } from 'react';

const Consulta = () => {
    const [ data, setData ] = useState([]);
    const [ filterData, setFilterData ] = useState([]);

    const { Search } = Input;

    useEffect(() => {
        fetchData();
        return () => {
            setData([]);
            setFilterData([]);
        };
    }, []);

    const fetchData = async () => {
        try {
            const { data } = await apiURL.get('/alimentos');
            setData(data);
            setFilterData(data);
        } catch (error) {
            message.error(`Error: ${error.message}`);
        }
    };

    const onSearch = ({ target }) => {
        setFilterData(
            data.filter((alimento) =>
                alimento.nombreAlimento.includes(target.value)
            )
        );
    };

    return (
        <div class='food'>
            <div className='search'>
                <Input.Group>
                    <Search
                        id='valor'
                        placeholder='Busqueda rápida'
                        onChange={onSearch}></Search>
                </Input.Group>
            </div>

            <div class='grid_food' id='img-food'>
                {filterData.length > 0
                    ? filterData.map((alimento) => (
                        //<img src={alimento.imagen} onClick={saludar}></img>
                        <h1>{alimento.nombreAlimento}</h1>
                    ))
                    : null}
            </div>
        </div>
    );
};

export default Consulta;
