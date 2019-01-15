import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from '../components/Header.jsx';
import Home from '../pages/Home.jsx';
import Edit from '../pages/Edit.jsx';
import Delete from '../pages/Delete.jsx';

export default class MainLayout extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path = '/edit/:id' component={Edit} />
            <Route path = '/delete/:id' component={Delete} />
          </Switch>
        </div>
      </Router>
    );
  }
}
