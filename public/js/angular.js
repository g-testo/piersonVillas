"use strict";
var app = angular.module("app", ['ngRoute'])

app.config(function($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
            templateUrl: "ang-views/home.html"
        }).when('/about', {
            templateUrl: "ang-views/about.html"
        }).otherwise({
            redirectTo: '/'
        })
        
        
     // use the HTML5 History API for removing the # in angular
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }
);
