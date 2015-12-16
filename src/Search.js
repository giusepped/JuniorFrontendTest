'use strict';

function Search() {
  this.username = "";
  this.fullname = "";
  this.avatar = "";
  this.bio = "";
}

Search.prototype.setUsername = function(username) {
  this.username = username;
}