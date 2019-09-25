//closure : a koszones valtozo egy fugvenyben van megis
//          a belso fugveny szamara is elerheto az erteke

function pontosIdo() {
  // lokális változó, csak ebben a fugvenyben van értelme
  // variable scope: local
  let ido = 5; 
  console.log('a pontos ido: '+ido);
  // fugveny-re is érvényes a scope, ezt csak a pontosIdo-n 
  // belul tudom hasznalni
  // closure: ha ketto fugveny van egymásban akkor a belső fügvény
  // hozzáfér a külső fügvény változóihoz
  function pontosIdo2() {
    console.log('az ido értéke: '+ido);
  }
  pontosIdo2();
}

// itt hasznaljuk a pontosIdo fugvényt 
pontosIdo();

// pontosIdo2();
// az ido valtozonak itt nincs ertelme, mert a pontosIdo fgv-en belul
// deklaráltuk, 
// console.log('a pontos ido: '+ido);


let koszonjNekem = function (keresztNev) {
  let koszones = 'szia ';
  let osszeRakas = function () {
    return koszones + keresztNev;
  };
  return osszeRakas();
};

console.log(koszonjNekem('John'));

// every function returns something when it finishes
//  A function declaration `function declared() {}` this is hoisted!, you can use this before you declare it
//  A function expression e.g. `var bar = function expressed() {}`
//  which  can be immediately invoked (see IIFE) and can be anonymous
//  (eg can omit the name 'expressed'). 'function' as the first word of a statement at global scope
//  or directly inside a function starts a function declaration; otherwise, it starts a function expression.

//  function aFunc expands to: var aFunc = function() { // function expression

function aFunc () { //ez function statement ez hoisted
  var aa;
  var cc = 5;
  aa='aa';
  // bb = 'asd'; // ha nem irsz ele se var-t se letet akkor global variable lesz
  console.log('kint> '+aa);
  function bFunc() {
    // var aa='aa';
    console.log('aa belul: '+aa);
    console.log(cc); // JavaScript 'closure' means I have access to 'a' in here,
    // because it is defined in the function in which I was defined.
  }
  bFunc(); // bFunc lefut aFunc-ban

}

aFunc();
// bFunc(); // not defined
// console.log('bb global variable: '+bb);


// mukodik e a closure 3 fugvennyel beljebb is?
// latja e a legbelso a kulso valtozokat
