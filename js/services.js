'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1');

  var musicTrackServices = angular.module('musicTrackServices', ['ngResource']);

musicTrackServices.factory('Track', ['$resource',
  function($resource){
    return $resource('musicTracks/:trackId.json', {}, {
      query: {method:'GET', params:{trackId:'musicTracks'}, isArray:true}
    });
  }]);
