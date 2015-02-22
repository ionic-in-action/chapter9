angular.module('App')
.controller('SearchCtrl', function ($scope, $http) {
  $scope.model = {term: ''};

  $scope.search = function () {
    $http.get('http://maps.googleapis.com/maps/api/geocode/json', {params: {address: $scope.model.term}}).success(function (response) {
      $scope.results = response.results;
    });
  };
});
