describe('CooperTest', function() {
  var athlete;
  var cooper;

  beforeEach(function() {
    athlete = new Athlete({ gender: 'female', age: 15 });
    cooper = new CooperTest();
  });

  xit('should compare distance values with normative data table', function() {
    cooper.assessmentFemales(distance);
    expect(cooper.distance).toEqual(2500);
  });
});
