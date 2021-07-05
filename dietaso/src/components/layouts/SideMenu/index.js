import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Menu } from 'antd';
import { CloudUploadOutlined, HomeOutlined } from '@ant-design/icons';
import Routes from '../../../routes/routes';
import PathRoutes from '../../../routes/PathRoutes';

import './SideMenu.scss';

const SideMenu = () => {
  const [onHover, setOnHover] = useState(true);

  const history = useHistory();

  const handleHistory = (route) => {
    history.replace(`${route}`);
  };

  const handleHover = () => {
    setOnHover(!onHover);
  };

  return (
    <div
      className='sideMenuContainer'
      onMouseLeave={handleHover}
      onMouseEnter={handleHover}
    >
      <Menu
        classname='menuContainer'
        inlineCollapsed={onHover}
        mode='inline'
        defaultSelectedKeys={[Routes.Principal]}
        defaultSelectedKeys={['import']}
      >
        <Menu.Item
          className='menuItem'
          key={Routes.Principal}
          icon={<HomeOutlined />}
          onClick={() => handleHistory(Routes.Principal)}
        >
          Principal
        </Menu.Item>
        <Menu.Item
          className='menuItem'
          key={Routes.ImportarDatos}
          icon={<CloudUploadOutlined />}
          onClick={() => handleHistory(Routes.ImportarDatos)}
        >
          Importar datos
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default SideMenu;
