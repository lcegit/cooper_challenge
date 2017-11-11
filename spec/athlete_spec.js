describe('Athlete', function() {
  var athlete;
  var cooper;

  describe('Female distances, 15-16', function() {
    beforeEach(function() {
      athlete = new Athlete({ gender: 'female', age: 15 });
    });

    it('compares the data with females chart', function() {
      expect(athlete.gender).toEqual('female');
    });

    it('athlete should be 15 years of age', function() {
      expect(athlete.age).toEqual(15);
    });
});
  describe('CooperTest', function() {
      beforeEach(function() {
        athlete = new Athlete({ gender: 'female', age: 15 });
        cooper = new CooperTest();
      });

    it('15 year old female athlete runs a distance of 2500', function() {
      expect(cooper.assessmentFemales(athlete, 2500)).toEqual('Above average');
    });
});
});
