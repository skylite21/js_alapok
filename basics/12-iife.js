
// IIFE:  'immediately invoked function expression' 
// egy olyan fügvény ami azonnal meghívódik

// IIFE: immidiately invoked function expression:
// ez egy névtelen fügvény ami egyből meghívódik
// nem kell külön meghívni és nem is lehet
(function() {
  console.log('ez egyből meghívódik');
})();

// http://benalman.com/news/2010/11/immediately-invoked-function-expression/
// closure + IIFE
let szamHozzaadas = (function() {
  let szam1 = 5;
  return function(n) {
    return szam1 + n;
  };

})(); // An 'immediately invoked function expression'
// is an expression that both creates and calls a function.
// az extra zarojel segit a kod olvasásban. If I see (function(){ I assume it's an IIFE
// ha csak function expression-t hasznalsz akkor nincs szukseg az extra zarojelre ami
// korul veszi az egesz functiont, de statement esetén problémát okozhat...

// function(){return 'foo';}()
// is identical to function foo() { return 'foo'; }; foo();
// is identical to var foo = function(){return'foo';}; foo();

console.log('Szám hozzáadás: '+szamHozzaadas(5) );


// Assigning the IIFE to a variable stores the function's return value, not the function definition itself.
const user = (function(){
  const user = 'John';
  console.log(`you are logged in as ${user}`);
  return user;
})();

console.log(user);

