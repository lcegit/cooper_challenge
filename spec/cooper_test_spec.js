describe('CooperTest', function() {
  var athlete;
  var cooper;

  beforeEach(function() {
    athlete = new Athlete({ gender: 'female', age: 15 });
    cooper = new CooperTest();
  });

  it('should compare distance values with normative data table', function() {
    expect(cooper.cooperAssessment(athlete, 2000)).toEqual('Above average');
  });
});
