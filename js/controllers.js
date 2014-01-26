'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }])
  .controller('MyCtrl3', [function() {

  }])

  var mountainTrailsControllers = angular.module('mountainTrailsControllers', []);

  mountainTrailsControllers.controller('TrailListCtrl', ['$scope', 'Trail',
   function($scope, Trail) {
   	$scope.mountainTrails = Trail.query();
    $scope.orderProp = 'name';
  }]);

  mountainTrailsControllers.controller('TrailDetailCtrl', ['$scope', '$routeParams', 'Trail',
  function($scope, $routeParams, Trail) {
    $scope.trail = Trail.get({trailId: $routeParams.trailId}, function(trail) {
      $scope.mainImageUrl = trail.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);
