function CooperTest() {}
var distance;

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

      femaleChart[2][0] = 2300;
      femaleChart[2][1] = 2100;
      femaleChart[2][2] = 1800;
      femaleChart[2][3] = 1700;
      femaleChart[2][4] = 0;

      femaleChart[3][0] = 2700;
      femaleChart[3][1] = 2200;
      femaleChart[3][2] = 1800;
      femaleChart[3][3] = 1500;
      femaleChart[3][4] = 0;

      femaleChart[4][0] = 2500;
      femaleChart[4][1] = 2000;
      femaleChart[4][2] = 1700;
      femaleChart[4][3] = 1400;
      femaleChart[4][4] = 0;

      femaleChart[5][0] = 2300;
      femaleChart[5][1] = 1900;
      femaleChart[5][2] = 1500;
      femaleChart[5][3] = 1200;
      femaleChart[5][4] = 0;

      femaleChart[6][0] = 2200;
      femaleChart[6][1] = 1700;
      femaleChart[6][2] = 1400;
      femaleChart[6][3] = 1100;
      femaleChart[6][4] = 0;

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

      maleChart[2][0] = 3000;
      maleChart[2][1] = 2700;
      maleChart[2][2] = 2500;
      maleChart[2][3] = 2300;
      maleChart[2][4] = 0;

      maleChart[3][0] = 2800;
      maleChart[3][1] = 2400;
      maleChart[3][2] = 2200;
      maleChart[3][3] = 1600;
      maleChart[3][4] = 0;

      maleChart[4][0] = 2700;
      maleChart[4][1] = 2200;
      maleChart[4][2] = 1800;
      maleChart[4][3] = 1500;
      maleChart[4][4] = 0;

      maleChart[5][0] = 2500;
      maleChart[5][1] = 2100;
      maleChart[5][2] = 1700;
      maleChart[5][3] = 1400;
      maleChart[5][4] = 0;

      maleChart[6][0] = 2200;
      maleChart[6][1] = 1700;
      maleChart[6][2] = 1400;
      maleChart[6][3] = 1100;
      maleChart[6][4] = 0;

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
    for (var i = 0; i < ageArr.length; i++) {
      if (age <= ageArr[i]) {
      row = i; break;
      }
    }
    return row;
  }
