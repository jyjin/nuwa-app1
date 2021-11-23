import { Route, Switch, withRouter, HashRouter as Router } from 'react-router-dom';
import home from './home'
import me from './me'
import React from 'react';
export default () => {
  return (
    <Router>
      <div>124</div>
      <Route exact path={`/home`} component={home} />
      <Route exact path={`/me`} component={me} />
    </Router>
  )
}