describe('Athlete', function() {
  var athlete;

  describe('Female results', function() {
    beforeEach(function() {
      athlete = new Athleten({ gender: 'f', age: 15 });
    });

    it('compares the data with females chart', function() {
      expect(athlete.gender).toEqual('f');
    });

    it('athlete should be 15 years of age', function() {
      expect(athlete.age).toEqual(15);
    });

    it('athlete has a result of 2500', function() {
      expect(athlete.resultValue).toEqual(2500);
    });

    it('athlete has a result of 2500', function() {
      expect(athlete.resultMessage).toEqual('Above average');
    });
  });
});
