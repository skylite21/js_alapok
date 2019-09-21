
// implicit global változó lesz a szoveg
// global: a szoveg valtozo mindenhol elérhető lesz a kódban
// implicit golbal valtozot lehetoleg ne hasznaljunk!
szoveg = '3';
console.log(szoveg);

//------------------------------------------------------- 
//-------- SZEKVENCIA ----------------------------------- 
//------------------------------------------------------- 
// szekvencia: a program az utasításokat, soronként hajtja végre 

// egymás után..

// ez egy ujradeklarálható változó lesz (a kódban később is
// beírhatjuk hogy var szoveg2..
var szoveg2 = 'valami';
console.log(szoveg2);

// erre nem kapunk hibát mert a var kulcsszóval deklarált változót újradeklarálhatjuk
var szoveg2 = 'valami';

console.log('Hello\nEzt ujsorbairom\tEzt egytabbal beljebb irom');
console.log('XXXXXXXXXXXXXXXXXXXXX\rcarrige return');



let szoveg3 = 'szoveg3 ezt let-el hoztuk letre';
console.log(szoveg3);
// a let kulcsszoval letrehozott valtozokat nem lehet ujradeklaralni, 
// a kovetkezo sort ha nem kommentezzuk, hibat kapunk:
// let szoveg3 = 'szoveg3 ezt let-el hoztuk letre';

// ez egy értékadás, nem deklarálás: 
szoveg3 = 'uj erteket kap a szoveg3';


szoveg3 = 'uj erteket kap a szoveg3';

//------------------------------------------------------- 
//------------------------------------------------------- 
//--------------- Adattípusok ---------------------------
//------------------------------------------------------- 
//------------------------------------------------------- 
// Adattípusok/primitive-ek javascript-ben:
// Number: lebegőpontos számok, decimális és egész számok
// String: karakterlánc, szövegekre
// Boolean: Logikai változó, true vagy false értéket vehet fel
// Undefined: Egy olyan adattípus amelynek az értéke még nem meghatározott
// Null: üres érték

// Dynamic Typing: Nem szükséges definiálnunk a változók
// típusát, automatikusan felismeri azokat a javascript

// automatic semicolon insertion:
// ha kihagyjuk a pontosvesszőt, akkor a javascript
// megpróbálja betenni helyettünk, (ez néha sikerül néha nem...)
// https://github.com/twbs/bootstrap/issues/3057

// a console.log egy fugveny, aminek átadjuk a szoveg3 valtozot
// a console.log a javascriptbe előre beépített fgv.

console.log(szoveg3);

// kiirathatunk egyszerre szoveget és változót is:
let szam1 = 94;
console.log('a szam1 valtozo értéke: '+szam1);


// a szoveg tipusa string:
console.log('szoveg3 tiupsa: '+typeof(szoveg3));
// a szam1 tipusát is kiiratjuk:
console.log('szam1 valtozo tipusa: '+typeof(szam1));

szam1 = 34;

let a = 3;
let b = 9;

console.log('a értéke: '+a+' b értéke: '+b);

// kicseréljük két változó értékét, egy haramdik (segédváltozó)
// segítségével
let c = a;
a = b;
b = c;

console.log('a értéke: '+a+' b értéke: '+b);

// boolean váltózó típus
// logikai változó, két féle lehet, true vagy false
let kapcsolo = false;

// number tipusú változót egyel növelünk:
szam++; // ez egy rövidebb jelölése annak hogy szam=szam+1

// number tipust egy másikkal növelünk:
szam+=b;   // ez ugyanaz mintha azt írnánk hogy szam = szam + b;

//------------------------------------------------------- 
//-------- Elágazás -------------------------------------
//------------------------------------------------------- 
//
// elágazás, ha a feltételben lévő rész igaz, akkor a {}-ban lévő rész
// lefut
if (kapcsolo === true) {
  console.log('A kapcsolo be van kapcsolva');
} else { // különben
  console.log('A kapcsolo ki van kapcsolva');
}

let nev = 'Geza';

// why not to use ==
typeof(NaN); // 'number'
0 == ''; //true
'' == '0'; //false
0 == '0'; //true
false == 'false'; //false
false == '0'; //true
' \t\r\n ' == 0; //true

// always use === to be sure, but still remember:

NaN === NaN; // false
NaN !== NaN; // true
// use isNaN() 


// három darab egyenlőségjellel hasonlítsunk össze értékeket
// a háromdarab egyenlőségjel a típust is hasonlítja 
// a kettő darab egyenlőségjel nem hasonlít tipust: pl
// 3 == '3' > true
// 3 === '3' > false

if ( nev === 'Geza') {
  console.log('geza itt van');
}

if ( a > b ) {
  console.log('a nagyobb mint b');
} else {
  console.log('a nem nagyobb mint b');
}

// ha nem egyenoseget vizsgálunk akkor azt így kell:
// itt is ha 2 db egyenlőségjel van akkor vizsgáljuk a típust is
// ha csak egy lenne akkor nem vizsgálnánk a típust...
// if ( a !== ) ...

