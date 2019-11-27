import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Study from './pages/Study';
import Teach from './pages/Teach';
import Job from './pages/Job';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={SignIn} />
        <Route path="/register" component={SignUp} />
        <Route path="/study" component={Study} />
        <Route path="/teach" component={Teach} />
        <Route path="/job" component={Job} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
