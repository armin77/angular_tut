'use strict';

angular.module('blogDetail').
  component('blogDetail', {
    templateUrl: 'templates/blog-detail.html',
    controller: function ($scope, $routeParams) {

      console.log($routeParams);

      var blogItems = [
        {title: 'someTitle', id: 1, description: 'this is the first description'},
        {title: 'someOtherTitle', id: 2, description: 'this is the second description'},
        {title: 'randomTitle', id: 3, description: 'this is the third description'},
        {title: '4th-Title', id: 4, description: 'this is the forth description'},
        {title: '5th-Title', id: 5, description: 'this is the fifth description'},
        {title: 'lastTitle', id: 6, description: 'this is the sixth description'},
      ];

      $scope.postFound = false;

      _.each(blogItems, post => {
        if (post.id == $routeParams.id) {
          $scope.postFound = true;
          $scope.post = post;
        }
      });

      if (!$scope.postFound) {
        $scope.post = null;
      }
    }
  });