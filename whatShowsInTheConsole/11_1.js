
// ... is the spread operator

const winners = ['John', 'Peter', 'Kate'];
const loosers = ['Anna', 'Steve', 'David'];

const names = [winners, loosers];
const people = [...winners, ...loosers];

console.log(names);
console.log(people);
console.log(...people);


// in function(...nums) > called 'rest', (array inside the function)
let addNumbers = function(...nums) {
 return nums.reduce((a, b) => {return a + b;}) ;
}

console.log(addNumbers(1,4,1,0))
