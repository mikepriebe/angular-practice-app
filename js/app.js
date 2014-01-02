'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'musicTrackFilters',
  'musicTrackAnimations',
  'musicTrackServices',
  'myApp.services',
  'myApp.directives',
  'musicTrackControllers',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  	when('/view1', {
  		templateUrl: 'partials/partial1.html',
  		controller: 'MyCtrl1'
  	}).
  	when('/view2', {
  		templateUrl: 'partials/partial2.html',
  		controller: 'MyCtrl2'
  	}).
  	when('/view3', {
  		templateUrl: 'partials/partial3.html',
  		controller: 'MyCtrl3'
  	}).
  	when('/musicTracks', {
  		templateUrl: 'partials/musicTracks.html',
  		controller: 'TrackListCtrl'
  	}).
	otherwise({
		redirectTo: '/view1'
	});
}]);
