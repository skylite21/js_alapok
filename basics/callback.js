let users = ['sam', 'john', 'peters'];


// a setTimeout fügvény két paraméterrel dolgozik, 
// az első az egy fügvény, a másik pedig egy szám...
// az adott fügvényt futtatja le a megadott időn belül

// pl az addUser fügvény úgy fog működni hogy a users tömbbe 200 milisecundum
// után beteszi az új elemet (a username bemeneti paraméterbe amit megkap)

// function addUser(username) {
//   setTimeout( () => { users.push(username); 
//   }, 200 );
// }

// hasonlóan ez a fügvény pl kiírja a users tömb tartalmát de 100milisecundum késleltetéssel:
// function getUsers() {
//   setTimeout( () => { console.log(users);
//   }, 100 );
// }
//

// az alábbi két fügvény tehát fordított sorrendbe fog történni mert az addUser-es fügvényen belül
// több a késleltetés:
// addUser('Jim');
//
// getUsers();
//
//

function addUser(username, callback) {
  setTimeout( () => { 
    users.push(username); 
    callback();
  }, 200 );
}

function getUsers() {
  setTimeout( () => { console.log(users);
  }, 100 );
}

addUser('Jim', getUsers);
