'use strict';

angular.module('footer')
  .factory('Footer', function($resource) {
 
    return $resource("/json/footer.json" , {}, {
      query: {
        method: "GET",
        cache: true,
      },
      get: {
        method: "GET",
        isArray: true,
      }
    });
  });