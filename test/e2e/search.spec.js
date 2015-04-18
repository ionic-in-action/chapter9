describe('Search View', function() {
  browser.get('http://localhost:8100/');
  var term = element(by.model('model.term'));
  var button = element(by.className('button-search'));
  var results = element.all(by.repeater('result in results'));

  it('should open to the search view', function() {
    expect(term.getText()).toBe('');
  });

  it('should search for a term', function () {
    term.sendKeys('london, uk');
    button.click();
    expect(results.count()).toEqual(1);
  });

  it('should take us to the London, UK weather view', function () {
    results.first().click();
    var title = element(by.tagName('ion-side-menu-content')).element(by.className('title'));
    expect(title.getText()).toEqual('London, UK');
  });
});
