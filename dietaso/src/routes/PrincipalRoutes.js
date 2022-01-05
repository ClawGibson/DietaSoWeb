import { Switch, Route, Redirect } from 'react-router-dom';

import SideMenu from '../components/layouts/SideMenu';
// Pages
import Equivalences from '../pages/equivalences';
import Home from '../pages/home';
import Food from '../pages/food';
import Alimentos from '../pages/alimentos';
import Reminders from '../pages/reminders';
import Imports from '../pages/imports';
import Exports from '../pages/exports';
import Routes from './routes';

const PrincipalRoutes = () => {
    return (
        <>
            <SideMenu />
            <Switch>
                <Route exact path={Routes.Principal} component={Home} />
                <Route
                    exact
                    path={Routes.Equivalencias}
                    component={Equivalences}
                />
                {/*  <Route exact path={'/Alimentos'} component={Food} /> */}
                <Route exact path={Routes.Alimentos} component={Alimentos} />
                <Route
                    exact
                    path={Routes.Recordatorios}
                    component={Reminders}
                />
                <Route exact path={Routes.Imports} component={Imports} />
                <Route exact path={Routes.Exports} component={Exports} />
                <Redirect to={Routes.Principal} />
            </Switch>
        </>
    );
};

export default PrincipalRoutes;
