'use strict';

angular.module("maverickApp")
	.service('ScoreService', function(){

		var ScoreService={};

		ScoreService.getScore = function(){
			console.log("actual service");
			return [
			{"subject":"Maths",marks:78},
			{"subject":"English",marks:45},
			{"subject":"Physics",marks:35},
			{"subject":"Chemistry",marks:89}
			];
		}
		return ScoreService;	
	});