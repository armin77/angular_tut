'use strict';

angular.module('blogList').
  component('blogList', {
    templateUrl: 'templates/blog-list.html',
    controller: function ($scope) {
      $scope.sometext = "Just a little text....";

      $scope.clicks = 0;
      $scope.someClickHandler = function () {
        console.log('button Clicked...');
        $scope.clicks++;
        $scope.sometext = 'Button clicked ' + $scope.clicks + ' times!';
      }
    }
  });