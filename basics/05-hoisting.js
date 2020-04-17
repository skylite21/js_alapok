//hoisting is a wierd JS thing...

console.log('a palack értéke: '+palack); // ebben a sorban már létezik
// a palack változó, csak még nem kapott értéket, ezért "undefined" 
// ha nem létezne a változó akkor ReferenceError-al kiakadna a program
// csak a var kulcsszóval deklarált változókra érvényes a hoisting

// itt deklaráljuk a palack változót mégis fegy fentebbi sorban már létezik...
// ha nem létezne ReferenceError-t dobna az interpreter... de nem dob errort... hoisting!
var palack = 'szilva';

// ha a let kulcsszóval hozol létre változót arra nem érvényes a hoisting tehát azt muszáj
// előbb deklarálni és utána használni. a let kulcsszó előnyösebb, szebb lesz tőle a kód. 
// console.log("y erteke: "+y); // let is not hoisted, so y doesnt exists here
let y = 10;
console.log('x erteke: '+x); // undefined, because its hoisted !! even in strict mode
var x = 5;

// ha var helyett let-et hasznalunk nem lesz hoisting es igy kevesebb a hibalehetoseg
// kulonben undefined az erteke a valtozonak es nemlesz hiba tovabb fog menni a kód
// var: ES5, let: ES6 

// fügvényeknél is két féle van. a function declaration-el létrehozott fügvényre érvényes
// a hoisting

// we can call foo, but we haven't even declared it yet !!
console.log(foo());
function foo() {
  return 'foo returns: '+4;
}

// function expression esetén nincs hoisting (de még var-al se lenne...)
//we can NOT call bar because function expressions are not hoisted
// console.log(bar())
let bar = function() {
  return 5;
};
// we can only call bar after we declared it:
console.log(bar());