// ---------------------------------------------------------------------
// ------------------------------   Operátorok -------------------------

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

console.log('uj sort a \n karakterrel lehet csinalni');

// ---------------------------------------------------------------------
// ------------------------------   Ciklusok ---------------------------
// ---------------------------------------------------------------------

// a {} -ban lévő rész addig fut, amíg a while-ban lévő feltétel igaz
while ( szam > 0 ) {
  console.log('szam-bol levontunk egyet: '+szam);
  szam--;
}

// végtelen ciklus: 
// while (true) {
// }

// ezt a változó típust tömbnek hívjuk
// több elemet tartalmazhat a tömb
let szamok = [3,4,5,6,4,6,9];
let numbers = new Array(23, 34, 45, 5);

console.log('a szamok típusa '+typeof(numbers));
// a javascriptben a tömb is object
console.log('a szamok típusa '+typeof(szamok));
console.log('a tomb nulladik eleme: '+szamok[0]);

// a tomb 7 elemű de nincs 7edik eleme mert nullától indexeljük
// a tömböket
console.log('a tomb hetedik eleme: '+szamok[7]);

// for ciklusban meg kell adni hogy mettől meddig menjünk
// és azt is hogy hányassával lépkedjünk, az i++ azt jelenti hogy 
// egyessével megyünk

var x = 0;
x++;
console.log('x = '+x);
x += 1;
console.log('x = '+x);

console.log('x = '+(++x));
console.log('x = '+(x++)); // ha mögé írod nem ad hozzá egyet ilyenkor!
// you have to know what you're doing, even if its javascript 

// for (let szam of szamok).... *see arrays...

for (let i = 0; i < szamok.length; i++ ) {
  // a szamok i-edik elemét kiírjuk:
  console.log('a szam: '+szamok[i]);
}

// ellenőrizzük hogy van e 9-es a tömbben:
for (let i = 0; i < szamok.length; i++ ) {
  if (szamok[i] === 9) {
    console.log('van a szamok kozott 9-es');
  }
}

let j = 0;
while ( j < szamok.length ) {
  console.log('a szam: '+szamok[j]);
  j++;
}

// ---------------------------------------------------------------------
// -----------------------------  Fügvények  ---------------------------
// ---------------------------------------------------------------------
// a fügvény egy olyan kódrész, amit később újra fel tudunk használni
// programming principle: DRY
// DRY =  Dont Repeat Yourself

// 1. function statement
// erre érvényes a hoisting
// statement: not produces any value, just performs an action

// az osszeadás fugvénynek két bementi paramétere van
function osszeadas(szam1, szam2) {
  // a szam1 és a szam2 number tipusu kell hogy legyen (mindkettő feltétel
  // igaz kell hogy legyen, ezért rakunk közé  &&  (AND) jelet
  if ( (typeof(szam1) === 'number') && (typeof(szam2) === 'number') ) {
    let eredmeny = szam1 + szam2;
    console.log ('az eredmeny: '+eredmeny);
  } else {
    console.log ('error, nem számot kaptam!');
  }
}

// itt használjuk fel az összeadás fügvényünket
osszeadas(6, 9);
osszeadas('34', 9);

// 2. Function Expression
// erre nem érvényes a hoisting
// expression: produces a value.. like 4 + 5 ...
let convertToNumber = function(szam) {
  let konvertaltSzam = parseInt(szam);
  if (isNaN(konvertaltSzam)) {
    konvertaltSzam = 0; 
    console.log('NaN-t kaptunk ezert nullazzuk');
  } else{
    console.log('konvertalas sikeres volt');
  }
};

convertToNumber('34');
convertToNumber('sdfsdf');

// camelCasing = aMasodikSzotolMindenBetutNagyBetuvelIrok
// JS-ben gyakran hasznnáljuk a camelCasing-et kivéve class-okra azoknak az első betűje is nagybetű
function pontosIdo() {
  // lokális változó, csak ebben a fugvenyben van értelme
  // variable scope: local
  let ido = 5; 
  console.log('a pontos ido: '+ido);
  // fugveny-re is érvényes a scope, ezt csak a pontosIdo-n 
  // belul tudom hasznalni
  // closure: ha ketto fugveny van egymásban akkor a belső fügvény
  // hozzáfér a külső fügvény változóihoz
  function pontosIdo2() {
    console.log('az ido értéke: '+ido);
  }
  pontosIdo2();
}

// itt hasznaljuk a pontosIdo fugvényt 
pontosIdo();

// pontosIdo2();
// az ido valtozonak itt nincs ertelme, mert a pontosIdo fgv-en belul
// deklaráltuk, 
// console.log('a pontos ido: '+ido);


// IIFE: immidiately invoked function expression:
// ez egy névtelen fügvény ami egyből meghívódik
// nem kell külön meghívni és nem is lehet
(function() {
  console.log('ez egyből meghívódik');
})();

