///////////////////////////////////////
// Lecture: Arrays

// arrays are special variables, they can hold multiple variables (even arrays...)
var names = ['John', 'Jane', 'Mark'];
// means the same but looks different. (this also showes that arrays are objects too..)
var years = new Array(1990, 1969, 1948);


console.log(names[2]);
names[1] = 'Ben';
console.log(names);


var john = ['John', 'Smith', 1990, 'designer', false];

// adds another element to the end of the array
john.push('blue');

// unshift adds an element at the beggining:
john.unshift('Mr.');

// pop removes the last element
john.pop();

// remove the first element from the array
john.shift();
console.log(john);


//az indexOf megnézi hogy hanyadik elem a tömbben amit átadunk neki
// ha nincs benne az elem a tömbben akkor az indexOf -1-et fog vissza adni
if (john.indexOf('teacher') === -1) {
  console.log('John is NOT a teacher.');
}

// Looping trough arrays:

for (let i = 0; i < szamok.length; i++) {
    if (szamok[i] === 30) {
      console.log("TALALTAM 30at: "+szamok[i]);
    } else {
      console.log(szamok[i]);
    }
}

// more ways:
// http://stackoverflow.com/questions/3010840/loop-through-an-array-in-javascript

// https://en.wikipedia.org/wiki/ECMAScript

// REQUIRES ECMASCRIPT 2015+     .forEach is safe too
for (let i of szamok) { // van of kulcsszón kívül még "in" de az teljesen mas, az objectre jo
    if (i === 30) {
      console.log("TALALTAM 30at: "+i);
    } else {
      console.log(i);
    }
}
