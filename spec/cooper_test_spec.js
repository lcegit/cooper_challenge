describe('CooperTest', function() {
  var athlete;
  var cooper;

  beforeEach(function() {
    athlete = new Athlete({ gender: 'female', age: 15 });
    cooper = new CooperTest();
  });

  it('should compare distance values with normative data table', function() {
    expect(cooper.assessmentFemales(athlete, 2500)).toEqual('Above average');
  });
});
