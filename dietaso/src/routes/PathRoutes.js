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
    const { isLoggedIn } = useSelector((state) => state.authorizationStore);

    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Switch>
                {(isLoggedIn && (
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
