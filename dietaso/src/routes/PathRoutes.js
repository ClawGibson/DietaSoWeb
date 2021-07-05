import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../components/views/Home';
import ImportData from '../components/commons/ImportData';
import SideMenu from '../components/layouts/SideMenu';

const PathRoutes = () => {
  return (
    <Router>
      <SideMenu />
      <Switch>
        <Route exact path={'/principal'} component={Home} />
        <Route exact path={'/importar-datos'} component={ImportData} />
      </Switch>
    </Router>
  );
};

export default PathRoutes;
