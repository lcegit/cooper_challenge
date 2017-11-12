function CooperTest() {}

var femaleChart = new Array(7);
  for (var i = 0; i< femaleChart.length; i++) {
      femaleChart[i] = new Array(5);
    }
      femaleChart[0][0] = 2000;
      femaleChart[0][1] = 1900;
      femaleChart[0][2] = 1600;
      femaleChart[0][3] = 1500;
      femaleChart[0][4] = 0;

      femaleChart[1][0] = 2100;
      femaleChart[1][1] = 2000;
      femaleChart[1][2] = 1700;
      femaleChart[1][3] = 1600;
      femaleChart[1][4] = 0;

var maleChart = new Array(7);
  for (var i = 0; i< maleChart.length; i++) {
      maleChart[i] = new Array(5);
    }
      maleChart[0][0] = 2700;
      maleChart[0][1] = 2400;
      maleChart[0][2] = 2200;
      maleChart[0][3] = 2100;
      maleChart[0][4] = 0;

      maleChart[1][0] = 2800;
      maleChart[1][1] = 2500;
      maleChart[1][2] = 2300;
      maleChart[1][3] = 2200;
      maleChart[1][4] = 0;

  var ageArr = new Array(7);

      ageArr[0] = 14;
      ageArr[1] = 16;
      ageArr[2] = 19;
      ageArr[3] = 29;
      ageArr[4] = 39;
      ageArr[5] = 49;
      ageArr[6] = 100;

var cooperindex = { 0: "Excellent", 1: "Above average", 2: "Average", 3: "Below average", 4: "Slow" }

CooperTest.prototype.cooperAssessment = function(athlete, distance) {
  var column;
    if (athlete.gender == 'female') {
      for (var i = 0; i < femaleChart.length; i++) {
        if (distance >= femaleChart[this.ageGroup(athlete.age)][i]) {
          column = i; break;
        }
      }
    }
        else if (athlete.gender == 'male') {
          for (var i = 0; i < maleChart.length; i++) {
            if (distance >= maleChart[this.ageGroup(athlete.age)][i]) {
              column = i; break;
            }
          }
        }
    return cooperindex[column];
  }

CooperTest.prototype.ageGroup = function(age) {
  var row;
    for (var i = 0; i < 7; i++) {
      if (age <= ageArr[i]) {
      row = i; break;
      }
    }
    return row;
  }
