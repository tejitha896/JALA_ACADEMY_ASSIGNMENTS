var app = angular.module("httpApp", []);

app.controller("httpCtrl", function($scope, $http) {

  $scope.getData = function() {
    $http.get("https://jsonplaceholder.typicode.com/posts/1")
    .then(function(response) {
      $scope.data = response.data.title;
      $scope.status = response.status;
      $scope.config = response.config;
    });
  };

  $scope.postData = function() {
    $http.post("https://jsonplaceholder.typicode.com/posts", {
      title: "AngularJS",
      body: "Test Data"
    })
    .then(function(response) {
      $scope.data = response.data;
      $scope.status = response.status;
      $scope.config = response.config;
    });
  };

});