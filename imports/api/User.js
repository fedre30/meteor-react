import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';

export const User = {
  get: () => {
    return Meteor.user() || {};
  },

  id: () => {
    return Meteor.userId();
  },

  isLoggedIn: () => {
    return !! Meteor.userId();
  },

  isLoggedOut: () => {

    return ! User.isLoggedIn();
  },

  profile: () =>{
    return User.get().profile;
  },

  create: () => {
    Accounts.createUser((role, user) =>{
      if (role === 'admin') {
        Roles.addUsersToRoles(user, 'admin');
      }
    });
  },

  roles: () => {
    return ['admin', 'user']
  }
};

