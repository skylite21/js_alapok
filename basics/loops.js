///////////////////////////////////////
// Lecture: Loops


for (var i = 0; i < 10; i++) {
  console.log(i);
}


/*
0, true, print 0, update i to 1
1, true, print 1, update i to 2
.
.
.
9, true, print 9, update i to 10
10, FALSE, end loop!
*/


var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

// for loops
for (var i = 0; i < names.length; i++) {
  console.log(names[i]);
}

for (var i = names.length - 1; i >= 0; i--) {
  console.log(names[i]);
}


// while loops
var i = 0;
while(i < names.length) {
  console.log(names[i]);
  i++;
}

// break and continue
for (var i = 1; i <= 5; i++) {
  console.log(i);
    
  if (i === 3) {
    break;
  }
}

for (var i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
    
  console.log(i);
}


// array of years where persons where born

// create a function that takes the array and loops trough and calculates if a person is full age or not
// returns an array of booleans

// Example input:  [1965, 2008, 1992]
// Example output: [true, false, true



function printFullAge(years) {
  var ages = [];
  var fullAges = [];
    
  for (var i = 0; i < years.length; i++) {
    ages[i] = 2016 - years[i];
  }

  for (i = 0; i < ages.length; i++) {
    if (ages[i] >= 18) {
      console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is of full age.');
      fullAges.push(true);
    } else {
      console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is NOT of full age.');
      fullAges.push(false);
    }
  }
    
  return fullAges;
}

var years = [2001, 1985, 1994, 2014, 1973];
var full_1 = printFullAge(years);
var full_2 = printFullAge([2012, 1915, 1999]);



