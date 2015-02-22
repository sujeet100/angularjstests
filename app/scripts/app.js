'use strict';

/**
 * @ngdoc overview
 * @name maverickApp
 * @description
 * # maverickApp
 *
 * Main module of the application.
 */
angular
  .module('maverickApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/v2', {
        templateUrl: 'views/main-v2.html',
        controller: 'MainCtrlV2'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
