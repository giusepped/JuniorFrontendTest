$( document ).ready(function() {

  'use strict';

  var search = new Search();

  var ajaxCall = function(username) { $.ajax({
      url: 'https://api.github.com/users/' + username,
      dataType: 'json',
      success: function(userData) {
        search.setUserData(userData);
        $.ajax({
          url: userData.repos_url,
          dataType: 'json',
          success: function(reposData) {
            search.sortReposArray(reposData);
            displayResults();
          }
        });
      }, error: function() {
        displayError();
      }
    });
  };

  $('#searchButton').click(function () {
    clearResults();
    ajaxCall($('#userSearched').val());
  });

   function displayResults() {
    populateUserDiv();
    populateReposTable();
    $('.searchUserResult').show();
  }

  function populateUserDiv() {
    $('#avatar').attr('src', search.avatar);
    $('#username').text(search.username);
    $('#fullname').text(search.fullname);
    $('#bio').text(search.bio);
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
    $('tbody tr').remove();
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