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

            if ($scope.post.comments === undefined) {
              $scope.post.comments = [];
            }

            resetReply();
          }
        });
      });

      $scope.addReply = function () {
        $scope.post.comments.push($scope.reply);

        resetReply();
      }

      function resetReply() {
        $scope.reply = {
          id: $scope.post.comments.length + 1,
          text: ""
        }
      }

    }
  });