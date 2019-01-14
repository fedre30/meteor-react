import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from '../pages/Home.jsx';

export default class MainLayout extends React.Component {
  render() {
    return (
      <Router>
        <div>
            <Switch>
              <Route exact path='/' component={Home} />
            </Switch>
        </div>
      </Router>
    );
  }
}
