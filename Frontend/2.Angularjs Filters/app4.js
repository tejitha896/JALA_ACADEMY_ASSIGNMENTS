var app = angular.module("apiApp", []);

app.controller("apiCtrl", function($scope) {

    $scope.text = "AngularJS API Example";

    $scope.upperText = angular.uppercase($scope.text);
    $scope.lowerText = angular.lowercase($scope.text);

});