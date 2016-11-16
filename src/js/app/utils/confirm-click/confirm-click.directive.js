(function(){
    'use strict';

    angular.module('confirmClick')
      .directive('confirmClick', () => {
        return {
          link: function (scope, element, attr) {
            console.log(scope);
            console.log(element);
            console.log(attr);
          }
        }
      });

}());