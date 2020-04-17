//  Arrays = Tömbök

// arrays are special variables, they can hold multiple variables (even arrays...)
const names = ['John', 'Jane', 'Mark'];
// means the same but looks different. (this also shows that arrays are objects too..)
const years = new Array(1990, 1969, 1948);

// access the third element of the array:
// remember the arrays are indexed from 0
console.log(names[2]);
// change the value of the second item:
names[1] = 'Ben';
console.log(names);


// array holds multiple types:
const john = ['John', 'Smith', 1990, 'designer', false];

// adds another element to the end of the array
john.push('blue');

// unshift adds an element at the beggining:
john.unshift('Mr.');

console.log(john);

// pop removes the last element
john.pop();

// remove the first element from the array
john.shift();

console.log(john);


// add an element to a specific location: 
// startIndex, deleteCount, ...items
john.splice(1, 0,'Dear Mr.');
console.log(john);

// az indexOf megnézi hogy hanyadik elem a tömbben a keresett elem (a bemeneti paraméter)
// ha nincs benne az elem a tömbben akkor az indexOf -1-et fog vissza adni
if (john.indexOf('teacher') === -1) {
  // a john nevű tömbben nincs benne a 'teacher' string
  console.log('John is NOT a teacher.');
}

// Looping trough arrays: tömbön végig lépkedni ciklussal lehet
const szamok = [4, 6, 30, 20, 10];

for (let i = 0; i < szamok.length; i++) {
  // ebben a ciklusban az i, mindig az aktuális elem indexét fogja
  // tárolni
  if (szamok[i] === 30) {
    console.log('TALALTAM 30at: '+szamok[i]);
  } else {
    console.log('ez nem 30: '+szamok[i]);
  }
}

// more ways:
// http://stackoverflow.com/questions/3010840/loop-through-an-array-in-javascript

// https://en.wikipedia.org/wiki/ECMAScript

for (let szam of szamok) { // van of kulcsszón kívül még "in" de az teljesen mas, az objectre jo
  // ebben a ciklusban a szam valtozo mindig a tömb aktuális értékét fogja tárolni
  // nem pedig az index-et:
  if (szam === 30) {
    console.log('TALALTAM 30at: '+szam);
  } else {
    console.log('ez nem 30: '+szam);
  }
}

// remember, array is an object!!! 
console.log(typeof(names));
console.log(names instanceof Array);
