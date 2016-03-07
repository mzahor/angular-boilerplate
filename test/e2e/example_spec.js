/*global browser, by */

'use strict';

describe('E2E: Example', function() {

  beforeEach(function() {
    browser.get('/');
    browser.waitForAngular();
  });


  it('should show movies', function() {
    var element = browser.findElement(by.css('.movie-component'));
    expect(element.getText()).toEqual('Superman');
  });

});
