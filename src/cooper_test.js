function CooperTest() {}

CooperTest.prototype.assessmentFemales = function(athlete, distance) {
  if (athlete.gender == "female" && athlete.age == 15 && 16 && distance < 2200) {
    return 'Below average';
  }
  if (athlete.gender == "female" && athlete.age == 15 && 16 && distance > 2200 && distance < 2299) {
    return 'Below average';
  }
  if (athlete.gender == "female" && athlete.age == 15 && 16 && distance > 2300 && distance < 2499) {
    return 'Average';
  }
  if (athlete.gender == "female" && athlete.age == 15 && 16 && distance >= 2500 && distance < 2799) {
    return 'Above average';
  }
  if (athlete.gender == "female" && athlete.age == 15 && 16 && distance > 2800) {
    return 'Excellent';
  }
};

/*
function distanceMessageFemales_13_14(distance){
  //set conditional statement to compare athletes input
  if (athlete.distance < 2100) {
    athlete.distanceMessage = 'Below average';
  }
  if (athlete.distance > 2100 && athlete.distance < 2199) {
    athlete.distanceMessage = 'Below average';
  }
  if (athlete.distance > 2200 && athlete.distance < 2399) {
    athlete.distanceMessage = 'Average';
  }
  if (athlete.distance > 2400 && athlete.distance < 2699) {
    athlete.distanceMessage = 'Above average';
  }
  if (athlete.distance > 2700) {
    athlete.distanceMessage = 'Excellent';
  }
}
*/
