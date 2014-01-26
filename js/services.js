'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1');

  var mountainTrailsServices = angular.module('mountainTrailsServices', ['ngResource']);

mountainTrailsServices.factory('Trail', ['$resource',
  function($resource){
    return $resource('mountainTrails/:trailId.json', {}, {
      query: {method:'GET', params:{trailId:'mountainTrails'}, isArray:true}
    });
  }]);
