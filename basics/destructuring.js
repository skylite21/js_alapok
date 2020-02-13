// array destructuring:
const [ one, two ] = [ 1, 2 ];
console.log(one); // 1
console.log(two); // 2


const [ two, one ] = [ 1, 2 ];
console.log(two); // 1
console.log(one); // 2


// A sample object
const myObject = { x: 1, y: 2 };

// Destructuring
const { x, y } = myObject;
// x is 1, y is 2


function myFunction(config) {

}

// Usage
myFunction({
    text: "Some value",
    line: 0,
    truncate: 100
})

// with object destructuring in function arguments:
function myFunction({ text, line, truncate }) {

}


// https://simonsmith.io/destructuring-objects-as-function-parameters-in-es6

// https://2ality.com/2015/01/es6-destructuring.html

// https://stackoverflow.com/questions/49075043/destructure-object-parameter-but-also-have-reference-to-the-parameter-as-an-obj
