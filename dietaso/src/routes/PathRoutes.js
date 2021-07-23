import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../components/views/Home';
import Equivalences from '../components/views/Equivalences';
import Login from '../components/views/Login';
import SideMenu from '../components/layouts/SideMenu';

const PathRoutes = () => {
  return (
    <Router>
      <SideMenu />
      <Switch>
        <Route exact path={'/principal'} component={Home} />
        <Route exact path={'/login'} component={Login} />
        <Route exact path={'/Equivalencias'} component={Equivalences} />
      </Switch>
    </Router>
  );
};

export default PathRoutes;
