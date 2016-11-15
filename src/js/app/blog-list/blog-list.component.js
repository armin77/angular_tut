'use strict';

angular.module('blogList').
    component('blogList', {
        template: `
        <div>
            <h1>{{sometext}}</h1>

            <button ng-click='someClickHandler()'>Click me...</button>
        </div>
        `,
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