import { Switch, Route, Redirect } from 'react-router-dom';

import SideMenu from '../components/layouts/SideMenu';
// Pages
import Equivalences from '../pages/equivalences';
import Home from '../pages/home';
import Food from '../pages/food';
import Alimentos from '../pages/alimentos'
import Reminders from '../pages/reminders';
import Ejercicios from '../pages/ejercicios';

const PrincipalRoutes = () => {
    return (
        <>
            <SideMenu />
            <Switch>
                <Route exact path='/principal' component={Home} />
                <Route exact path={'/Equivalencias'} component={Equivalences} />
                {/*  <Route exact path={'/Alimentos'} component={Food} /> */}
                <Route exact path={'/Alimentos'} component={Alimentos}/>
                <Route exact path={'/Recordatorios'} component={Reminders} />
                <Route exact path={'/Ejercicios'} component={Ejercicios} />
                <Redirect to={'/principal'} />
            </Switch>
        </>
    );
};

export default PrincipalRoutes;
