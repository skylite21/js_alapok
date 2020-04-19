// fetch function is only available in the browser! in node you could use node-fetch  // https://www.npmjs.com/package/node-fetch
// but for that you need to install it:
// npm install -g node-fetch 
const fetch = require('node-fetch');

// a fetch function async, mert internetről tölt le adatot (vagy küld...attol függ hogy használod)
// a fetch egy promise object-et return-öl, és a promis object-nek van egy .then metódusa
// ami akkor hívódik meg ha az async művelet véget ért.
// fetch with Promises
fetch('https://jsonplaceholder.typicode.com/todos/1')
// a then egy callback function-t kap bemeneti paraméterként, 
// a callback function bemeneti paramétere a response változó, amin meghívjuk a .json metódust 
// mert a kapott adatot át akarjuk alakítani javascript objectté.
  .then(response => response.json())  // https://developer.mozilla.org/en-US/docs/Web/API/Body/json
  // az előző .json() metódus is egy promise-t ad vissza aminek szintén lesz .then metódusa
  // ebben a .then-ben a callback bemeneti paramétere már maga az adat lesz amit a szerver visszaadott
  .then(data => {
    // a kapott adatot kilogoljuk a képernyőre:
    console.log(data); // Prints result from `response.json()` 
  })
  .catch(error => console.error(error));


// -------------------------
// fetch with async function
// -------------------------
// mivel a fetch async, ezért nem csak a .then-es módszert használhatjuk
// hanem a modernebb, async function-t is:

async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await response.json();
  console.log(data);
}

// a fgv persze csak akkor fut le ha meg is hívjuk!
getData();

// arrow functionnel létrehozva az async function így nézne ki:
// const getData = async () => { ... };

// const request = async () => {
//   //  ez egy hibás url, hibát fog visszaadni mindenképp (mert rossz...)
//   // viszont a hibát ebben a fügvényben nem kezeljük le, itt elakadna a javascript
//   const response = await fetch('http://httpstat.us/500');
//   // ha érdekel hogy miért kell a .json fgv-t is await-elni, olvasd el a linket
//   const json = await response.json(); // https://stackoverflow.com/questions/37555031/why-does-json-return-a-promise
//   console.log(json);
// };
// request();

// fetch async function and error handling
// ez a példa arrow function-ös, és async, ÉS még error handling is van benne
const requestAndHandleErrors = async () => {

  // a try catch block arra való hogy elkapjunk egy javascript által generált hibát, és azt magunk lekezeljük kódból
  try {
    const response = await fetch('http://httpstat.us/500'); // https://stackoverflow.com/questions/38235715/fetch-reject-promise-and-catch-the-error-if-status-is-not-ok
    const json = await response.json();
    console.log(json);
  } catch(e) {
    // here we also get an error but at least we know whats wrong and can handle the error properly
    // for example a popup box to the user...
    console.log(`Unexpected error occurred, but we can handle this! ${e}`);
  }
};
// az error handling miatt (try, catch block) a kód 
// tovább tud menni, és nem "száll el az egész"
requestAndHandleErrors();


// itt egy saját sleep fügvény ami promise-t ad vissza:
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// akár ennyiből is megoldhatnánk async fugvényen belül, 
// hogy 2sec-et várjon a program:
// await new Promise(r => setTimeout(r, 2000));

// we can create our own promises like this:
// itt nem returnöljük a promise-t hanem változóba tároljuk
// ezért lesz neki .then metódusa (és használható lenne async fugvényen is)
const getServerStatus = new Promise( (resolve, reject) => {
  let dataBase = true;
  if (dataBase) {
    setTimeout( function() { resolve('online'); }, 3000 );
  } else {
    reject(false);
  }
});

getServerStatus.then( status => console.log(status) );

// promise-okról mélyebben:
// https://www.youtube.com/watch?v=SmPouEFKOBg
