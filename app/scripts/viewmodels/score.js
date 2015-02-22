function Score(scoreResponse) {
	this.subjectScores = scoreResponse;

	this.total = this.subjectScores.reduce(function(previous, current, index, array) {
		return previous + current.marks;
	}, 0);

	this.average = this.total / this.subjectScores.length;

}

Score.prototype.getGrade = function() {
	if (this.average > 64) {
		this.grade = "Distinction";
	} else if (this.average < 64 && this.average > 50) {
		this.grade = "First class";
	} else {
		this.grade = "Second class";
	}

	return this.grade;
}