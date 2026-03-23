var app = angular.module("serviceApp", []);

app.service("myService", function() {
  this.getMessage = function() {
    return "Hello from Custom Service!";
  };
});

app.controller("serviceCtrl", function($scope, $location, $timeout, $http, myService) {

  $scope.url = $location.absUrl();
  $scope.message = myService.getMessage();

  $timeout(function() {
    $scope.message = "Message updated after 2 seconds";
  }, 2000);

  $scope.loadData = function() {
    $http.get("https://jsonplaceholder.typicode.com/posts/1")
      .then(function(response) {
        $scope.data = response.data.title;
      });
  };
});