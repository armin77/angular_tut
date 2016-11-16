'use strict';

angular.module('blogDetail').
  component('blogDetail', {
    templateUrl: 'templates/blog-detail.html',
    controller: function (Post, $http, $scope, $routeParams, $location) {
      
      $scope.postNotFound = true;

      Post.query((data) => {
        _.each(data, post => {

          if (post.id == $routeParams.id) {
            $scope.postNotFound = false;
            $scope.post = post;
          }
        });
      });


      // if ($scope.postNotFound) {
      //   $scope.post = null;

      //   $location.path('/');
      // }

    }
  });