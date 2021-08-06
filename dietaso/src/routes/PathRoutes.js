import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from '../components/views/Login';
import PrincipalRoutes from './PrincipalRoutes';

const PathRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={'/login'} component={Login} />
        <Route path={'/'} component={PrincipalRoutes} />
      </Switch>
    </Router>
  );
};

export default PathRoutes;
