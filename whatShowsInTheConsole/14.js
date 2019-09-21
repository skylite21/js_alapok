
// 14 what shows in the console?

// javascript: non blocking programming language

setTimeout( function(){ console.log('hello'); }, 2000 );
console.log('world');

let data = 1;
function calculateData() {
  data = 10;
}

setTimeout(calculateData, 2000);
console.log(data);

