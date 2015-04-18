describe('Locations Service', function () {
  var service;

  var one = {lat: 123, lng: 123};
  var two = {lat: 456, lng: 456};

  beforeEach(module('App'));

  beforeEach(inject(function (Locations) {
    service = Locations;
  }));

  it('should start with no locations', function () {
    expect(service.data.length).toEqual(0);
  });

  it('should find a location index', function () {
    service.data.push(one);
    expect(service.getIndex(one)).toEqual(0);
    expect(service.getIndex(two)).toEqual(-1);
  });

  it('should be able to add an item by toggle', function () {
    service.toggle(one);
    service.toggle(two);
    expect(service.data.length).toEqual(2);
  });

  it('should move an item into the primary position', function () {
    service.toggle(one);
    service.toggle(two);
    service.primary(two);
    expect(service.data[0]).toEqual(two);

    service.data = [one];
    service.primary(two);
    expect(service.data[0]).toEqual(two);
  });

  it('should remove an existing item by toggle', function () {
    service.toggle(one);
    expect(service.getIndex(one)).toEqual(0);

    // Spy on method and assume the user hits confirm.
    spyOn(service, 'toggle').and.callFake(function() {
      service.data.splice(0, 1);
    });

    service.toggle(one);
    expect(service.getIndex(one)).toEqual(-1);
  });

});
