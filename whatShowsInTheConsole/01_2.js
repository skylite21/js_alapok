
// 2.2 what shows in the console?

//function declaration
function addTwoNumbers(a, b) {
  return a + b;
}

// we are calling the function
let result = addTwoNumbers(4, 5);

console.log(result);


// function expression
let addThreeNumbers = function(a, b, c) {
  return a + b + c;
};

result = addThreeNumbers(2,4,5);

console.log(result);

