import React from 'react';
import { useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';

import Login from '../components/views/Access';
import PrincipalRoutes from './PrincipalRoutes';

import Routes from './routes';

const PathRoutes = () => {
    const authorizationStore = useSelector((state) => state.authorizationStore);

    //console.log('Auth', authorizationStore);
    return (
        <Router>
            <Switch>
                {(authorizationStore.isLoggedIn && (
                    <Route path={'/'} component={PrincipalRoutes} />
                )) || (
                    <>
                        <Redirect to={Routes.Login} />
                        <Route exact path={Routes.Login} component={Login} />
                    </>
                )}
            </Switch>
        </Router>
    );
};

export default PathRoutes;
