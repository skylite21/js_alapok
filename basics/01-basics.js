
// a kódban mindenhol a két darab perjel után lévő rész: az a sor onnantól comment.

/* ez is comment
még mindíg
idáig */

// a comment-et nem próbálja a javascript kódként értelmezni, egyszerűen figyelmen
// kívül hagyja

// global variable: a valtozo mindenhol elérhető lesz a kódban
// akkor használjuk ha egy változót a kód összes részében el akarunk érni
// lehetőleg global valtozobol minél kevesebbet használjunk, mert memória igényes+insecure
// úgy tudunk csinálni global változót hogy közvetlenül a file-on belül
// és nem pedig egy fügvényen vagy classon vagy bármin belül hozzuk létre.

var szoveg = 'valami'; // <- Global!


//------------------------------------------------------- 
//-------- SZEKVENCIA ----------------------------------- 
//------------------------------------------------------- 
// fontos alapelv: szekvencia: a program az utasításokat mindíg soronként hajtja végre 
// egymás után.. line by line..
// kivéve ha async! (később)


// var: ez egy ujradeklarálható változó lesz (a kódban később is
// beírhatjuk hogy var szoveg2..
var szoveg2 = 'valami';
console.log(szoveg2);

// erre nem kapunk hibát mert a var kulcsszóval deklarált változót újradeklarálhatjuk
var szoveg2 = 'valami';

console.log('Hello\nEzt ujsorbairom\tEzt egytabbal beljebb irom');
console.log('uj sort a \n karakterrel lehet csinalni');

// soha nem használtam még de cli appoknál lehet jó valamire:
console.log('XXXXXXXXXXXXXXXXXXXXX\rcarrige return');

let szoveg3 = 'szoveg3 ezt let-el hoztuk letre';
console.log(szoveg3);
// a let kulcsszoval letrehozott valtozokat nem lehet ujradeklaralni, 
// a kovetkezo sort ha nem kommentezzuk, hibat kapunk
// mert már korábban a kódban létrehoztuk:
// let szoveg3 = 'szoveg3 ezt let-el hoztuk letre';

// ez egy értékadás, nem deklarálás, ilyet bármikor lehet csinálni 
// hogy új értéket adunk egy változónak. 
szoveg3 = 'uj erteket kap a szoveg3';

szoveg3 = 'uj erteket kap a szoveg3';

// ha const-al hozzuk létre a változót, akkor viszont új értéket
// sem kaphat.
const pi = 3.14;
console.log(pi);
// ezt már nem lehet:
// pi = 5.3;


//------------------------------------------------------- 
//                var vs let vs const
//------------------------------------------------------- 

// alap szabály: mindíg const-ot használjunk, 
// csak akkor használjunk let-et, ha később meg akarjuk
// változtatni a változó értékét
// var-t soha ne használjunk!
// read more: https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75

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

// A javascript Dynamic Typing-olt nyelv: Nem szükséges 
// definiálnunk a változók típusát, automatikusan 
// felismeri azokat a javascript

// automatic semicolon insertion:
// ha kihagyjuk a pontosvesszőt, akkor a javascript
// megpróbálja betenni helyettünk, (ez néha sikerül néha nem...)
// https://github.com/twbs/bootstrap/issues/3057

// a console.log egy fugveny, aminek átadjuk a szoveg3 valtozot
// a console.log a javascriptbe előre beépített fgv.

console.log(szoveg3);

// kiirathatunk egyszerre szoveget és változót is:
let szam = 94;
console.log('a szam valtozo értéke: '+szam);
// vagy: template literals:
console.log(`a szam valtozo értéke: ${szam}`);


// a szoveg tipusa string:
console.log('szoveg3 tiupsa: '+typeof(szoveg3));
// a szam1 tipusát is kiiratjuk:
console.log('szam1 valtozo tipusa: '+typeof(szam));

szam = 34;

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
// legkissebb helyet foglalja, (1bit!) de csak két értéked van
let kapcsolo = false;

