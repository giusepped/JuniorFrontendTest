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

Search.prototype.setFullname = function(fullname) {
  this.fullname = fullname;
}

Search.prototype.setAvatar = function(avatar) {
  this.avatar = avatar;
}

Search.prototype.setBio = function(bio) {
  this.bio = (bio === null) ? this.username + " has written no bio" : bio;
}