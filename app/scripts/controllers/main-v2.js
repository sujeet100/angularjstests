'use strict';

angular.module('maverickApp')
  .controller('MainCtrlV2', ['$scope','ScoreService', function ($scope, ScoreService) {
    $scope.score = new Score(ScoreService.getScore());
  }]);
