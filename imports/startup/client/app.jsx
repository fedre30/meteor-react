import { Meteor } from 'meteor/meteor';

import React from 'react';
import ReactDOM from 'react-dom';

import MainLayout from '../../ui/containers/MainLayout.jsx';
import students from '../../api/students.js';

Meteor.startup(() => {
  ReactDOM.render(
    <MainLayout />,
    document.getElementById('app')
  );
});
