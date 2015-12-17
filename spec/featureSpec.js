describe('Github search feature tests', function() {

  'use strict';

  beforeEach(function() {
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

  describe('after searching, if the username does not exist', function() {
    beforeEach(function() {
      spyOn($, 'ajax').and.callFake(function(e) {
          e.error({});
      });
      $('#userSearched').val('òòasfkòas');
      $('#searchButton').click();
    });

    it('should have made the ajax call', function() {
      expect($.ajax).toHaveBeenCalled();
    });

    it('should display the error message', function() {
      expect('.errorMessage').toBeVisible();
    });

    it('should still hide the search user result container', function() {
      expect('.searchUserResult').toBeHidden();
    });
  });

  describe('after searching, if the username exists', function() {
    beforeEach(function() {
      var search = new Search();
      var dummyUser = {
        'login': 'giusepped', 'name': 'Giuseppe De Santis',
        'avatar_url': 'https://avatars.githubusercontent.com/u/3399076?v=3',
        'bio': null
      };
      var dummyRepos = [
        {
          'name': 'airport_challenge', 'stargazers_count': 0, 'forks_count': 0
        },
        {
          'name': 'angular_github_search', 'stargazers_count': 0, 'forks_count': 0
        }
      ];

      spyOn($, 'ajax').and.callFake(function(e) {
        search.setUserData(dummyUser);
        search.sortReposArray(dummyRepos);
        e.success({});
      });
      $('#userSearched').val('giusepped');
      $('#searchButton').click();
    });

    it('should have made the ajax call', function() {
      expect($.ajax).toHaveBeenCalled();
    });

    it('should still hide the error message', function() {
      expect('.errorMessage').toBeHidden();
    });

    it('should display the result container', function() {
      expect('.searchUserResult').toBeVisible();
    });
  });

});