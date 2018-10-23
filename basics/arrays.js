///////////////////////////////////////
// Lecture: Arrays

var names = ['John', 'Jane', 'Mark'];
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

