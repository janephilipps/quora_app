describe('Quora Example App', function() {

  beforeEach(function() {
    browser.get('http://localhost:8000');
  });

  it('should have a title', function() {
    // var title = element(by.tagName('title'));
    expect(browser.getTitle()).toEqual("Quora App");
  });

});