// number tipusú változót egyel növelünk:
szam++; // ez egy rövidebb jelölése annak hogy szam=szam+1

// number tipust egy másikkal növelünk:
szam+=b;   // ez ugyanaz mintha azt írnánk hogy szam = szam + b;

//------------------------------------------------------- 
//-------- Elágazás -------------------------------------
//------------------------------------------------------- 
//
// elágazás, ha a feltételben () lévő rész igaz, akkor a {}-ban lévő rész
// lefut
if (kapcsolo === true) {
  console.log('A kapcsolo be van kapcsolva');
} else { // különben
  console.log('A kapcsolo ki van kapcsolva');
}

let nev = 'Geza';

// három darab egyenlőségjellel hasonlítsunk össze értékeket
// a háromdarab egyenlőségjel a típust is hasonlítja 
// a kettő darab egyenlőségjel nem hasonlít tipust: pl
3 == '3'; // true
3 === '3'; // false

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

// why not to use ==
// ha két darab egyenlőségjelet használsz,
// a javascript nem fog típust vizsgálni,
// és ez eléggé furcsa eredményeket szül:
0 == ''; //true
'' == '0'; //false
0 == '0'; //true
false == 'false'; //false
false == '0'; //true
' \t\r\n ' == 0; //true

// mindíg 3db egyenlőségjellel vizsgálj értékeket
// always use === to be sure, but still remember:
// a NaN típus (Not a Number type) nagyon fura:
typeof(NaN); // 'number'
NaN === NaN; // false
NaN !== NaN; // true
// ha valamiről meg akarod nézni hogy NaN típusú e, 
// használd az isNaN() fügvényt.
// akkor kaphatsz NaN-t pl ha egy weboldalon a beviteli mezőkbe
// a felhasználó által beütött értékeket nem konvertálod számmá 
// mert amúgy előfordul hogy a user számot üt be és neked az 
// számként is kell (matematikai műveleteket akarsz végezni rajta)
// de a JS string-ként menti le.


// ---------------------------------------------------------------------
// ------------------------------   Operátorok -------------------------

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence


// ---------------------------------------------------------------------
// ------------------------------   Ciklusok ---------------------------
// ---------------------------------------------------------------------

// a {} -ban lévő rész addig fut, amíg a ()-ban lévő feltétel igaz
szam = 10;
while ( szam > 0 ) {
  console.log('szam-bol levontunk egyet: '+szam);
  szam--;
}

// végtelen ciklus: a {}-ban lévő rész, örökké fog futni
// mert a while-ban lévő feltétel, soha nem lesz false
// while (true) {
// console.log('the world is infinite here');
// }

// ezt a változó típust tömbnek hívjuk:
// több elemet tartalmazhat a tömb
let szamok = [3,4,5,6,4,6,9];

// egy tömbnél nem számít hogy const-al hozzuk létre,
// abból a szempontból, hogy a tömb elemei attól még
// módosíthatóak lesznek, de ezután persze azt hogy
// const mindenfele = ... ezt már később a kódban
// nem írhatjuk le.
// a tömb tartalmazhat elég sok típust:
const mindenfele = [ 'ez egy string',         // a tömb első eleme egy string
  4,                                          // a tömb második eleme egy number
  {myKey: 'objecten belüli string'},          // a tömb harmadik eleme egy object
  ['John', 'Peter'],                          // a tömb negyedik eleme egy tömb, kettő stringet tartalmaz
  NaN,                                        // a tömb ötödik eleme egy NaN típus (not a number type)
  // a kapcsos zárójel végéig a tömbök elemeit soroljuk vesszővel
  // elválasztva. Ezt ahogy látod lehet külön sorokba is írni
];

// a tömb elemeire így tudunk hivatkozni:
console.log(mindenfele[0]); // 'ez egy string'
console.log(mindenfele[2].myKey); // 'objecten belüli string'
console.log(mindenfele[3][0]); // 'John'

