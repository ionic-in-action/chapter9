// Since we have localstorage that can persist, we want to clear it before tests start.
beforeEach(function() {
  localStorage.removeItem('locations');
});
