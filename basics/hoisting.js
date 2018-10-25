//hoisting
console.log('a palack értéke: '+palack); // ebben a sorban már létezik
// a palack változó, csak még nem kapott értéket, ezért "undefined"
// csak a var kulcsszóval deklarált változókra érvényes a hoisting
var palack = 'szilva';

let szam = 0;
// ez olyan mint ha azt irnám hogy szam = szam + 1
szam++;
szam+=4;
console.log('szam erteke: '+szam);

// console.log("y erteke: "+y); // let is not hoisted, so y doesnt exists here
let y = 10;
console.log("x erteke: "+x); // undefined, because its hoisted !! even in strict mode
var x = 5;

// ha var helyett let-et hasznalunk nem lesz hoisting es igy kevesebb a hibalehetoseg
// kulonben undefined az erteke a valtozonak es nemlesz hiba tovabb fog menni a code
// var: ES5, let: ES6 hozta be

// we can call foo, but we haven't even declared it yet !!
console.log(foo())
function foo() {
  return "foo returns: "+4
}

//we can NOT call bar because function expressions are not hoisted
// console.log(bar())
let bar = function() {
  return 5;
}

