'use strict';

angular.module('blogList').
    controller('BlogListController', function ($scope) {
        console.log('Controller called');
        
        $scope.sometext = "Just a little text....";

        $scope.clicks = 0;
        $scope.someClickHandler = function () {
            console.log('button Clicked...');

            $scope.clicks++;
            $scope.sometext = 'Button clicked ' + $scope.clicks + ' times!';
        }
    });