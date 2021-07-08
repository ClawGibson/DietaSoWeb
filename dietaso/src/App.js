import MainLayout from './components/layouts/MainLayout';
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
