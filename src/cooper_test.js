function CooperTest() {}
/*
var age = { age: 13 && 14,
            age: 15 && 16,
            age: 17 && > 19,
            age: 20 && age > 29,
            age: 30 && age > 39,
            age: 40 && age > 49,
            age: age > 50 }
*/
var age_13 = { age: 13 && 14 };
var age_15 = { age: 15 && 16 };
var age_17 = { age: 17 && age_17 > 19 };
var age_20 = { age: 20 && age_20 > 29 };
var age_30 = { age: 30 && age_30 > 39 };
var age_40 = { age: 40 && age_40 > 49 };
var age_50 = { age: age_50 > 50 };

var female = { gender: "female" }
var male = { gender: "male" }

var cooperindex = { 0: "Excellent", 1: "Above average", 2: "Average", 3: "Below average", 4: "Slow" }

CooperTest.prototype.assessmentFemales = function(athlete, distance) {
if (female) {
  if (age_13) {
    if (distance < 2100) {
      return cooperindex[4];
    }
    else if (distance < 2199) {
      return cooperindex[3];
    }
    else if (distance > 2200 && distance < 2399) {
      return cooperindex[2];
    }
    else if (distance >= 2400 && distance < 2699) {
      return cooperindex[1];
    }
    else if (distance > 2700) {
      return cooperindex[0];
    }
  }
}
  if (age_15) {
    if (distance < 2200) {
      return cooperindex[4];
    }
    else if (distance > 2200 && distance < 2299) {
      return cooperindex[3];
    }
    else if (distance > 2300 && distance < 2499) {
      return cooperindex[2];
    }
    else if (distance >= 2500 && distance < 2799) {
      return cooperindex[1];
    }
    else if (distance > 2800) {
      return cooperindex[0];
    }
  }

if (age_17) {
  if (distance < 2300) {
    return cooperindex[4];
  }
  else if (distance > 2300 && distance < 2299) {
    return cooperindex[3];
  }
  else if (distance > 2500 && distance < 2699) {
    return cooperindex[2];
  }
  else if (distance >= 2700 && distance < 2999) {
    return cooperindex[1];
  }
  else if (distance > 3000) {
    return cooperindex[0];
  }
}
}

    /*
    if (athlete.age == 20 && 29 && distance < 1600) { return 'Slow'; }
    if (athlete.age == 20 && 29 && distance > 1600 && distance < 2199) { return 'Below average'; }
    if (athlete.age == 20 && 29 && distance > 2200 && distance < 2399) { return 'Average'; }
    if (athlete.age == 20 && 29 && distance >= 2400 && distance < 2799) { return 'Above average'; }
    if (athlete.age == 20 && 29 && distance > 2800) { return 'Excellent' }
    */
