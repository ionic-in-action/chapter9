describe('Settings Service', function () {
  var service;

  beforeEach(module('App'));

  beforeEach(inject(function (Settings) {
    service = Settings;
  }));

  it('should contain the settings', function () {
    expect(service.units).toEqual('us');
    expect(service.days).toEqual(8);
  });

});
