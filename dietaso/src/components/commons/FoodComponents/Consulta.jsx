import { useEffect, useState } from 'react';

import { message } from 'antd';

import apiURL from '../../../axios/axiosConfig';

const Consulta = ({ onClick }) => {
    const [ data, setData ] = useState([]);
    const [ filterData, setFilterData ] = useState([]);

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
                <input
                    id='search_valor'
                    onChange={onSearch}
                    placeholder='Busqueda rápida'
                />
            </div>

            <div class='grid_food' id='img-food'>
                {filterData.length > 0
                    ? filterData.map((alimento) => (
                        <img
                            src={alimento.imagen}
                            alt={alimento.nombreAlimento}
                            onClick={() => onClick(alimento)}
                            value={alimento.id}
                            id={alimento.id}
                            className='img-alimento'
                        />
                    ))
                    : null}
            </div>
        </div>
    );
};

export default Consulta;
