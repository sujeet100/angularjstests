'use strict';

describe('score', function() {

  beforeEach(module('maverickApp'));

  describe('score', function() {
    it('calculates total score correctly', function() {
      //given
      var response = [{
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
      }];

      //when
      var score = new Score(response);
      //then
      expect(score.total).toBe(247);
      expect(score.average).toBe(61.75);
      expect(score.getGrade()).toBe("First class");
    });

  it('sets grade correctly', function() {
      //given
      var response = [{
        "subject": "Maths",
        marks: 78
      }, {
        "subject": "English",
        marks: 66
      }, {
        "subject": "Physics",
        marks: 35
      }, {
        "subject": "Chemistry",
        marks: 89
      }];

      //when
      var score = new Score(response);
      //then
      expect(score.total).toBe(268);
      expect(score.average).toBe(67);
      expect(score.getGrade()).toBe("Distinction");
    });

  });

});