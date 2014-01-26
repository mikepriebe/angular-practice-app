'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'mountainTrailsFilters',
  'mountainTrailsAnimations',
  'mountainTrailsServices',
  'myApp.services',
  'myApp.directives',
  'mountainTrailsControllers',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  	when('/view1', {
  		templateUrl: 'partials/partial1.html',
  		controller: 'TrailListCtrl'
  	}).
    when('/mountainTrails/:trailId', {
        templateUrl: 'partials/partial2.html',
        controller: 'TrailDetailCtrl'
      }).
  	when('/view3', {
  		templateUrl: 'partials/partial3.html',
  		controller: 'MyCtrl3'
  	}).
    when('/mapOfMountains', {
      templateUrl: 'mapOfMountains.html',
      controller: 'MyCtrl1'
    }).
	otherwise({
		redirectTo: '/view1'
	});
}]);
