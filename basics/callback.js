let users = ['sam', 'john', 'peters'];

// function addUser(username) {
//   setTimeout( () => { users.push(username); 
//   }, 200 );
// }
//
// function getUsers() {
//   setTimeout( () => { console.log(users);
//   }, 100 );
// }
//
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
