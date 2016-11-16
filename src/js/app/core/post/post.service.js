'use strict';

angular.module('post')
  .factory('Post', function($resource) {
 
    return $resource("/json/posts.json" , {}, {
      query: {
        method: "GET",
        isArray: true,
      },
      get: {
        method: "GET",
        isArray: true,
      }
    });
  });