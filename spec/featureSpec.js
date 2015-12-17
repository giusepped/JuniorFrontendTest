'use strict';

describe('Github search feature tests', function() {

  beforeEach(function(){
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
    $.holdReady(false);
  });

  describe('before searching', function() {
    it('should hide the error message by default', function() {
      expect('.errorMessage').toBeHidden();
    });

    it('should hide the search result container by default', function() {
      expect('.searchUserResult').toBeHidden();
    });
  });

  describe('after searching', function() {
    it('should display the error message if the username does not exist', function() {
      spyOn($, 'ajax').and.callFake(function(e) {
          e.error({});
      });
      $('#userSearched').val('òòasfkòas');
      $('#searchButton').click();
      expect('.errorMessage').toBeVisible();
    });

    xit('should display the user result container if the username exists', function() {
      var search = new Search();
      var dummyUser = {
        'login': 'giusepped',
        'name': 'Giuseppe De Santis',
        'avatar_url': 'https://avatars.githubusercontent.com/u/3399076?v=3',
        'bio': null
      };
      var dummyRepos = [
        {
          'name': 'airport_challenge',
          'stargazers_count': 0,
          'forks_count': 0
        },
        {
          'name': 'angular_github_search',
          'stargazers_count': 0,
          'forks_count': 0
        }
      ];
      spyOn($, 'ajax').and.callFake(function(url) {
        search.setUserData(dummyUser);
        search.sortReposArray(dummyRepos);
        displayResults();
      });
      $('#userSearched').val('giusepped');
      $('#searchButton').click();
      expect($.ajax).toHaveBeenCalled();
      expect('.searchUserResult').toBeVisible();
    });
  });

});