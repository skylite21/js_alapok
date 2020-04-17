///////////////////////////////////////
//  Loops : ciklusok

// loops are going to repeat the codeblock until they dont...

//this will repeat the codeblock 10 times..
for (let i = 0; i < 10; i++) {
  // will print 0, 1, 2 ....9
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
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

for (let i = names.length - 1; i >= 0; i--) {
  console.log(names[i]);
}


// while loops
let i = 0;
while(i < names.length) {
  console.log(names[i]);
  i++;
}

// break and continue
for (let i = 1; i <= 5; i++) {
  console.log(i);
    
  if (i === 3) {
    // the loop will break here, no matter what.
    // the loop will not continue!
    break;
  }
}

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    // the loop will continue to the next iteration
    // no matter what!. You wont see, console.log(3) here!!
    continue;
  }
  console.log(i);
}


// array of years where persons where born

// create a function that takes the array and loops trough and calculates if a person is full age or not
// returns an array of booleans

// Example input:  [1965, 2008, 1992]
// Example output: [true, false, true]



function printFullAge(years) {
  const ages = [];
  const fullAges = [];
    
  for (let i = 0; i < years.length; i++) {
    ages[i] = 2016 - years[i];
  }

  for (i = 0; i < ages.length; i++) {
    if (ages[i] >= 18) {
      // console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is of full age.');
      fullAges.push(true);
    } else {
      // console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is NOT of full age.');
      fullAges.push(false);
    }
  }
  // a fgv visszaadja a fullAges változót, és később azt felhasználhatjuk máshol a kódban:
  return fullAges;
}

const years = [2001, 1985, 1994, 2014, 1973];
// meghívjuk a printFullAge fgv-t és
// amit ez a fvg return-öl azt lementjük
// egy full_1 nevű változóba.
const full_1 = printFullAge(years);
console.log(full_1);

// itt is meghívjuk a fgv-t de a bemeneti argumentum
// nem egy változó (years) hanem maga a tömb (ráadásul egy másik)
const full_2 = printFullAge([2012, 1915, 1999]);

console.log(full_2);



