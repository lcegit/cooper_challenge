describe('Cooper Test', function() {
  var athlete;

  beforeEach(function() {
    athlete = new Athlete();
  });

  xit('should compare result values with normative data table', function() {
    athlete.matchResult(result);
    expect(athlete.matchResult).toEqual(result);
  });
});
