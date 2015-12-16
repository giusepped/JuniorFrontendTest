$( document ).ready(function() {

  'use strict';

  var search = new Search(),
      searchResultContainer = $('.searchUserResult')[0],
      errorMessageContainer = $('.errorMessage')[0],
      tableReposBody = $('tbody')[0];

  $('#searchButton').click(function () {
    searchFunction();
  });

  function searchFunction() {
    var searchUrl = 'https://api.github.com/users/' + $('#userSearched').val();
    clearResults();
    ajaxRequest(searchUrl).then(function(user) {
      search.setUserData(user);
      displayUserResults();
      ajaxRequest(user.repos_url).then(function(repos) {
        search.sortReposArray(repos);
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

  function populateUserDiv() {
    $('#avatar').attr('src', search.avatar);
    $('#username').text(search.username);
    $('#fullname').text(search.fullname);
    $('#bio').text(search.bio);
  }

  function displayUserResults() {
    populateUserDiv();
    searchResultContainer.style.display = "block";
  }

  function populateReposTable() {
    var fragment = document.createDocumentFragment();
    createReposTable(fragment);
    tableReposBody.appendChild(fragment);
  }

  function createReposTable(fragment) {
    for(var i = 0, j = search.reposArray.length; i < j; i++){
      var tr = document.createElement("tr"),
          tdName = document.createElement("td"),
          tdStarsForks = document.createElement("td");
      tdName.innerHTML = search.reposArray[i].name;
      tdStarsForks.innerHTML = search.reposArray[i].starsAndForks;
      tdStarsForks.className += " text-right";
      tr.appendChild(tdName);
      tr.appendChild(tdStarsForks);
      fragment.appendChild(tr);
    }
  }

  function clearResults() {
    $("tbody tr").remove();
    $('#avatar').attr('src', '');
    hideContainers();
  }

  // function clearReposTable() {
  //   while(tableReposBody.firstChild) {
  //     tableReposBody.removeChild(tableReposBody.firstChild);
  //   }
  // }

  function hideContainers() {
    searchResultContainer.style.display = "none";
    errorMessageContainer.style.display = "none";
  }

  function displayError() {
    errorMessageContainer.style.display = "block";
  }

});