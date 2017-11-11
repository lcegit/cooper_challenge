function Person(attr) {
  this.gender = attr.gender;
  this.age = attr.age;
}

Athlete.prototype.cooperUnitTest_females = function() {
  unitConverter = new CooperUnitTest();
  unitConverter.units_female; //call variable and run units_female on the object itself / "self"
};
