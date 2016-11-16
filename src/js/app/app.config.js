'use strict';

angular.module('try').
  config(function($locationProvider, $routeProvider) {
    console.log('CONFIG called');
    
    $locationProvider.html5Mode({
      enabled: true
    });

    $routeProvider
      .when('/', {
        template: 'Home<blog-list></blog-list>',
      })
      .when('/about', {
        templateUrl: '/templates/about.html',
      })
      .when('/blog/:id', {
        template: '<blog-list></blog-list>',
      })
      // .when('/blog/2', {
      //   template: '<blog-list></blog-list>',
      // })
      .otherwise({
        template: '<h1>Not found</h1>',
      })

  });