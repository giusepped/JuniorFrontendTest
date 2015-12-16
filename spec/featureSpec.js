'use strict';

describe('Github search feature tests', function(){

  beforeEach(function(){
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
    $.holdReady(false);
    var search = new Search();
  });

  it('should have the error message hidden by default', function() {
    expect('.errorMessage').toBeHidden();
  });

  it('should have the search result container hidden by default', function() {
    expect('.searchUserResult').toBeHidden();
  });

});