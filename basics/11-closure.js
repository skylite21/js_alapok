
// ---------------------- closure  
// warning: a closure az egyik legnehezebben megérthető dolog
// a js-ben, ha ez kevés, olvass utána!! (ez mondjuk a többi dologra is igaz...)


// a koszones valtozo egy fugvenyben van megis
// a belso fugveny szamara is elerheto az erteke

function pontosIdo() {
  // lokális változó, csak ebben a fugvenyben van értelme
  // variable scope: local
  let ido = 5; 
  console.log('a pontos ido: '+ido);
  // fugveny-re is érvényes a scope, ezt csak a pontosIdo-n 
  // belul tudom hasznalni
  // closure: ha ketto fugveny van egymásban akkor a belső fügvény
  // hozzáfér a külső fügvény változóihoz
  function pontosIdoMulik(ido) {
    ido = ido++;
    console.log('az ido értéke: '+ido);
  }
  pontosIdoMulik();
}

// itt hasznaljuk a pontosIdo fugvényt 
pontosIdo();

// ez a fugvény itt nem elérhető mert belül hoztuk létre
// egy fügvény belseje az egy másik scope, az kívül nem létezik már
// ami csak bent lett létrehozva is... ha kívül lett létrehozva az más:
// akkor elérhető lenne de ez hibát dobna itt:
// pontosIdoMulik();
// az ido valtozonak sincs itt értelme, mert a pontosIdo fgv-en belul
// deklaráltuk:
// console.log('a pontos ido: '+ido); // hibát dob


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
//  which can be immediately invoked (see IIFE) and can be anonymous
//  (eg can omit the name 'expressed'). 'function' as the first word of a statement at global scope
//  or directly inside a function starts a function declaration; otherwise, it starts a function expression.

function aFunc () { //ez function statement ez hoisted
  var aa;
  var cc = 5;
  // ez itt értékadás, nem deklarálás!!
  aa='aa';
  // bb = 'asd'; // ha nem irsz ele se var, let vagy const-ot akkor global variable lesz, ilyet ne csinálj!
  console.log('inside aFunc: '+aa);
  function bFunc() {
    console.log('inside bFunc: '+aa);
    console.log(cc); // JavaScript 'closure' means I have access to 'cc' in here,
    // because it is defined in the function in which I was defined.
  }
  bFunc(); // bFunc lefut aFunc-ban

}

aFunc();
// bFunc(); // not defined
// console.log('bb global variable: '+bb);


// a closure így nem tűnik nagy dolgonak, az igazi ereje akkor
// látható például, ha a module pattern-t megértjük (advanced!)
// http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html

// https://www.freecodecamp.org/news/discover-the-power-of-closures-in-javascript-5c472a7765d7/
