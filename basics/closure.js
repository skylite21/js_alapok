//closure : a koszones valtozo egy fugvenyben van megis
//          a belso fugveny szamara is elerheto az erteke

// IIFE:  "immediately invoked function expression" 
//        egy olyan fügvény ami azonnal meghívódik


let koszonjNekem = function (keresztNev) {
  let koszones = 'szia ';
  let osszeRakas = function () {
  return koszones + keresztNev
  };
  return osszeRakas();
};

console.log(koszonjNekem('Zsolti'));

// every function returns something when it finishes
//  A function declaration `function declared() {}` this is hoisted!, you can use this before you declare it
//  A function expression e.g. `var bar = function expressed() {}`
//  which  can be immediately invoked (see IIFE) and can be anonymous
//  (eg can omit the name "expressed"). "function" as the first word of a statement at global scope
//  or directly inside a function starts a function declaration; otherwise, it starts a function expression.

//  function aFunc expands to: var aFunc = function() { // function expression

function aFunc () { //ez function statement ez hoisted
    var aa;
    var cc = 5;
    aa="aa";
    // bb = "asd"; // ha nem irsz ele se var-t se letet akkor global variable lesz
    console.log("kint> "+aa);
  function bFunc() {
    // var aa="aa";
    console.log("aa belul: "+aa);
    console.log(cc); // JavaScript "closure" means I have access to 'a' in here,
                      // because it is defined in the function in which I was defined.
  }
  bFunc(); // bFunc lefut aFunc-ban

}

aFunc();
// bFunc(); // not defined
// console.log("bb global variable: "+bb);



// mukodik e a closure 3 fugvennyel beljebb is?
// latja e a legbelso a kulso valtozokat


// http://benalman.com/news/2010/11/immediately-invoked-function-expression/
// closure + IIFE
let szamHozzaadas = (function() {
    let szam1 = 5;
    return function(n) {
      return szam1 + n;
    };

})(); // An "immediately invoked function expression"
     //  is an expression that both creates and calls a function.
  // az extra zarojel segit a kod olvasásban. If I see (function(){ I assume it's an IIFE
   // ha csak function expression-t hasznalsz akkor nincs szukseg az extra zarojelre ami
   // korul veszi az egesz functiont, de statement esetén problémát okozhat...

    // function(){return 'foo';}()
    // is identical to function foo() { return 'foo'; }; foo();
    // is identical to var foo = function(){return'foo';}; foo();

 console.log("Szám hozzáadás: "+szamHozzaadas(5) );


// Assigning the IIFE to a variable stores the function's return value, not the function definition itself.
const user = (function(){
  const user = 'John';
  console.log(`you are logged in as ${user}`);
  return user;
})();

console.log(user);

