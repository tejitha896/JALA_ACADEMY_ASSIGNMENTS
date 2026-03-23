var app = angular.module("bindApp", []);

app.controller("bindCtrl", function($scope) {
  $scope.items = ["Apple", "Banana", "Mango"];

  $scope.addItem = function() {
    if ($scope.newItem) {
      $scope.items.push($scope.newItem);
      $scope.newItem = "";
    }
  };
});