function Athlete(attr) {
  this.gender = attr.gender;
  this.age = attr.age;
}

Athlete.prototype.athleteCooperAssessment = function () {
  coopercalc = new CooperTest();
  coopercalc.cooperAssessment(this);

}
