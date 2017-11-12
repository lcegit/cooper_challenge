## Cooper Test Challenge ##

> "The Cooper Test is used to monitor the development of a person's aerobic endurance and to obtain an estimate of their VO2 max. The challenge is to build a JavaScript-based solution that will make it possible make the calculation, based on a person's performance in order to get an assessment of their aerobic endurance, in accordance to the Cooper Normative Data Table."

*The challenge is to set up a JavaScript program that returns assessment given the user's gender, age and completed distance. The solution uses Jasmine unit testing.*

# How to use #


Call for a new instance of the athlete/user to assess:
```
athlete = new Athlete({ gender: 'female', age: 15 });
```

Call for a new test:
```
cooper = new CooperTest();

```
Input distance:
```
cooper.cooperAssessment(athlete, 2356) << input value in meters
```

# My solution #


I constructed 2d arrays to set up the chart data using a for loop and then access the value in the indexes using loop functions.

The setup is inspired by [diraulo's version](https://github.com/CraftAcademy/cooper-js) where 2d arrays are used.
