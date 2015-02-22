describe('Timezone Filter', function() {

  beforeEach(module('App'));

  it('should convert timestamp and timezone into local time', inject(function(timezoneFilter) {
    expect(timezoneFilter(1424004482, 'America/Chicago')).toContain('6:48 AM');
    expect(timezoneFilter(1424042649, 'America/Chicago')).toContain('5:24 PM');
  }));
});
