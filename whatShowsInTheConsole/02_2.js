
// 2.2 what shows in the console?

let health = 100; // number

let shoot = function() {
  console.log('That arrow hits you');
  health = health - 10;
  console.log('Your health is: '+health);
};

shoot();

// arrow function
let heal = () => {
  console.log('You healed.');
  health = health + 10;
  console.log('Your health is: '+health);
};

heal();
