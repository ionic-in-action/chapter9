describe('Search Controller', function () {
  var scope, httpBackend;

  beforeEach(module('App'));

  beforeEach(inject(function ($rootScope, $controller, $httpBackend) {
    scope = $rootScope.$new();
    httpBackend = $httpBackend;
    httpBackend.when('GET', 'http://maps.googleapis.com/maps/api/geocode/json?address=london').respond({results: [{}, {}, {}]});
    httpBackend.when('GET', 'views/weather/weather.html').respond('');
    httpBackend.when('GET', 'views/settings/settings.html').respond('');
    httpBackend.when('GET', 'views/search/search.html').respond('');
    $controller('SearchCtrl', {
      $scope: scope
    });
  }));

  it('should load with a blank model', function () {
    expect(scope.model.term).toEqual('');
  });

  it('should be able to search for locations', function () {
    scope.model.term = 'london';
    scope.search();
    httpBackend.flush();
    expect(scope.results.length).toEqual(3);
  });
})
