
// 2.2 what shows in the console?


//function declaration
function addTwoNumbers(a, b) {
  return a + b;
}

let result = addTwoNumbers(4, 5);
console.log(result);

// function expression
let addThreeNumbers = function(a, b, c) {
  return a + b + c;
}

result = addThreeNumbers(2,4,5);
console.log(result);

// ... > spread operator
// ha function(...nums) > akkor rest operator-nak hivjuk
// infinit number of parameters
let addNumbers = function(...nums) {
 return nums.reduce((a, b) => {return a + b;}) ;
}

console.log(addNumbers(1,4,1,0))
