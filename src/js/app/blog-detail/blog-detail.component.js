'use strict';

angular.module('blogDetail').
  component('blogDetail', {
    templateUrl: 'templates/blog-detail.html',
    controller: function ($http, $scope, $routeParams, $location) {
      
      $scope.postNotFound = true;


      $http.get("/json/posts.json").then(successCallback, errorCallback);

      function successCallback(response, status, config, statusText) {
        _.each(response.data, post => {

          if (post.id == $routeParams.id) {
            $scope.postNotFound = false;
            $scope.post = post;
          }
        });
      }

      function errorCallback(response, status, config, statusText) {
        console.log(response);
      }



      // if ($scope.postNotFound) {
      //   $scope.post = null;

      //   $location.path('/');
      // }

      // var blogItems = [
      //   {title: 'someTitle', id: 1, description: 'this is the first description'},
      //   {title: 'someOtherTitle', id: 2, description: 'this is the second description'},
      //   {title: 'randomTitle', id: 3, description: 'this is the third description'},
      //   {title: '4th-Title', id: 4, description: 'this is the forth description'},
      //   {title: '5th-Title', id: 5, description: 'this is the fifth description'},
      //   {title: 'lastTitle', id: 6, description: 'this is the sixth description'},
      // ];



    }
  });