let users = ['sam', 'john', 'peters'];

// a setTimeout fügvénynek két bementi paramétre van 
// az első az egy fügvény, a másik pedig egy szám...
// a fügvényt futtatja le a megadott idő leteltével (3000 miliseconds)

setTimeout(function(){ console.log('Done'); }, 3000);

// rövideben írva az előző sor (arrow functionnel):
setTimeout( () => console.log('done'), 3000 );

// pl az addUser fügvény úgy fog működni hogy a users tömbbe 200 miliseconds
// után beteszi az új elemet (a username bemeneti paraméterbe amit megkap)

// function addUser(username) {
//   setTimeout( () => { users.push(username); 
//   }, 200 );
// }

// hasonlóan ez a fügvény pl kiírja a users tömb tartalmát 
// de 100milisecundum késleltetéssel:
// function getUsers() {
//   setTimeout( () => { console.log(users);
//   }, 100 );
// }
//

// az alábbi két fügvény tehát fordított sorrendbe 
// fog történni mert az addUser-es fügvényen belül
// több a késleltetés:
// addUser('Jim');
//
// getUsers();
//
//
// az előző problémát úgy tudjuk megoldani ha 
// egy callback functionként futtatjuk azt a fügvényt 
// amit mindenképp később szeretnénk futtatni

// function addUser(username, callback) {
//   setTimeout( () => { 
//     users.push(username); 
//     callback();
//   }, 200 );
// }

// function getUsers() {
//   setTimeout( () => { console.log(users);
//   }, 100 );
// }
//
// // az előző két fügvényt "kényszerített" sorrendben
// így tudjuk felhasználni: a getUsers egy callback:
// addUser('Jim', getUsers);

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
