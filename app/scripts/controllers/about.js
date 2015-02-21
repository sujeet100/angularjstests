'use strict';

/**
 * @ngdoc function
 * @name maverickApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the maverickApp
 */
angular.module('maverickApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
