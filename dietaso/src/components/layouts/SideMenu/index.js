import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { signOutAction } from '../../../redux/actions/authorizationAction';

import { Menu } from 'antd';
import {
    HomeOutlined,
    LogoutOutlined,
    SwapOutlined,
    CoffeeOutlined,
} from '@ant-design/icons';
import Routes from '../../../routes/routes';

import './SideMenu.scss';

const SideMenu = () => {
    const [onHover, setOnHover] = useState(true);

    const history = useHistory();
    const dispatch = useDispatch();

    const handleHistory = (route) => {
        history.replace(route);
    };

    const handleHover = () => {
        setOnHover(!onHover);
    };

    const logOut = () => {
        dispatch(signOutAction());
        history.replace(Routes.Login);
    };

    return (
        <Menu
            className={`sideMenuContainer${!onHover ? '-open' : ''}`}
            onMouseLeave={handleHover}
            onMouseEnter={handleHover}
            inlineCollapsed={onHover}
            mode='inline'
            defaultSelectedKeys={[Routes.Principal]}>
            <Menu.Item
                key={Routes.Principal}
                icon={<HomeOutlined />}
                onClick={() => handleHistory(Routes.Principal)}>
                Principal
            </Menu.Item>
            <Menu.Item
                key={Routes.Equivalencias}
                icon={<SwapOutlined />}
                onClick={() => handleHistory(Routes.Equivalencias)}>
                Importar equivalencias
            </Menu.Item>
            <Menu.Item
                key={Routes.Alimentos}
                icon={<CoffeeOutlined />}
                onClick={() => handleHistory(Routes.Alimentos)}>
                Alimentos
            </Menu.Item>
            <Menu.Item
                key={Routes.Recordatorios}
                icon={<CoffeeOutlined />}
                onClick={() => handleHistory(Routes.Recordatorios)}>
                Recordatorios
            </Menu.Item>
            <Menu.Item
                key={Routes.Ejercicios}
                icon={<CoffeeOutlined />}
                onClick={() => handleHistory(Routes.Ejercicios)}>
                Ejercicios
            </Menu.Item>
            <Menu.Item
                key={Routes.ImportarAlimentos}
                icon={<CoffeeOutlined />}
                onClick={() => handleHistory(Routes.ImportarAlimentos)}>
                Importar alimentos
            </Menu.Item>
            <Menu.Item
                className='exit'
                key={'LogIn'}
                icon={<LogoutOutlined />}
                onClick={logOut}>
                Cerrar sesion.
            </Menu.Item>
        </Menu>
    );
};

export default SideMenu;
