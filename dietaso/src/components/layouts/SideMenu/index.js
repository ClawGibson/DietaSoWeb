import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Menu, message } from 'antd';
import {
	CloudUploadOutlined,
	HomeOutlined,
	LogoutOutlined,
	SwapOutlined
} from '@ant-design/icons';
import Routes from '../../../routes/routes';

import './SideMenu.scss';

const SideMenu = () => {
	const [onHover, setOnHover] = useState(true);

	const history = useHistory();

	const handleHistory = (route) => {
		history.replace(route);
	};

	const handleHover = () => {
		setOnHover(!onHover);
	};

	const logOut = () => {
		message.info('Esto cerrará la sesión');
	};

	return (
		<div
			className='sideMenuContainer'
			onMouseLeave={handleHover}
			onMouseEnter={handleHover}
		>
			<Menu
				inlineCollapsed={onHover}
				mode='inline'
				defaultSelectedKeys={[Routes.Principal]}
			>
				<Menu.Item
					key={Routes.Principal}
					icon={<HomeOutlined />}
					onClick={() => handleHistory(Routes.Principal)}
				>
					Principal
				</Menu.Item>
				<Menu.Item
					key={Routes.Login}
					icon={<CloudUploadOutlined />}
					onClick={() => handleHistory(Routes.Login)}
				>
					Login
				</Menu.Item>
				<Menu.Item
					key={Routes.Equivalencias}
					icon={<SwapOutlined />}
					onClick={() => handleHistory(Routes.Equivalencias)}
				>
					Equivalencias
				</Menu.Item>
				<Menu.Item
					className='exit'
					key={'LogIn'}
					icon={<LogoutOutlined />}
					onClick={logOut}
				>
					Cerrar sesion.
				</Menu.Item>
			</Menu>
		</div>
	);
};

export default SideMenu;
