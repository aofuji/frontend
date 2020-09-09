import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Home from './home';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />

      {/* <Route exact path="/teste" component={Teste} /> */}
    </Switch>
  </Router>
);

export default Routes;
