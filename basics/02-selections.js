
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
// this will always run
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

// prompt: browser only;
job = prompt('Mit dolgozik John?');

// the switch statement is often use when there are multiple cases...
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


let player1 = prompt('Első Játékos neve?');
let player2 = prompt('Második játékos neve?');

let player1Height = prompt (player1+' magassága?');

// a magasság és a kor összege alapján döntsük el hogy melyik játékos nyert.



