import Home from './components/views/Home';
import MainLayout from './components/layouts/MainLayout';
import SideMenu from './components/layouts/SideMenu';
import PathRoutes from './routes/PathRoutes';

import './styles/App.scss';
import './styles/antd.less';

function App() {
  return (
    <MainLayout>
      <PathRoutes />
    </MainLayout>
  );
}

export default App;
