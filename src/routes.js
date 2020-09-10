import React from 'react';


import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

//pages
import Page404 from './pages/page404'
import Home from './pages/home';
import Detail from './pages/detail'


const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/:user" component={Detail} />
      <Route path="*" component={Page404} />
    </Switch>
  </Router>
);

export default Routes;
