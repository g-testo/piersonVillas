"use strict";
var app = angular.module("app", ['ngRoute'])

app.config(function($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
            templateUrl: "ang-views/home.html",
            controller  : 'homeController'
        }).when('/about', {
            templateUrl: "ang-views/about.html",
            controller  : 'aboutController'
        }).when('/available', {
            templateUrl: "ang-views/available.html",
            controller  : 'availableController'
        }).when('/contact', {
            templateUrl: "ang-views/contact.html",
            controller  : 'contactController'
        }).when('/calender', {
            templateUrl: "ang-views/calender.html",
            controller  : 'calenderController'
        }).when('/1bed1bath', {
            templateUrl: "ang-views/1bed1bath.html",
            controller  : '1bed1bathController'
        }).when('/2bed1bath', {
            templateUrl: "ang-views/2bed1bath.html",
            controller  : '2bed1bathController'
        }).otherwise({
            redirectTo: '/'
        });
        
        
     // use the HTML5 History API for removing the # in angular
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }
);

// create the controller and inject Angular's $scope

    app.controller('homeController', function($scope) {
        $scope.title = 'Pierson Villas Apartments';
    });
    app.controller('aboutController', function($scope) {
        $scope.title = 'About Page';
    });
    app.controller('availableController', function($scope) {
        $scope.title = 'Availability Page';
    });
    app.controller('1bed1bathController', function($scope) {
        $scope.title = '1 Bedroom & 1 Bathroom';
    });
    app.controller('2bed1bathController', function($scope) {
        $scope.title = '1 Bedroom & 2 Bathroom';
    });
    app.controller('contactController', function($scope, $http) {
        $scope.submit = function(){
           var data = {
               name: $scope.name,
               email: $scope.email,
               mobile:$scope.mobile,
               subject:$scope.subject,
               message:$scope.message
           };
        $http.post('/contact/', data).success(function(response) {
            console.log("Success");
        }, function(response) {
            console.log("Contact form posting failed");
        });
       };
    });