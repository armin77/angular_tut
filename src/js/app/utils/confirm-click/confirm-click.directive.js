'use strict';

angular.module('confirmClick')
  .directive('confirmClick', ($rootScope, $location) => {
    return {
      scope: {
        message: '@message',
        post: '=post',
      },
      restrict: 'E',
      template: '<a ng-href="#">{{post.title}}</a>',
      link: function (scope, element, attr) {
        var msg = scope.message || 'Are you sure?';

        element.bind('click', function (e) {
          if (window.confirm(msg)) {

            // make sure to get this executed!
            $rootScope.$apply(function () { 
              $location.path('/blog/' + scope.post.id)
            });
          }
        })
      }
    }
  });