'use strict';

angular.module('blogList').
    controller('BlogListController', function ($scope) {
        console.log('Controller called');
        
        $scope.sometext = "Just a little text....";
    });