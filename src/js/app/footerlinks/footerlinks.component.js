'use strict';

angular.module('footerlinks').
  component('footerlinks', {
    templateUrl: 'templates/footerlinks.html',
    controller: function (Footer, $scope, $routeParams) {

      Footer.query((data) => {
        
        $scope.items = data;
      });

    }
  });