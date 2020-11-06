// ---------------------------------------------------------------------
// ----------------------------  Objektumok  ---------------------------
// ---------------------------------------------------------------------

// ez egy üres object, így jelöljük
let myObject = {};
// az objektum egy eléggé alap változó típus a javascriptben, szinte minden object amúgy js-ben...
console.log('a myObject típusa: '+typeof(myObject));

// https://stackoverflow.com/questions/4348478/what-is-the-difference-between-object-keys-with-quotes-and-without-quotes
// a key körül lévő aposztrof elhagyható
let myPlayer = {
  // a myPlayer objecthez három darab property-t adunk hozzá
  'name': 'John',    // kulcs : érték párok sorozata...
  'health': 100,    // 'key': value
  'alive': true
};

// az objektum egy kulcs érték párokat tartalmazó adathalmaz.
// a key is szinte lehet bármi, és a value is lehet bármi (akár egy fugvény is...)
// az objektum egy property-éhez a pont karakterrel férhetünk hozzá, pl:
console.log('a jatekos neve: '+myPlayer.name);

// véletlen számot generálunk 200 és 1 között
let shoot = Math.floor((Math.random() * 200 ) + 1);

if (myPlayer.alive) {
  myPlayer.health = myPlayer.health - shoot;
  console.log(shoot+'-al meglőttük a játékost');
  // ha a játékos élete kisebb vagy egyenlő a lövés után, mint nulla
  // akkor halott a játékos
  if(myPlayer.health <= 0) {
    myPlayer.alive = false;
  }
}

// a felkiáltójel tagadást jelent ha nem igaz az hogy alive
if (!myPlayer.alive) {
  console.log(myPlayer.name+' is dead!!!!!');
} else {
  console.log(myPlayer.name+' is alive!! Hurray!!');
} 
console.log(myPlayer.name+' has '+myPlayer.health+' health left');

// hozzáadunk a myplayer objecthez egy új property-t:
myPlayer.level = 1; // ezzel kibővítjük a myPlayer-t még egy property-vel

// kibővítjük a myPlayer object-et de most egy fugvenyt kap nem egy változót:
// object-ben lévő function-t metódusnak hívunk (method)
myPlayer.levelUp = function() {
  myPlayer.level++;
  myPlayer.health = myPlayer.health + ( myPlayer.level*100 );
  console.log(this.name+' Leveled up: '+myPlayer.health);
};

// meghivjuk a myPlayer object levelup metódusát, ami egy füvgény, ezért kell a zárójel
myPlayer.levelUp();
console.log(myPlayer.name+' has '+myPlayer.health+' health, at level: '+myPlayer.level);


// ha egy object összes propertyén végig akarunk menni, akkor azt for..in loop-al kell
// how to loop trough object 
for (let key in myPlayer ) {
  console.log('cheking...'+key+' ...');
  console.log(key+' értéke: '+myPlayer[key]);
}

// ez egy object-eket tartalmazó tömb
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
for ( let animal of animals ) {
  if( animal.class === 'dog' ) {
    dogs.push(animal);
  }
} //end of for

console.log(dogs);


// az előző loop így is működik *functional.js
dogs = animals.filter(function(animal) {
  return animal.class === 'dog';
});
console.log('======= all dogs with filter: (same result) ========\n ');
console.log(dogs);

let task = { //object 1db property-vel
  title: 'programozas feladat'
};

task.description = 'Tanuljuk az objecteket...';  // hozzaadunk 1 property-t a taskhoz

task.showAllInfo = function() {
  return 'cím: '+this.title+'leírás: ' + this.description ;
};

console.log(task.title);
console.log(task.description);
console.log(task.showAllInfo());

/*
 * -------------------------------------------------------------------
 * --------------------  objects, classes ES6 way --------------------
 * -------------------------------------------------------------------
 * 
 * a javascriptben csinálhatunk class-okat is
 * amik object-eket generálnak egy "template" alapján
 * a class-ok neveit nagybetűvel szokták írni
 * a classokat általában hierarchiába építjük fel, az újrafelhasználhatóság
 * miatt. https://javascript.info/class-inheritance
 */
class Animal {
  // a class construktor-a minden példányosításkor lefut
  constructor() {
    this.health = 100;
  }
  // all living things must eat
  eat() {
    console.log(this.name+' is eating...');
  }
}

