// ---------------------------------------------------------------------
// ----------------------------  Objektumok  ---------------------------
// ---------------------------------------------------------------------

// EcmaScript
// https://en.wikipedia.org/wiki/ECMAScript

// EcmaScript 2015 = ES6
// pl a let kulcsszó ES6-ban jelent meg

// intelisense, code completion> kód kiegészítés 
// (amikor felajánlja a dolgokat az editor)

// syntax checker, vagy linter> a kódban lévő hibákra 
// hívja fel a figyelmedet

// ez egy üres object, így jelöljük
let myObject = {};
console.log('a myObject típusa: '+typeof(myObject));

// https://stackoverflow.com/questions/4348478/what-is-the-difference-between-object-keys-with-quotes-and-without-quotes
// a key körül lévő aposztrof elhagyható a legtöbb esetben...
let myPlayer = {
  'name': 'John',    // kulcs : érték párok sorozata...
  'health': 100,    // 'key': value
  'alive': true
};

console.log('a jatekos neve: '+myPlayer.name);
// véletlen számot generálunk 200 és 1 között
let shoot = Math.floor((Math.random() * 200 ) + 1);

if (myPlayer.alive) {
  myPlayer.health = myPlayer.health - shoot;
  console.log(shoot+'-al meglőttük a játékost');

  if(myPlayer.health <= 0) {
    myPlayer.alive = false;
  }
}

// a felkiáltójel tagadást jelent
if (!myPlayer.alive) {
  console.log(myPlayer.name+' is dead!!!!!');
} else {
  console.log(myPlayer.name+' is alive!! Hurray!!');
} 
console.log(myPlayer.name+' has '+myPlayer.health+' health left');

myPlayer.level = 1; // ezzel kibővítjük a myPlayer-t még egy property-vel

// kibővítjük a myPlayer object-et de most egy fugvenyt kap nem egy változót:
// object-ben lévő function-t metódusnak hívunk (method)
myPlayer.levelUp = function() {
  this.level++;
  this.health = this.health + ( this.level*100 );
  console.log(this.name+' Leveled up: '+this.health);
};

// meghivjuk a myPlayer object levelup property-jét ami egy fugveny, ezért kell a zárójel
myPlayer.levelUp();
console.log(myPlayer.name+' has '+myPlayer.health+' health, at level: '+myPlayer.level);

// how to loop trough object 
for (let key in myPlayer ) {
  console.log('cheking...'+key+' ...');
  console.log(key+' értéke: '+myPlayer[key]);
}

// object-eket tartalmazó tömb
let animals = [
  { name: 'Cirmi', class: 'cat' },
  { name: 'Bodri', class: 'dog' },
  { name: 'Jago', class: 'bird' },
  { name: 'Pali', class: 'bird' },
  { name: 'Buffy', class: 'dog' }
];
console.log(animals);

// kigyűjtjük egy tömbbe a kutyákat, ehhez kell egy tömb, ami 
// kezdetben még üres
let dogs = [];
// how to loop trough array:
// itt 'of' kulcsszót használunk, objectnél 'in'-t
// requireres ES6+
for ( let animal of animals ) {
  if( animal.class === 'dog' ) {
    dogs.push(animal);
  }
} //end of for

console.log(dogs);

kutyak = animals.filter(function(animal) {
  return animal.fajtaja === 'kutya';
});

var kutyaE = function (animal) {
  return animal.fajtaja === 'kutya';
};

kutyak = animals.filter(kutyaE);

console.log('======= all dogs with filter: ========\n ');
console.log(kutyak);

var inventory = [
  {name: 'apples', quantity: 2},
  {name: 'bananas', quantity: 0},
  {name: 'cherries', quantity: 5}
];
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find?v=example
var requestedFruit = 'apples';

function findCherries(fruit) {
  return fruit.name === this.element;
}

console.log(inventory.find(findCherries, { element: requestedFruit}));


// --------------------  objects, classes ES5 way --------------------

let task = { //object 1db property-vel
  title: 'programozas feladat'
};

task.description = 'Tanuljuk az objecteket...';  // hozzaadunk 1 property-t a taskhoz

task.showAll = function() {
  return 'cím: '+this.title+'leírás: ' + this.description ;
};

console.log(task.title);
console.log(task.description);
console.log(task.showAll());

// --------------------  object creation part 2 --------------------
// es5

// function constructor
var Cat = function (name) {
  this.name = name;
  this.color = 'black';
  this.walk = function () {
    return console.log (this.name+' is walking...');
  };
  this.meow = function () {
    return console.log (this.name+' says: MEOW!');
  };
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
  return console.log (this.name+' says: BRRRRR BRRRRRRR!');
};


var cat1 = new Cat('Fluffy'); // csinal egy uj object-et es hozza linkeli a cat object prototype-hozz
console.log(cat1.color);
cat1.meow();
cat1.meow = 'hi'; // ez elbassza a meow fgv-t mert writeable alapbol
// cat1.meow(); 

cat1.purr(); // ez egy prototype ezert nem keszul masolat belole amikor letrejon az uj object
// cat1.legscount = 6; // nem tudjuk elbaszni a legcount-ot
cat1.color = 'white';
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


var mutantCat1 = new mutantCat('Billy'); 
mutantCat1.legscount = 6; // a legcscount a mutantCat esetében már változtatható
console.log(mutantCat1.name+' lábainak száma: '+mutantCat1.legscount);



// -------------------------------- es6 classes 

class Dog {
  constructor(name) {
    this.name = name; 
    Object.defineProperty(this, 'legscount', {
      value: 4,
      writable: false,
      enumerable: true,
      configurable: true
    });
  }
  bark() {
    console.log(this.name+': vau vau!');
  }
}

let dog1 = new Dog('Bodri');
console.log('a kurta neve:'+dog1.name);
dog1.bark();

class MutantDog extends Dog {
  // mivel ez egy alosztály ezért kell a super() fgv... a this kulcsszót 
  // nem tudjuk használni egy alosztályban amíg nem hívjuk meg a super()-t
  // In a child class constructor, 'this' cannot be used until super is called.
  // ES6 class constructors MUST call super if they are subclasses, or they must 
  // explicitly return some object to take the place of the one that was not initialized.
  constructor(name) {
    super(name);
    Object.defineProperty(this, 'legscount', {
      value: 4,
      writable: true,
      enumerable: true,
      configurable: true
    });
  }  
  speak() {
    console.log(this.name+' beszélni is tud');
  }
}

let mutantDog1 = new MutantDog('Mutáns Kutya');
mutantDog1.bark();
mutantDog1.legscount = 5;
console.log(mutantDog1.name+' lábainak száma: '+mutantDog1.legscount);
mutantDog1.speak();

// https://en.wikipedia.org/wiki/Object-oriented_programming
