$( document ).ready(function() {

  'use strict';

  var searchResultContainer = $(".searchUserResult")[0],
      errorMessageContainer = $(".errorMessage")[0],
      username = $("#username"),
      fullname = $("#fullname"),
      userBio = $("#bio"),
      tableReposBody = $("tbody")[0];

  $("#searchButton").click(function () {
    searchFunction();
  });

  function searchFunction() {
    var searchUrl = "https://api.github.com/users/" + $("#userSearched").val();
    clearSearch();
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
    $('#avatar').attr('src', user.avatar_url);
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
      var tr = document.createElement("tr"),
          tdName = document.createElement("td"),
          tdStarsForks = document.createElement("td");
      tdName.innerHTML = repos[i].name;
      tdStarsForks.innerHTML = starsAndForks(repos[i].stargazers_count, repos[i].forks_count);
      tdStarsForks.className += " text-right";
      tr.appendChild(tdName);
      tr.appendChild(tdStarsForks);
      fragment.appendChild(tr);
    }
  }

  function starsAndForks(stars, forks){
    var starIcon = '<span class="octicon octicon-star"></span>',
        forkIcon = '<span class="octicon octicon-repo-forked"></span>',
        text = starIcon + " " + stars + " " + forkIcon + " " + forks;
    return text;
  }

  function clearSearch() {
    clearReposTable();
    $('#avatar').attr('src', '');
    userSearched.value = "";
    userSearched.focus();
    hideContainers();
  }

  function hideContainers() {
    searchResultContainer.style.display = "none";
    errorMessageContainer.style.display = "none";
  }

  function clearReposTable() {
    while(tableReposBody.firstChild) {
      tableReposBody.removeChild(tableReposBody.firstChild);
    }
  }

  function displayError() {
    errorMessageContainer.style.display = "block";
  }

});