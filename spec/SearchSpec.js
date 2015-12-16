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

  describe('After searching', function() {

    beforeEach(function() {
      var dummyUser = {
        login : 'giusepped',
        name : 'Giuseppe De Santis',
        avatar_url : 'https://avatars.githubusercontent.com/u/3399076?v=3',
        bio : null
      };
      search.setUserData(dummyUser);
    });

    it('should be able to set the username', function() {
      expect(search.username).toEqual('@giusepped');
    });

    it('should be able to set the full name', function() {
      expect(search.fullname).toEqual('Giuseppe De Santis');
    });

    it('should be able to set the avatar', function() {
      expect(search.avatar).toEqual("https://avatars.githubusercontent.com/u/3399076?v=3");
    });

    it('should be able to set the bio', function() {
      expect(search.bio).toEqual('giusepped has written no bio');
    });

  });


});