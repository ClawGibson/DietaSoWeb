import Home from './components/views/Home';
import MainLayout from './components/layouts/MainLayout';
import SideMenu from './components/layouts/SideMenu';

import './styles/App.scss';

function App() {
  return (
    <MainLayout>
      <SideMenu />
      <Home />
    </MainLayout>
  );
}

export default App;