// létrehozunk egy alosztályt ami örökli a szülő osztály összes dolgát
class Dog extends Animal {
  constructor(name) {
    /*
     * mivel ez egy alosztály ezért kell a super() fgv... a this kulcsszót 
     * nem tudjuk használni egy alosztályban amíg nem hívjuk meg a super()-t
     * In a child class constructor, 'this' cannot be used until super is called.
     * ES6 class constructors MUST call super if they are subclasses, or they must 
     * explicitly return some object to take the place of the one that was not initialized.
     */
    super(name);
    this.name = name; 
    this.race = 'dog';
    // ezzel létrehozunk egy nem írható property-t
    // a kutyának mindíg négy lába lesz.
    Object.defineProperty(this, 'legscount', {
      value: 4,
      writable: false,
      enumerable: true,
      configurable: true
    });
  }
  // a kutya fog tudni ugatni:
  bark() {
    console.log(this.name+': vau vau!');
  }
}

// itt hozzuk létre a tényleges kutyát, ami a Dog class egy
// példánya lesz:
let dog1 = new Dog('Bodri');
console.log('a kurta neve:'+dog1.name);
// a kutya lábainak a számát nem módosíthatjuk, hibát nem fog rá adni a js
// de a property nem módosul.
dog1.legscount = 5;
console.log('a kurta lábainak száma:'+dog1.legscount);
dog1.bark();
// a kutya enni is tud, mert azt az Animal classból származtattuk
// ezért létezni fog ez a metódus is a dog1-en:
dog1.eat();


// létrehozunk mégegy alosztályt, a MutantDog-ot amiben már a lábak száma
// több is lehet
class MutantDog extends Dog {
  constructor(name) {
    super(name);
    Object.defineProperty(this, 'legscount', {
      value: 4,
      writable: true,
      enumerable: true,
      configurable: true
    });
  }  
  // ez beszélni is fog tudni:
  speak() {
    console.log(this.name+' beszélni is tud');
  }
}

let mutantDog1 = new MutantDog('Mutáns Kutya');
mutantDog1.bark();
// a legscount property-t módosíthatjuk
mutantDog1.legscount = 5;
console.log(mutantDog1.name+' lábainak száma: '+mutantDog1.legscount);
mutantDog1.speak();

/*
 * az objektum orientált programozás az egyik legalapvetőbb
 * programozási elv, fontos jól ismerni a lényegét
 * https://en.wikipedia.org/wiki/Object-oriented_programming
 * 
 * 
 * -------------------------------------------------------------------
 * --------------------  classes, ES5 way...  --------------------
 * -------------------------------------------------------------------
 * 
 * a továbbiak ugyanazokat mutatják be mint az előző class-os példák
 * de ezek a régebbi verziójú, ES5 javascript-ben voltak így használva
 * ha meg akarod érteni a javascript működését mélyebben, akkor fontos ezeket ismerni
 * 
 * function constructor: ez lényegében egy class
 */
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
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
Cat.prototype.purr = function()  {
  return console.log (this.name+' says: BRRRRR BRRRRRRR!');
};

// itt példányosítjuk a Cat osztályt, és csinálunk egy tényleges cat1 object-et
var cat1 = new Cat('Fluffy'); // csinal egy uj object-et es hozza linkeli a cat object prototype-hozz
console.log(cat1.color);
cat1.meow();
cat1.meow = 'hi'; // ez elbassza a meow fgv-t mert writeable alapbol
// cat1.meow(); // hibát dob itt már, mert a meow nem egy fügvény hanem egy string...

cat1.purr(); // ez egy prototype ezert nem keszul masolat belole amikor letrejon az uj object
cat1.legscount = 6; // nem tudjuk elbaszni a legcount-ot
cat1.color = 'white';
console.log('cat-s legcount: '+cat1.legscount);
cat1.walk();

console.log(cat1);
// kiírhatjuk az összes key-t is:
console.log('all keys:');
console.log(Object.keys(cat1));

// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty


// --------------------  object inheritance in ES5 --------------------

var MutantCat = function (name) {
  // ez kb ugyanaz mint a super(), az es6 class-ban, és itt adjuk meg
  // hogy milyen class tulajdonságait örökli:
  Cat.call(this, name);
  Object.defineProperty(this, 'legscount', {
    value: 4,
    writable: true,
    enumerable: true,
    configurable: true
  });
  // még egy metódust hozzáadunk a mutantCat-hez
  this.speak = function() {
    console.log(this.name+' is speaking!');
  };
};

// példányosítjuk a mutáns macskát
var mutantCat1 = new MutantCat('Billy'); 
mutantCat1.legscount = 6; // a legcscount a mutantCat esetében már változtatható
console.log(mutantCat1.name+' lábainak száma: '+mutantCat1.legscount);
mutantCat1.speak();

// prototype is an encaptulation of properties that an object links to.
// a fentebbi ES6 osztályt "belekeverhetjük" a MutantDog-ba:
MutantCat.prototype = Object.create(Dog.prototype); 
MutantCat.prototype.constructor = MutantCat;

// ez a mutans macska már ugatni is tud!! insane!
var mutantCat2 = new MutantCat('Fred'); 
mutantCat2.bark();
