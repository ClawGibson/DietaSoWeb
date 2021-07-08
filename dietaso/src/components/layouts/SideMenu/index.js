import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Menu, message } from 'antd';
import {
  CloudUploadOutlined,
  HomeOutlined,
  LogoutOutlined,
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
          key={Routes.ImportarDatos}
          icon={<CloudUploadOutlined />}
          onClick={() => handleHistory(Routes.ImportarDatos)}
        >
          Importar datos
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
