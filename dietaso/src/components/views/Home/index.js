import { React, useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { Row, Col, message, Spin } from 'antd';

import UserCard from '../../commons/UserCard/UserCard';

import apiURL from '../../../axios/axiosConfig';

// Antd imports

// SCSS files
import './index.scss';

const Home = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const { token } = useSelector((state) => state.authorizationStore);

    useEffect(() => {
        getUsers();
        return () => {
            setUsers([]);
            setLoading(true);
        };
    }, []);

    const getUsers = async () => {
        try {
            if (token && token !== '') {
                const { data } = await apiURL.get('/informacionUsuarios');
                setUsers(data);
                setLoading(false);
            } else {
                message.info('Refresque la página para obtener los usuarios');
            }
        } catch (error) {
            setLoading(false);
            console.groupCollapsed('[Home.js] getUsers()');
            console.error(error);
            console.groupEnd();
        }
    };

    return (
        <div className='users-container'>
            <div className='title-container'>
                <h2>Usuario registrados</h2>
            </div>
            <div>
                <Row gutter={[16, 16]} className='usercard-container'>
                    {(loading && <Spin size='large' />) ||
                        users.map(
                            (user) =>
                                user.nombre &&
                                !user.nombre.includes(
                                    '- Selecione una opción -'
                                ) && (
                                    <div key={user.id}>
                                        <UserCard user={user} />
                                    </div>
                                )
                        )}
                </Row>
            </div>
        </div>
    );
};

export default Home;
