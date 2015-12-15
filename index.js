"use strict";

var searchResultContainer = document.getElementsByClassName("searchUserResult")[0],
    errorMessageContainer = document.getElementsByClassName("errorMessage")[0],
    searchButton = document.getElementById("searchButton"),
    userSearched = document.getElementById("userSearched"),
    avatar = document.getElementById("avatar"),
    username = document.getElementById("username"),
    fullname = document.getElementById("fullname"),
    userBio = document.getElementById("bio"),
    tableReposBody = document.getElementsByTagName("tbody")[0];

searchButton.addEventListener("click", function () {
  searchFunction();
});

document.addEventListener("keydown", function (e) {
  if(e.keyCode === 13){
    searchFunction();
  }
});

function searchFunction() {
  var searchUrl = "https://api.github.com/users/" + userSearched.value;
  ajaxRequest(searchUrl).then(function(user) {
    displayUserResults(user);
    ajaxRequest(user.repos_url).then(function(repos) {
      populateReposTable(repos);
    });
  });
}

function ajaxRequest(url) {
  return new Promise(function(resolve) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      if(xhr.readyState === 4 && xhr.status === 200 ) {
        resolve(JSON.parse(this.responseText));
      } else {
        displayError();
      }
    };
    xhr.open("GET", url);
    xhr.send();
  });
}

function populateUserDiv(user) {
  avatar.src = user.avatar_url;
  username.innerHTML = "@" + user.login;
  fullname.innerHTML = user.name;
  userBio.innerHTML = (user.bio === null) ? user.login + " has written no bio" : user.bio;
}

function displayUserResults(user) {
  populateUserDiv(user);
  searchResultContainer.style.display = "block";
}

function populateReposTable(repos) {
  var fragment = document.createDocumentFragment();
  createReposTable(repos, fragment);
  tableReposBody.appendChild(fragment);
}

function createReposTable(repos, fragment) {
  for(var i = 0, j = repos.length; i < j; i++){
    var tr = document.createElement('tr'),
        tdName = document.createElement('td'),
        tdStarsForks = document.createElement('td');
    tdName.innerHTML = repos[i].name;
    tdStarsForks.innerHTML = starsAndForks(repos[i].stargazers_count, repos[i].forks_count);
    tdStarsForks.className += " text-right";
    tr.appendChild(tdName);
    tr.appendChild(tdStarsForks);
    fragment.appendChild(tr);
  }
}

function starsAndForks(stars, forks){
  var starIcon = "<span class='octicon octicon-star'></span>",
      forkIcon = "<span class='octicon octicon-repo-forked'></span>",
      text = starIcon + " " + stars + " " + forkIcon + " " + forks;
  return text;
}

function displayError() {
  errorMessageContainer.style.display = "block";
}