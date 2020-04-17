// array destructuring:
// a tömbből kiszedjük az első és második elemet és az első
// elem értéke a one változóban fog tárolódni, 
// a második elem értéke a two nevű változóban:
const [ one, two ] = [ 1, 2 ];
console.log(one); // 1
console.log(two); // 2


const [ first, second ] = [ 1, 2 ];
console.log(first); // 1
console.log(second); // 2


// A sample object
const myObject = { x: 1, y: 2 };

// object Destructuring
// az objectet is "szét lehet szedni"
// így, kiszedjük az x és y változó értékeit és x, y váltózóként lementjük:
const { x, y } = myObject;
console.log(x);
console.log(y);
// x is 1, y is 2


// ez egy sima fügvény ami egy bemeneti paramétert kap,
// ez a bemeneti paraméter várhatóan egy object lesz,
// aminek kiírjuk néhány property-jét 
function myFunction(configParam) {
  console.log(configParam.text);
  console.log(configParam.line);
  console.log(configParam.truncate);
}

// így használjuk a myFucntion fügvényt:
myFunction({
  // több sorba is lehet írni így átláthatóbb, de a lényeg hogy egy object-et kap a myFunction
  text: 'Some value',
  line: 0,
  truncate: 100
});

// with object destructuring in function arguments:
// ha akarjuk szétszedhetjük az objektumot a bemeneti paraméterben is
function myFunctionDest({ text, line, truncate }) {
  // a destructuring miatt nem kell kiírnunk az objectet, egyszerű váltózoink vannak:
  console.log(text);
  console.log(line);
  console.log(truncate);
}

// a működése ugyanaz:
myFunctionDest({
  text: 'Some value',
  line: 0,
  truncate: 100
});

// https://simonsmith.io/destructuring-objects-as-function-parameters-in-es6

// https://2ality.com/2015/01/es6-destructuring.html

// https://stackoverflow.com/questions/49075043/destructure-object-parameter-but-also-have-reference-to-the-parameter-as-an-obj
