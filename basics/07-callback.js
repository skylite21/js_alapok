
// Javascriptben a fügvény, egy másik fügvény bemeneti paramétere
// is lehet.

function wave(name) {
  console.log(name+' integet a kezével');
}

function sayHello(name, callback) {
  console.log(name+' azt mondja: -Szia!');
  // itt hívjuk meg azt a fügvény-t amit bemeneti paraméterként
  // kapott ez a fügvény. minden olyan fügvény-t amely egy másik
  // fügvénynek bemeneti paramétere: callback-nek hívunk. 
  // ezért neveztük el így ezt a bemeneti paramétert, de adhattunk
  // volna neki más nevet is...
  callback(name);
}

// a sayHello fügvény-t meghívjuk, melynek első argumentuma
// egy string, a második argumentuma egy fügvény
// fontos észrevenni hogy nem mi hívjuk meg a wave fügvényt nincs is ott a zárójel() !!
// hanem majd a sayHello fügvény meghívja helyettünk amikor odaér...
// a wave fügvény a bemeneti paraméterét sem itt kapja meg,
// hanem már a sayHello fügvény-en belül
sayHello('John', wave);

// callback fügvény lehet anonym függvény is!
// a következő esetben úgy adjuk át a callback-et a sayHello
// fügvénynek, hogy azt korábban nem deklaráltuk, itt hozzuk létre is
// Végülis a 'Peter' string sem egy változó, hanem ott hozzuk létre
// ezt fügvényekkel is meg lehet csinálni, de persze csak akkor van 
// ennek értelme, ha biztosan tudjuk hogy később ezt a fügvény-t a kódban
// máshol nem akarjuk felhasználni. Olyankor nem szükséges neki referenciát
// (változó nevet) csinálni.

sayHello('Peter', function(name) { console.log(name+' integet, és ugrál'); });


// a setTimeout fügvény egy javascript-be beépített fügvény, mint pl a console.log
// két bementi paramétre van 
// az első az egy callback, a másik pedig egy szám...
// a setTimeout a callback-et futtatja le a megadott idő leteltével (3000 miliseconds)

setTimeout(function(){ console.log('Done'); }, 3000);

// rövideben írva az előző sor (arrow functionnel):
// az arrow function a sima function egy rövidített változata
// lényegében a function szót lecseréljük egy nyílra =>
// a paramétereket pedig a nyíl elé írjuk zárójelben
// ha nincsenek bemeneti paraméterek akkor egy üres zárójelet kell írni:
setTimeout( () => { console.log('done'); }, 3000 );

// ha az arrow function belseje csak egyetlen utasításból áll akkor a 
// zárójel is elhagyható:
setTimeout( () => console.log('done'), 3000 );

// aszinkron műveletek esetén (olyan műveletek amik időbe telnek, pl
// egy internetes kommunikáció, adatbázis művelet, file művelet, stb
// ezek mind aszinkron műveletek mert időbe telik amíg lefutnak, ráadásul
// nagyon változó hogy meddig tartanak, pl ha egy gyengébb mobilneten chat-elsz
// akkor az üzenet sokkal lassabban megy át, mintha gyors az internet kapcsolatod...

// a továbbiakban a setTimeout fügvényt arra használjuk hogy "szimuláljunk"
// egy aszinkron műveletet (ami időbe telik...)

// pl az addUser fügvény itt úgy fog működni hogy a users tömbbe 200 miliszekundum
// után beteszi az új elemet (az új elem a bemeneti paramétere , a username változó)

let users = ['sam', 'john', 'peters'];

function addUser(username) {
  setTimeout( () => { users.push(username); 
  }, 200 );
}

// hasonlóan ez a fügvény pl kiírja a users tömb tartalmát 
// de 100milisecundum késleltetéssel:

function getUsers() {
  setTimeout( () => { console.log(users);
  }, 100 );
}

// az alábbi két fügvény tehát fordított sorrendbe 
// fog lefutni mert az addUser-es fügvény 200 miliszekundum-ig tart
// a getUsers fügvény pedig 100 miliszekundumig

// Más programozási nyelvekben ez a két fgv hívás egymás után futna le
// pont úgy amilyen sorrendben beírtuk, tehát először az addUser, utána a
// getUsers... javascriptben azonban ez a két fügvény pont fordítva fog lefutni
// mert gyakorlatilag egyszerre hívódnak meg, de mivel a getUsers korábban végez
// ezért az abban lévő console.log előbb fog kiíródni.

addUser('Jim');
getUsers();  // ez előbb végez, ezért ezt látjuk hamarabb!!


// az előző problémát úgy tudjuk megoldani ha 
// egy callback functionként futtatjuk azt a fügvényt 
// amit mindenképp később szeretnénk futtatni

function addUser2(username, callback) {
  setTimeout( () => { 
    users.push(username); 
    callback();
  }, 300 );
}

function getUsers2() {
  setTimeout( () => { console.log(users);
  }, 200 );
}

// // az előző két fügvényt "kényszerített" sorrendben
// így tudjuk felhasználni: a getUsers2 egy callback:
addUser2('Jim', getUsers2);

// videó az előző példáról: 
// https://www.youtube.com/watch?v=xHneyv38Jro

// callback-nek nevezzük az olyan fügvényt ami
// paraméterként (bemeneti argumentumként) adódik át egy másik fügvényben.
// a fenti példában a getUsers egy callback function
// attól még hogy valami callback fügvény még nem biztos
// hogy aszinkron. Itt a setTimeout fügvény az ami 
// asnyc-á teszi a műveletet. ha csak sima fügvény lenne
// setTimeout nélkül akkor szinkron módon futna

// a functional programmingban, a map, és a reduce
// callback functionökkel dolgozik, illetve 
// az event listener-ek is * lásd, functional.js
