'use strict';

angular.module('blogList').
  component('blogList', {
    templateUrl: 'templates/blog-list.html',
    controller: function (Post, $scope, $routeParams) {

      Post.query((data) => {
        $scope.items = data;
      });

    }
  });