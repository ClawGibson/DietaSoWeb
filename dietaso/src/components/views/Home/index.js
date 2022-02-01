import { React, useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { Row, Col, message, Spin, DatePicker } from 'antd';
import moment from 'moment';
import dayjs from 'dayjs';

import UserCard from '../../commons/UserCard/UserCard';

import apiURL from '../../../axios/axiosConfig';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Routes from '../../../routes/routes';

// Antd imports

// SCSS files
import './index.scss';

const Home = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const { token } = useSelector((state) => state.authorizationStore);
    const history = useHistory();

    const { RangePicker } = DatePicker;

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

    const handleNavigate = (user) => {
        //console.log(user);
        //const history = useHistory();
        //history.push(`/usuarios/${user.usuario}`);
        history.push(`${Routes.UsersDetails}/${user.usuario}`);
    };

    const print = (values) => {
        const dateA = values[0];
        const dateB = values[1];

        const obj = {
            fechas: getDaysBetweenDates(dateA, dateB),
        };

        console.log(obj);
    };

    const getDaysBetweenDates = function (startDate, endDate) {
        let now = startDate.clone(),
            dates = [];

        while (now.isSameOrBefore(endDate)) {
            dates.push(dayjs(now).toISOString());
            now.add(1, 'days');
        }
        return dates;
    };

    return (
        <div className='users-container'>
            <div className='title-container'>
                <h2>Usuario registrados</h2>
            </div>
            <div>
                <RangePicker onChange={print} />
                <Row gutter={[16, 16]} className='usercard-container'>
                    {(loading && <Spin size='large' />) ||
                        users.map(
                            (user) =>
                                user.nombre &&
                                !user.nombre.includes(
                                    '- Selecione una opción -'
                                ) && (
                                    <div
                                        key={user.id}
                                        onClick={() => handleNavigate(user)}>
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
