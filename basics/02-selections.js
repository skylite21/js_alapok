//  --------------------------------------------------------------------
//  Selection = elágazás 
//  --------------------------------------------------------------------

// akkor használunk elágazást amikor egy bizonyos feltétel vagy 
// feltételek alapján akarjuk hogy lefusson egy adott kódrészünk

const name = 'John';
const age = 23;

if (age < 18 ) {
  // this code block will only run if age < 18
  console.log(name+' kiskorú férfi.');
} else if ( age >= 20 && age < 30 ) {
  console.log(name+' fiatal férfi. ');
} else {
  // this will only run if the previous two code blocks where 
  // evaluated to false
  console.log(name+' férfi'); 
}

// this will always run because it is outside of an if statement!!
console.log('asd');

//a really really pointless if statement:
if (true) {
  console.log('this will always run too...');
}

// the same pointless if statement
if (1 === 1) {
  console.log('this will always run too...');
}

let job = 'engineer';

// Ternary operator

// a JavaScript-ben van egy rövidebb jelölése is az if statement-nek,
// ezt hívják ternary operator-nak. Nagyon egyszerű if statement-ek 
// esetén elegánsabb megoldás lehet, azonban a kód nehezebben olvasható
// tőle. A szintaxisa így néz ki:

// feltétel ? érték ha igaz : érték ha hamis

// például nézzük az alábbi if statement-et:

let grade;
let marks = 43;

if (marks < 30) {
  grade = 'Fail';
}
else {
  grade = 'Pass';
}

console.log(grade);

// az előző if statement ternary operator-al így nézne ki:
grade = (marks < 30) ? 'Fail' : 'Pass';

// az eredmény ugyanaz lesz
console.log(grade);
// read more: https://www.educative.io/edpresso/what-is-the-ternary-operator-in-javascript


// the switch statement is often use when there are multiple cases...
// it's like a chain of if statements:
switch (job) {
case 'teacher':
  console.log('John tanít');
  break;
case 'driver':
  console.log('John vezet');
  break;
case 'cop':
  console.log('John bűnözőket üldöz');
  break;
default:
  console.log('John valami mást csinál');
}


// feladat:
// a magasság és a kor összege alapján döntsük el hogy melyik játékos nyert.
// prompt fgv csak browserben működik, nodejs-be be kellene importálni 
// https://stackoverflow.com/questions/24291909/prompt-not-defined-using-node-from-command-line

job = prompt('Mit dolgozik John?');


let player1 = prompt('Első Játékos neve?');
let player2 = prompt('Második játékos neve?');

let player1Height = prompt (player1+' magassága?');
// ...
