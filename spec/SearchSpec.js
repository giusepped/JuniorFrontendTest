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
    it('should be able to set the username', function() {
      search.setUsername('giusepped');
      expect(search.username).toEqual('giusepped');
    });

    it('should be able to set the full name', function() {
      search.setFullname('Giuseppe De Santis');
      expect(search.fullname).toEqual('Giuseppe De Santis');
    });

    it('should be able to set the avatar', function() {
      search.setAvatar("https://avatars.githubusercontent.com/u/3399076?v=3");
      expect(search.avatar).toEqual("https://avatars.githubusercontent.com/u/3399076?v=3");
    });

    it('should be able to set the bio', function() {
      search.setUsername('giusepped');
      search.setBio(null);
      expect(search.bio).toEqual('giusepped has written no bio');
    });

  });


});