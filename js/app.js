var app = angular.module('regular', []);

app.controller('RegularCtr', function($scope) {

  // init
  $scope.results = null;


  // テスト
  $scope.$watch('truth', function(newVal, oldVal) {

    if(newVal) {
      $scope.results = !!$scope.truth.match($scope.test);
    }
  });

});