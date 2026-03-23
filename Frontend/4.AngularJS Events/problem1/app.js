// AngularJS Application Module
var app = angular.module('eventApp', []);

// Service to fetch data from MySQL database via PHP API
app.service('EventService', function($http) {
    this.getEvents = function() {
        return $http.get('api.php');
    };
    
    this.addEvent = function(event) {
        return $http.post('api.php', event);
    };
});

// Main Controller
app.controller('EventController', function($scope, EventService) {
    // Initialize variables
    $scope.events = [];
    $scope.newEvent = {};
    $scope.loading = true;
    $scope.errorMessage = '';
    
    // Fetch events from database on page load
    function loadEvents() {
        $scope.loading = true;
        $scope.errorMessage = '';
        
        EventService.getEvents().then(
            function(response) {
                // Success callback
                $scope.events = response.data;
                $scope.loading = false;
            },
            function(error) {
                // Error callback
                $scope.errorMessage = 'Error loading events: ' + error.statusText;
                $scope.loading = false;
                console.error('Error fetching events:', error);
            }
        );
    }
    
    // Load events when controller initializes
    loadEvents();
    
    // Add new event function
    $scope.addNewEvent = function() {
        // Validate input
        if (!$scope.newEvent.name || !$scope.newEvent.date) {
            alert('Please fill in all required fields');
            return;
        }
        
        EventService.addEvent($scope.newEvent).then(
            function(response) {
                // Success callback
                alert('Event added successfully');
                $scope.newEvent = {}; // Clear form
                loadEvents(); // Reload events list
            },
            function(error) {
                alert('Error adding event: ' + error.statusText);
                console.error('Error adding event:', error);
            }
        );
    };
    
    // Refresh events list
    $scope.refreshEvents = function() {
        loadEvents();
    };
});
