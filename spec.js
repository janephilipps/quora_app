describe('Quora Example App', function() {

  beforeEach(function() {
    browser.get('http://localhost:8000');
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual("Quora App");
  });

  it('should display questions', function() {
    var questions = element.all(by.repeater('q in questions'));
    expect(questions.count()).toEqual(3);
  })

});
