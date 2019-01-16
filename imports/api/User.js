import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

export const User = {
  get: function() {
    return Meteor.user() || {};
  },

  id: function() {
    return Meteor.userId();
  },

  isLoggedIn: function() {
    return !! Meteor.userId();
  },

  isLoggedOut: function() {

    return ! User.isLoggedIn();
  },

  profile: function() {
    return User.get().profile;
  },

  create: function() {
    Accounts.createUser(function(roleUser, user){
      user.roles = roleUser;
      return user
    });
  },

  roles: function () {
    Meteor.roles();
  }
};

