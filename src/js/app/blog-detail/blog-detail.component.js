'use strict';

angular.module('blogDetail').
  component('blogDetail', {
    templateUrl: 'templates/blog-detail.html',
    controller: function ($scope, $routeParams) {

      $scope.title = "Blog " + $routeParams.id;
    }
  });