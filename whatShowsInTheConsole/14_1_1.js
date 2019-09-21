
// 14_1_1 what shows in the console?


function transferUser(username, transport) {
  let user = {};
  user.name = username;
  user.position = {};
  console.log(user.name+' is going to travel');
  transport(user);
}

function goToBudapest(user) {
  user.position.x = 47.515074;
  user.position.y = 19.077543;
  console.log(user.name+' is arrived');
}

// callback: olyan fügvény ami bemeneti paraméterként adódik át egy másik fügvénynek
transferUser('John', goToBudapest);
