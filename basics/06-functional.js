// functional programming
// #Learnabout: https://www.youtube.com/playlist?list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84

let animals = [
  {neve: "Buffy", fajtaja:"macska"},
  {neve: "Fluffy", fajtaja:"kutya"},
  {neve: "Jago", fajtaja:"madar"},
  {neve: "Lori", fajtaja:"madar"},
  {neve: "Barni", fajtaja:"macska"},
  {neve: "Cirmi", fajtaja:"macska"}
];
console.log("==========all animals========\n");
console.log(animals);

let kutyak = []; 

// filter returns an array containing the items where the inner function returns true
kutyak = animals.filter( function(animal) {
  return animal.fajtaja === "kutya"; // csak akkor adom vissza a tomb elemet, ha a fajtaja kutya
});
// kutyak = animals.filter ( animal => animal.fajtaja === "kutya" )

console.log("==========all dogs========\n");
console.log(kutyak);

let kutyaFilter = function(animal) {
  return animal.fajtaja === "kutya";
};

kutyak = animals.filter(kutyaFilter);


// in function(...nums) > called 'rest', (array inside the function)
let addNumbers = function(...nums) {

  let sum = 0;
  for( let i=0; i < nums.length; i++ ) {
    sum = sum + nums[i];
  }

  return sum;
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#How_reduce_works
  // először 0+1 = 1 lesz az összeg, utána a következő iterációban 1 + 2, aztán 3 + 3, mindig az előző összeg lesz az a, és a következő érték a b
  // return nums.reduce((a, b) => a + b);
};

console.log(addNumbers(0, 1, 2, 3, 4));


let scores = [53, 23, 20, 10, 35, 80];

function checkIfWinner(score){
  if (score >= 50) {
    return 'Winner';
  } else {
    return 'Looser';
  }
}

// map returns another array and runs a function on each item. The functions return value will be the new value in the new array
const winners = scores.map(checkIfWinner); 
console.log(winners); //[ 'Winner', 'Looser', 'Looser', 'Looser', 'Looser', 'Winner' ]
