'use strict';

angular.module('maverickApp')
  .controller('MainCtrl', ['$scope','ScoreService', function ($scope, ScoreService) {
    $scope.score = ScoreService.getScore();

    $scope.total =  $scope.score.reduce(function(previous , current, index, array){
    	return previous + current.marks;
    }, 0);

	$scope.average = $scope.total / $scope.score.length;

	if($scope.average > 64){
		$scope.grade = "Distinction";
	}else if($scope.average < 64 && $scope.average > 50){
		$scope.grade = "First class";
	}else{
		$scope.grade = "Second class";
	}

  }]);
