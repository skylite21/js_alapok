// functional programming
// #Learnabout: https://www.youtube.com/playlist?list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84

// ez egy object-eket tartalmazó tömb:
let animals = [
  {neve: 'Buffy', fajtaja:'macska'},
  {neve: 'Fluffy', fajtaja:'kutya'},
  {neve: 'Jago', fajtaja:'madar'},
  {neve: 'Lori', fajtaja:'madar'},
  {neve: 'Barni', fajtaja:'macska'},
  {neve: 'Cirmi', fajtaja:'macska'}
];
console.log('==========all animals========\n');
console.log(animals);

let kutyak = []; 

// filter returns an array containing the items where the inner function returns true
// a filter fügvény egy másik fügvényt kell hogy kapjon bemeneti argumentumként. ebben az esetben
// a bemeneti argumentum egy anonym function (korábban nem deklaráltuk, csak most itt)
kutyak = animals.filter( function(animal) {
  return animal.fajtaja === 'kutya'; // csak akkor adom vissza a tomb elemet, ha a fajtaja kutya
});
// rövidebben is írható az előző 3 sor:
// kutyak = animals.filter ( animal => animal.fajtaja === "kutya" );

console.log('==========all dogs========\n');
console.log(kutyak);

// csinálhatunk egy külön fügvényt is ami elvégzi a vizsgálatot
// ezt deklaráljuk itt:
let kutyaFilter = function(animal) {
  return animal.fajtaja === 'kutya';
};

// ilyenkor a fügvényt adjuk át a filter-nek
// (itt használjuk a kutyaFilter fgv-t bemeneti paraméterként) 
kutyak = animals.filter(kutyaFilter);

// callback function: minden olyan function-t callback functionnek nevezünk,
// ami egy másik fügvény bemeneti argumentumaként lesz felhasználva


// the 'rest' operator
// in function(...nums) > called 'rest', 
let addNumbers = function(...nums) {
  let sum = 0;

  // nums is an array here, inside the function
  for( let i=0; i < nums.length; i++ ) {
    sum = sum + nums[i];
  }

  return sum;
  // a fgv belsejét egyetlen sorral is le lehet írni ha a reduce-t értjük:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#How_reduce_works
  // először 0+1 = 1 lesz az összeg, utána a következő iterációban 1 + 2, aztán 3 + 3, mindig az előző összeg lesz az a, és a következő érték a b
  // return nums.reduce((a, b) => a + b);
};

console.log(addNumbers(0, 1, 2, 3, 4));


let scores = [53, 23, 20, 10, 35, 80];

// csinálunk egy füvgényt ami egyetlen darab
// pontszámról, megmondja hogy nyert e vagy nem:
function checkIfWinner(score){
  if (score >= 50) {
    return 'Winner';
  } else {
    return 'Looser';
  }
}

// az előző function-t a map fügvényben felhasználva:
// map returns another array and runs a function on each item. The functions return value will be the new value in the new array
const winners = scores.map(checkIfWinner); 
console.log(winners); //[ 'Winner', 'Looser', 'Looser', 'Looser', 'Looser', 'Winner' ]

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


