$( document ).ready(function() {

  'use strict';

  var search = new Search();

  $('#searchButton').click(function () {
    searchFunction();
  });

  // function searchFunction() {
  //   var searchUrl = 'https://api.github.com/users/' + $('#userSearched').val();
  //   clearResults();
  //   ajaxRequest(searchUrl).then(function(user) {
  //     search.setUserData(user);
  //     displayUserResults();
  //     ajaxRequest(user.repos_url).then(function(repos) {
  //       search.sortReposArray(repos);
  //       populateReposTable();
  //     });
  //   });
  // }

  // function ajaxRequest(url) {
  //   return new Promise(function(resolve) {
  //     var xhr = new XMLHttpRequest();
  //     xhr.onload = function() {
  //       if(xhr.readyState === 4 && xhr.status === 200 ) {
  //         resolve(JSON.parse(this.responseText));
  //       } else {
  //         displayError();
  //       }
  //     };
  //     xhr.open("GET", url);
  //     xhr.send();
  //   });
  // }

  function populateUserDiv() {
    $('#avatar').attr('src', search.avatar);
    $('#username').text(search.username);
    $('#fullname').text(search.fullname);
    $('#bio').text(search.bio);
  }

  function displayUserResults() {
    populateUserDiv();
    $('.searchUserResult').show();
  }

  function populateReposTable() {
    for(var i = 0, j = search.reposArray.length; i < j; i++){
      var repoRow = $('<tr>').append(
            $('<td>').text(search.reposArray[i].name),
            $('<td>').html(search.reposArray[i].starsAndForks).addClass('text-right')
        );
      $('tbody').append(repoRow);
    }
  }

  function clearResults() {
    search.clearReposArray();
    $("tbody tr").remove();
    $('#avatar').attr('src', '');
    hideContainers();
  }

  function hideContainers() {
    $('.searchUserResult').hide();
    $('.errorMessage').hide();
  }

  function displayError() {
    $('.errorMessage').show();
  }

});