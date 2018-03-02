'use strict';

console.log("hello");
// "let" kulcsszo: letrehoz egy valtozot. 
// Az egyenloseg jel értéket ad a szoveg nevü változónak
let szoveg = "Hello bazmeg";

// let kulsszo nelkul is lehet valtozot deklaralni 
// de akkor globalis valtozo lesz ami nagyon nem elonyos!
// szoveg2="szoveg2valami";

console.log(szoveg);
console.log("a szoveg tartalma: "+szoveg); // string osszefuzes concatenation


console.log("a szoveg tartalma: ",szoveg); // string osszefuzes2

// +(string concatenation operator) with object will call the toString method on the 
// object and a string will be returned. So, '' + object is equivalent to 
// object.toString(). And toString on object returns "[object Object]".
// With , the object is passed as separate argument to the log method.

console.log("a szoveg tipusa: "+typeof(szoveg));

// amit let-el deklaralunk azt kesobb nemlehet ujradeklaralni
// amit var-al deklaralunk azt kesobb ujra lehet deklaralni (var foo lehet tobb is)
let szam = 23;

console.log("a szam tipusa: "+typeof(szam));

szam = "233";

console.log("a szam tipusa ha idezojelek kozott van: "+typeof(szam));

// szam = szam + 10;

console.log(szam);

szam = parseInt(szam);

console.log("a szam tipusa convertalas utan: "+typeof(szam));

szam = szam + 10; 

console.log(szam);

// 1. irj programot ami kiirja pl hogy "Szia Pista" ahol a "szia" 
// egy string (koszontes) a pista pedig a keresztnev valtozo.
// a console.log egy string osszefuzessel irja ki a megfelelo uzenetet

// 2. irj egy programot ami szam1 es szam valtozo ertekeit osszeadja
// es kiirja a kepernyore hogy " az eredmeny: 5" pl..

// 3. hozz letre egy valtozot aminek az erteke Infinity legyen.
// let vegtelen = Infinity
// irasd ki a vegtelen valtozo tipusat
// adj hozza vegtelenhez 100-at es irasd ki az eredmenyt
// adj hozza vegtelenhez Infinity-t es irasd ki az eredmenyt

// 4. hozz letre egy 'a' valtozot aminek az erteke 9 (number type)
// hozz letre egy b valtozot aminek az erteke "R" (string type)
// vond végezd el az alábbi müveleteket és ird ki az eredmenyt:
// a + b
// a - b

// 5. hozz letre egy 'a' valtozot aminek az erteke 9 (number type)
// hozz letre egy b valtozot aminek az erteke "7" (string type)
// vond végezd el az alábbi müveleteket és ird ki az eredmenyt:
// a + b
// a - b

console.log("Hello\nEzt ujsorbairom\tEzt egytabbal beljebb irom");
console.log("XXXXXXXXXXXXXXXXXXXXX\rcarrige return");

let eredmeny = 4 + 6 + 10; // eredmeny <- ertek

// story of foo and bar: https://en.wikipedia.org/wiki/Foobar

// hoisting
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


// boolean tipus;
let igennem = true;
let a = undefined || 0
console.log("igennem tipusa: "+typeof(igennem))

// if statements
if ( szam > 10 ) {
  console.log ("nagyobb mint 10");
  }
else {
  console.log("kisebb mint 10");
}

szam = szam - "asd"

if (isNaN(szam)) {
  console.log("szam valtozo NaN, elbasztuk a szamot")
}
if (isNaN(parseInt(szam))) {
  console.log("szam valtozo-t nem tudtuk számmá alakítani, el van baszva")
}


// Arrays
let szamok = [10, 20, 30, 40, 50, 60];

console.log("a szamok tipusa:"+typeof(szamok));
console.log("a szamokban "+szamok.length+" db elem van");
szamok.push(70);
console.log(szamok);

// ha a szamok tomb-ben 7 vagy annal tobb elem van, vegyunk el egyet a szamok.pop()
// fgv-el

// ha az array 3-adik eleme 30, kuldjon consoloe.log-ot.

for (let i = 0; i < szamok.length; i++) {
    if (szamok[i] === 30) {
			console.log("TALALTAM 30at: "+szamok[i]);
		} else {
			console.log(szamok[i]);
		}
}
// more ways:
// http://stackoverflow.com/questions/3010840/loop-through-an-array-in-javascript

