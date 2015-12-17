'use strict';

describe('Search', function() {

  var search;

  beforeEach(function() {
    search = new Search();
  });

  describe('At the beginning', function() {

    it('should start with an empty username', function() {
      expect(search.username).toEqual('');
    });

    it('should start with an empty fullname', function() {
      expect(search.fullname).toEqual('');
    });

    it('should start with an empty avatar', function() {
      expect(search.avatar).toEqual('');
    });

    it('should start with an empty bio', function() {
      expect(search.bio).toEqual('');
    });
  });

  describe('After receiving user data', function() {

    beforeEach(function() {
      var dummyUser = {
        'login': 'giusepped',
        'name': 'Giuseppe De Santis',
        'avatar_url': 'https://avatars.githubusercontent.com/u/3399076?v=3',
        'bio': null
      };
      search.setUserData(dummyUser);
    });

    it('should set the username', function() {
      expect(search.username).toEqual('@giusepped');
    });

    it('should set the full name', function() {
      expect(search.fullname).toEqual('Giuseppe De Santis');
    });

    it('should set the avatar', function() {
      expect(search.avatar).toEqual('https://avatars.githubusercontent.com/u/3399076?v=3');
    });

    it('should set the bio', function() {
      expect(search.bio).toEqual('giusepped has written no bio');
    });

  });

  describe('After receiving repos data', function() {

    beforeEach(function() {
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

      search.sortReposArray(dummyRepos);
    });

    it('should format the array of repos data correctly', function() {
      var resultArray = [
        {
          'name' : 'airport_challenge',
          'starsAndForks': '0 <span class="octicon octicon-star"></span> 0 <span class="octicon octicon-repo-forked"></span>'
        },
        {
          'name' : 'angular_github_search',
          'starsAndForks': '0 <span class="octicon octicon-star"></span> 0 <span class="octicon octicon-repo-forked"></span>'

        }
      ];
      expect(search.reposArray).toEqual(resultArray);
    });

    it('should clear the array of repos when clearReposArray is called', function() {
      search.clearReposArray();
      expect(search.reposArray).toEqual([]);
    })

  });


});