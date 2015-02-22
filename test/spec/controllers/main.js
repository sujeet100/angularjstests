'use strict';

describe('mainController', function() {

  beforeEach(module('maverickApp'));

  var $controller, scope, ScoreServiceMock;
  beforeEach(inject(function(_$controller_, $rootScope) {
    $controller = _$controller_;
    scope = $rootScope;
    ScoreServiceMock = {
      getScore: function() {}
    };
  }));


  describe('score', function() {
    it('calculates total score correctly', function() {
      //given
      spyOn(ScoreServiceMock, 'getScore').and.returnValue([{
        "subject": "Maths",
        marks: 78
      }, {
        "subject": "English",
        marks: 45
      }, {
        "subject": "Physics",
        marks: 35
      }, {
        "subject": "Chemistry",
        marks: 89
      }]);

      //when
      var MainCtrl = $controller('MainCtrl', {
        $scope: scope,
        ScoreService: ScoreServiceMock
      });

      //then
      expect(scope.total).toBe(247);
      expect(scope.average).toBe(61.75);
      expect(scope.grade).toBe("First class");
    });


  });

});