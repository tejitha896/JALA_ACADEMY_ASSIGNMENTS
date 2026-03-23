var app = angular.module("scopeApp", []);

app.run(function($rootScope) {
  $rootScope.rootMsg = "This is $rootScope value";
});

app.controller("firstCtrl", function($scope) {
  $scope.message = "Message from First Controller";
});

app.controller("secondCtrl", function($scope) {
  $scope.message = "Message from Second Controller";
});