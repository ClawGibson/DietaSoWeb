import { Switch, Route, Redirect } from 'react-router-dom';

import SideMenu from '../components/layouts/SideMenu';
// Pages
import Equivalences from '../pages/equivalences';
import Home from '../pages/home';
import Food from '../pages/food';
import Alimentos from '../pages/alimentos'

const PrincipalRoutes = () => {
    return (
        <>
            <SideMenu />
            <Switch>
                <Route exact path='/principal' component={Home} />
                <Route exact path={'/Equivalencias'} component={Equivalences} />
                {/*  <Route exact path={'/Alimentos'} component={Food} /> */}
                <Route exact path={'/Alimentos'} component={Alimentos}/>
                <Redirect to={'/principal'} />
            </Switch>
        </>
    );
};

export default PrincipalRoutes;
