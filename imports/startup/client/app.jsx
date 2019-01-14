import { Meteor } from 'meteor/meteor';

import React from 'react';
import ReactDOM from 'react-dom';

import MainLayout from '../../ui/containers/MainLayout.jsx';
import students from '../../api/students.js';

Meteor.startup(() => {
  if( students.find().count() <= 0 )
  {
    students.insert(
      {
        name : "Federica Alfano"
      }
    );
  }

  ReactDOM.render(
    <MainLayout />,
    document.getElementById('app')
  );
});
