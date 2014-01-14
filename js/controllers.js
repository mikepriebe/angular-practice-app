'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }])
  .controller('MyCtrl3', [function() {

  }])

  var musicTrackControllers = angular.module('musicTrackControllers', []);

  musicTrackControllers.controller('TrackListCtrl', ['$scope', 'Track',
   function($scope, Track) {
   	$scope.musicTracks = Track.query();
    $scope.orderProp = 'age';
  }]);
