import { Switch, Route, Redirect } from 'react-router-dom';

import Equivalences from '../components/views/Equivalences';
import Home from '../components/views/Home';
import SideMenu from '../components/layouts/SideMenu';

const PrincipalRoutes = () => {
    return (
        <>
            <SideMenu />
            <Switch>
                <Route exact path='/principal' component={Home} />
                <Route exact path={'/Equivalencias'} component={Equivalences} />
                <Redirect to={'/principal'} />
            </Switch>
        </>
    );
};

export default PrincipalRoutes;
