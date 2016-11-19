'use strict';

angular.module('navigation').
  component('navigation', {
    templateUrl: 'templates/navigation.html',
    controller: function (Post, $scope, $routeParams) {

      Post.query((data) => {
        $scope.items = data;
      });

    }
  });