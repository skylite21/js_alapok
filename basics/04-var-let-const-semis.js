// uncomment the code you want to try out!!!

// the variable "i" will still be available after the for loop 
// because "var" keyword is not block scoped

// for (var i=0; i<10; i++) {
//   console.log(i);
// }
//
// console.log('after loop', i); // this is actually a bad thing 
// because the variable "i" is often used in for loops and you may 
// run into errors because "i" can mean something else if yo do not 'reset' it...

// you will often see the IFFE solution to prevent variables from scoping..

// (function() {
//   for (var i=0; i<10; i++) {
//     console.log(i);
//   }
//   // // "i" will still work here
//   console.log('after loop', i);
//
// })();
// // but it will not work outside because var is function soped too (es6)
// console.log('after loop', i);


// if you do not declare variables with a keyword, 
// they will be scoped to the global object 
// even if they are in a function: global 
// variables are dangerous in complex code.  

// (function() {
//   for (i=0; i<10; i++) {
//     console.log(i);
//   }
// })();
//   console.log('after loop', i);

// it is a very good practice to use strict mode, as this will prevent
// you from doing these mistakes

// "use strict"
// (function() {
//   for (i=0; i<10; i++) { // <---- This throws an error in strict mode!!
//     console.log(i);
//   }
// })();
//   console.log('after loop', i);



// if you use let the variable will be block scoped and function scoped as well.
// for (let i=0; i<10; i++) {
//   console.log(i);
// }
//
// console.log('after loop', i);



// const is the best sollution if you do not need immutability. 
// minimize mutable state is a universal programming paradigm
// this way i will ALWAYS be 4. This is good to know!!

// const i = 4;
// i = 6; <--- will throw an error

// javascript is asyncronous and it can cause troubles as variables getting
// values in different order. This can result: "Once it works, once it does not"...
// if you use const you can prevent variable reassignments and this is the safest way
// when you do not need immutability.

// const x = {
//   y: '5'
// };
// x.y = '7'; // <-- this will still work though!

// but this wont:
// x = 'asd';

// TL DR: always use const. If you need mutability, use let.







// Why use semicolons:
// whitout the semicolons this will fail as it will try to interpret this as: var i = 23423423(function...

// var i = 23423423       
// (function() {
//   for (i=0; i<10; i++) {
//     console.log(i);
//   }
// })();


// this will return undefined because automatic semicolon insertion will insert a semicolon at return; and 4;
// function getNumber() {
//   return 
//     4
// }

// you can omit semicolons but you have to be aware of where it HAS to be there ( for example (, {, [, ! ... )
// https://github.com/twbs/bootstrap/issues/3057

// also recklessly putting semicolons everywhere will not save you and 
// will not fix your code if its bad code already...