// https://en.wikipedia.org/wiki/ECMAScript

// REQUIRES ECMASCRIPT 2015+     .forEach is safe too
for (let i of szamok) { // van of helyett in de az teljesen mas, az objectre jo
    if (i === 30) {
			console.log("TALALTAM 30at: "+i);
		} else {
			console.log(i);
		}
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

// javascript agyamentségek
typeof(NaN) // 'number'
0 == '' //true
'' == '0' //false
0 == '0' //true
false == 'false' //false
false == '0' //true
" \t\r\n " == 0 //true

// always use === to be sure, but still remember:

NaN === NaN // false
NaN !== NaN // true
// fuck all this, use isNaN() 


// 1. feladat: keszits prograomt ami egy neveket tartalmazó array-ben
// megmondja hogy van e benne Pista es kiirja azt is hogy hanyadik elem
// az array-ben a Pista

// 2. feladat: keszits programot ami egy szamokat tartalmazo tomb-on vegig megy
// es egy osszeg valtozoba bepakolja a szamok osszegét. A ciklus után az osszeg
// valtozot irja ki a kepernyore

// 3. Az elozo programot bovitsd ki úgy hogy uzenetet dobjon ha a tomb egyik eleme 
// nem szam, es azt ne vegye figyelembe, de igy is osszegezze a többi number 
// tipusu elemeket, es irja ki az eredmenyt

// 4. Az elozo programot bovitsd ki ugy hogy amennyiben nem szam a tomb egyik eleme
// akkor probalja meg a program a parseInt fgv-el atkonvertalni számmá, és ezután
// újra nézze meg hogy szám e az adott isNaN(elem). Ha igen, adja hozzá, ha nem, jelezze
// egy console.log-al hogy nem sikerult a konvertalas




// camelCasing: amikorMindenUjSzoNagyBetuKiveveAzElso

let pontosIdo = function () {  
  let szamX = 5;
  return szamX;
}

console.log("A pontos ido:   "+pontosIdo());

// console.log(szamX); // hibat ad!!! szamX is not defined


// var a = function ()  {return 2;};  <-- a értéke egy fgv
// var a = function ()  {return 2;}(); <-- meg is hivja a fgvt rogton igy a értéke 2



//closure : koszones valtozo egy fugvenyben van megis 
//          a belso fugveny szamara is elerheto az erteke

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



var x = 0;
x++;
console.log("x = "+x);
x += 1;
console.log("x = "+x);

console.log("x = "+(++x));
console.log("x = "+(x++)); // ha mögé írod nem ad hozzá egyet ilyenkor!
// you have to know what you're doing, even if its javascript  :D

// semicolon insertion!!!

// 'use strict'


// object : dynamic collection of properties
// every property is a string that is unique within that object
// get
// object.name
// set
// object.name = value;
// delete
// delete object.name;

// --------------------  object creation part 0 --------------------

let myObject = {}; //ures object
let player = {
  "name": "John",
  "health": 100,
  "alive": true
};

let shoot = Math.floor((Math.random() * 200) + 1); // between 1 and 200
if (player.alive) {
  console.log(shoot+"-al meglottuk"+player.name+"-t");
  player.health = player.health - shoot;
  if (player.health < 0) {
   player.alive = false;
  }
}

if (!player.alive) {
  console.log(player.name+"is dead!!!!!!"); 
} else {
  console.log(player.name+"is still alive yay!");
}

// loop trough objects all property
for (let key in player){
  console.log("checking..."+key)
  console.log("value: "+player[key]+" passed the test.")
}

// console.log(key+" is not defined here")

// --------------------  array of objects --------------------

let animals = [
  { neve:"Fluffy", fajtaja:"cica" },
  { neve:"Buffy", fajtaja:"kutya" },
  { neve:"Bubu", fajtaja:"madar" },
  { neve:"Károly", fajtaja:"kutya" },
  { neve:"Bodri", fajtaja:"kutya" },
]

console.log("======= all animals: ========\n ");
console.log(animals);

let kutyak = []
for (let i = 0; i < animals.length; i++) {
  if (animals[i].fajtaja === "madar" ) {
   kutyak.push(animals[i]);
  }

}
console.log("======= all dogs: ========\n ");
console.log(kutyak);

// higher order functions, functinal programming> 
// #LEARNABOUT https://www.youtube.com/playlist?list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84

kutyak = animals.filter(function(animal) {
  return animal.fajtaja === "kutya";
})

var kutyaE = function (animal) {
  return animal.fajtaja === "kutya"
}

kutyak = animals.filter(kutyaE)

console.log("======= all dogs with filter: ========\n ");
console.log(kutyak);

var inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find?v=example
var requestedFruit = "apples";

function findCherries(fruit) { 
    return fruit.name === this.element;
}

console.log(inventory.find(findCherries, { element: requestedFruit})); 



// --------------------  object creation part 1 --------------------

let task = { //object 1db property-vel
  title: "programozas feladat"
};

task.description = 'Tanuljuk az objecteket...';  // hozzaadunk 1 property-t a taskhoz

task.showAll = function() {
  return 'cím: '+this.title+'leírás: ' + this.description ;
}

console.log(task.title);
console.log(task.description);
console.log(task.showAll());

// --------------------  object creation part 2 --------------------
// es5

var Cat = function (name) {
  this.name = name;
  this.color = "black";
  this.walk = function () {
    return console.log (this.name+" is walking...");
  }
  this.meow = function () {
    return console.log (this.name+" says: MEOW!");
  }
  Object.defineProperty(this, 'legscount', {
      value: 4,
      writable: false,
      enumerable: false,  // ha a teljes objectet nezzuk nem jelenik meg a legscount ha ez false
      configurable: true
    });
};

// functions in js are objects, every function has a prototype property
// ha prototypehoz adok hozza az hatekonyabb mert nem masol minden uj objectnel le minden fugvenyt
Cat.prototype.purr = function()  {
  return console.log (this.name+" says: BRRRRR BRRRRRRR!");
}


var cat1 = new Cat("Fluffy"); // csinal egy uj object-et es hozza linkeli a cat object prototype-hozz
console.log(cat1.color);
cat1.meow();
cat1.meow = "hi"; // ez elbassza a meow fgv-t mert writeable alapbol
// cat1.meow(); 

cat1.purr(); // ez egy prototype ezert nem keszul masolat belole amikor letrejon az uj object
// cat1.legscount = 6; // nem tudjuk elbaszni a legcount-ot
cat1.color = "white";
console.log(cat1.legscount);
cat1.walk();

console.log(cat1);
console.log(Object.keys(cat1));

// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty


// --------------------  object inheritance part 1 --------------------

var mutantCat = function (name) {
  Cat.call(this, name);
  Object.defineProperty(this, 'legscount', {
    value: 4,
    writable: true,
    enumerable: true,
    configurable: true
  });
};

// prototype is an encaptulation of properties that an object links to.
mutantCat.prototype = Object.create(Cat.prototype); 
mutantCat.prototype.constructor = mutantCat;


var mutantCat1 = new mutantCat("Billy"); 
mutantCat1.legscount = 6; // a legcscount a mutantCat esetében már változtatható
console.log(mutantCat1.name+" lábainak száma: "+mutantCat1.legscount);


// --------------------  object creation part 3 --------------------
// es6 EcmaScript2015 // át lehet compile-olni es5-be https://es6console.com

class Dog {
  constructor(name) {
    this.name = name;
    Object.defineProperty(this, 'legscount', {
      value: 4,
      writable: false,
      enumerable: true,
      configurable: true
    });
  };
  bark() { // in es6 its a prototype by default
    console.log(this.name+" ugat!!");
  };
};

// js console-ba ennek minden property-je prototype, a cat-nek csak a purr

let dog1 = new Dog("Max");
dog1.bark();
// dog1.legscount = 6;
console.log(dog1.name+" lábainak száma: "+dog1.legscount);

class MutantDog extends Dog {
  constructor(name) {
    // In a child class constructor, "this" cannot be used until super is called.
    // ES6 class constructors MUST call super if they are subclasses, or they must 
    // explicitly return some object to take the place of the one that was not initialized.
    super(name);
    Object.defineProperty(this, 'legscount', {
      value: 4,
      writable: true,
      enumerable: true,
      configurable: true
    });
  }
  speak() {
  console.log(this.name+" beszélni is tud")
  }
}

let mutantDog1 = new MutantDog("Mutáns Kutya");
mutantDog1.bark();
mutantDog1.legscount = 5;
console.log(mutantDog1.name+" lábainak száma: "+mutantDog1.legscount)
mutantDog1.speak();

// https://en.wikipedia.org/wiki/Object-oriented_programming



