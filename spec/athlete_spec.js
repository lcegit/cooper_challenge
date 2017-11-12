describe('Athlete', function() {
  var athlete;
  var cooper;

  describe('CooperTest', function() {
      beforeEach(function() {
        athlete = new Athlete({ gender: 'female', age: 15 });
        cooper = new CooperTest();
      });

    it('15 year old female athlete runs a distance of 2000', function() {
      expect(cooper.cooperAssessment(athlete, 1900)).toEqual('Average');
    });
});

  describe('CooperTest', function() {
      beforeEach(function() {
        athlete = new Athlete({ gender: 'male', age: 13 });
        cooper = new CooperTest();
      });

    it('13 year old male athlete runs a distance of 2000', function() {
      expect(cooper.cooperAssessment(athlete, 2400)).toEqual('Above average');
    });
  });
});
