'use strict';

function Search() {
  this.username = '';
  this.fullname = '';
  this.avatar = '';
  this.bio = '';
  this.reposArray = [];
  this.starIcon = '<span class="octicon octicon-star"></span>';
  this.forksIcon = '<span class="octicon octicon-repo-forked"></span>';
}

Search.prototype.setUserData = function(user) {
  this.username = '@' + user.login;
  this.fullname = (user.name === null) ? 'no full name' : user.name;
  this.avatar = user.avatar_url;
  this.bio = (user.bio === null) ? user.login + ' has written no bio' : user.bio;
};

Search.prototype.sortReposArray = function(repos) {
  for(var i = 0, j = repos.length; i < j; i++){
    var repoObject = {
      'name' : repos[i].name,
      'starsAndForks' : repos[i].stargazers_count + ' ' + this.starIcon + ' ' + repos[i].forks_count + ' ' + this.forksIcon
    };
    this.reposArray.push(repoObject);
  }
};

Search.prototype.clearReposArray = function() {
  this.reposArray = [];
};

