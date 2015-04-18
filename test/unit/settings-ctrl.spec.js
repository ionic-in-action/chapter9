describe('Settings Controller', function () {
  var scope, locationsService;

  var chicago = {
    city: 'Chicago, IL, USA',
    lat: 41.8781136,
    lng: -87.6297982
  };

  beforeEach(module('App'));

  beforeEach(inject(function ($rootScope, $controller, Locations) {
    scope = $rootScope.$new();
    locationsService = Locations;
    $controller('SettingsCtrl', {
      $scope: scope
    });
  }));

  it('should load with default settings and locations', function () {
    expect(scope.settings.units).toEqual('us');
    expect(scope.locations.length).toEqual(0);
    expect(scope.canDelete).toEqual(false);
  });

  it('should be able to remove a location', function () {
    locationsService.toggle(chicago);

    // Spy on the method and override it.
    spyOn(locationsService, 'toggle').and.callFake(function() {
      scope.locations.splice(0, 1);
    });

    scope.remove(0);
    expect(scope.locations.length).toEqual(0);
  });
})
