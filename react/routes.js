import { Route, Switch, withRouter, HashRouter as Router } from 'react-router-dom';
import home from './home'
import me from './me'
import React from 'react';
export default () => {
  return (
    <Router>
      <Route exact path={`/app1/home`} component={home} />
      <Route exact path={`/app1/me`} component={me} />
    </Router>
  )
}