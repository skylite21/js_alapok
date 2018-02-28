
//  --------------------------------------------------------------------
//  --------------------- Selection = elágazás -------------------------
//  --------------------------------------------------------------------

// akkor használunk elágazást amikor egy bizonyos feltétel vagy 
// feltételek alapján akarjuk hogy lefusson a kódunk

let name = 'John';
let age = 23;

if (age < 18 ) {
  console.log(name+' kiskorú férfi.');
} else if ( age >= 20 && age < 30 ) {
  console.log(name+' fiatal férfi. ');
} else {
  console.log(name+' férfi'); 
}
console.log('asd');

let job = 'engineer';

job = prompt('Mit dolgozik John?');

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



