'use strict';

function Search() {
  this.username = '';
  this.fullname = '';
  this.avatar = '';
  this.bio = '';
}

Search.prototype.setUserData = function(user) {
  this.username = "@" + user.login;
  this.fullname = user.name;
  this.avatar = user.avatar_url;
  this.bio = (user.bio === null) ? user.login + " has written no bio" : user.bio;
}

