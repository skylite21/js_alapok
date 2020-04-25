
// ... is the spread operator

const winners = ['John', 'Peter', 'Kate'];
const loosers = ['Anna', 'Steve', 'David'];

const names = [winners, loosers];
const people = [...winners, ...loosers];

console.log(names);
console.log(people);
console.log(...people);

// in function(...nums) > called 'rest', (array inside the function)
let sumNumbers = function(...nums) {

  let sum = 0;
  for( let i=0; i < nums.length; i++ ) {
    sum = sum + nums[i];
  }

  return sum;
  // return nums.reduce((a, b) => a + b);
};

console.log(sumNumbers(1,4,1,0));

