'use strict';

describe('Search', function() {

  var search;

  beforeEach(function() {
    search = new Search();
  });

  it('should start with an empty username', function() {
    expect(search.username).toEqual("");
  });

  it('should start with an empty fullname', function() {
    expect(search.fullname).toEqual("");
  });

  it('should start with an empty avatar', function() {
    expect(search.avatar).toEqual("");
  });

  it('should start with an empty bio', function() {
    expect(search.bio).toEqual("");
  });
});