// így is lehet tömböt csinálni
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
console.log('x = '+(x++)); // ha mögé írod nem ad hozzá egyet kiíráskor, de utána igen
console.log(x); // itt viszont már növelve lesz az x 1-el az előző sor miatt

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

// egy tömbön végig menni a for..of loop-al is lehet pl:
// for (let szam of szamok).... *see in arrays.js

// while-al is végig lehet menni egy tömbön, pl:
let j = 0;
while ( j < szamok.length ) {
  console.log('a szam: '+szamok[j]);
  j++;
}
console.log(j); // -- itt még létezik a j változó, míg
// az előző két for ciklus esetén az i változó a ciklus 
// után már nem él! *lásd var-let-const-semis.js

// ---------------------------------------------------------------------
// -----------------------------  Fügvények  ---------------------------
// ---------------------------------------------------------------------
// a függvény egy olyan kódrész, amit később újra fel tudunk használni
// programming principle: DRY
// DRY =  Dont Repeat Yourself

// fügvényt létrehozni két féle képpen lehet
// - function statement
// - function expression

// 1. function statement
// erre érvényes a hoisting *see hoisting.js
// statement azt jelenti: not produces any value, just performs an action
// ettől még egy fügvény produkálhat value-t.. nem a fügvényre monduk ezt, hanem a statement-re

// az osszeadás fugvénynek két bementi paramétere van
function osszeadas(szam1, szam2) {
  // a szam1 és a szam2 number tipusu kell hogy legyen (mindkettő feltétel
  // igaz kell hogy legyen, ezért rakunk közé  &&  (AND) jelet
  if ( (typeof(szam1) === 'number') && (typeof(szam2) === 'number') ) {
    const eredmeny = szam1 + szam2;
    console.log ('az eredmeny: '+eredmeny);
  } else {
    console.log ('error, nem számot kaptam!');
  }
}

// itt használjuk fel az összeadás függvényünket
osszeadas(6, 9);
// ez hibát fog adni, 'error, nem számot kaptam' üzenetet fogunk látni
// mert azelső paraméter egy string, a fügvény pedig ellenőrzi hogy stringet
// kapott e...
osszeadas('34', 9);

// 2. Function Expression
// erre nem érvényes a hoisting *lásd: hoisting.js
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

// a javascriptben a fügvények valójában értékek.
// functions are values!! read more: https://javascript.info/function-expressions

convertToNumber('34');
convertToNumber('sdfsdf');

// camelCasing = aMasodikSzotolMindenBetutNagyBetuvelIrok
// JS-ben gyakran hasznnáljuk a camelCasing-et kivéve class-okra azoknak az első betűje is nagybetű
// a camelCasing sok más programozási nyelvekben is használatos


// programozásban még alap fogalmak:

// intelisense, code completion: kód kiegészítés, ez lényegében
// annyit jelent, hogy ha programozol, és jól vanbeállítva az editorod
// akkor az editor ahogy gépelsz felajánlja neked a már begépelt szavakat,
// beépített fügvényeket, metódusokat, stb, így nem kell mindent fejbetartani
// és gyorsabb a gépelés is, mert kiválaszthatod a lenyíló menüből a felajánlott
// dolgokat
// code completion, vagy intelisense: amikor felajánlja a dolgokat az editor

// syntax checker, vagy linter: a kódban lévő hibákra 
// hívja fel a figyelmedet, és miközbe írod a kódot
// az editorod figyelmeztet rá, ha valamit hibásan írsz. 
// a linter által írt hibák még nembiztos hogy a kódod hibás futását
// eredményezik, szoktak csak esztétikai dolgok is lenni...


// mint minden programozási nyelvben, itt javascript-ben is 
// számít az hogy milyen verziót használsz. 
// a javascript különböző verzióit EcmaScript-nek hívjuk.
// EcmaScript: a javascript szabvány verziói...
// https://en.wikipedia.org/wiki/ECMAScript
