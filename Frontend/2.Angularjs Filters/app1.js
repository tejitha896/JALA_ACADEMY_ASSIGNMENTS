var app = angular.module("filterApp", []);

app.controller("filterCtrl", function($scope) {
  $scope.text = "AngularJS Filters";
  $scope.today = new Date();
  $scope.number = 1234.5678;
});

// Custom filter
app.filter("reverse", function() {
  return function(input) {
    return input.split("").reverse().join("");
  };
});