// Module creation
var app = angular.module("myApp", []);

// Controller definition
app.controller("mainCtrl", function($scope) {
    $scope.title = "AngularJS Module Example";
    $scope.message = "Controller is working properly!";
});