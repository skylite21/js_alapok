
// 2.2 what shows in the console?

health = 100;
let shoot = () => {
  console.log('That arrow hits you');
  health = health - 10;
  console.log('Your health is: '+health);
};

shoot();

let heal = function() {
  console.log('You healed.');
  console.log('Your health is: '+health);
  health = health + 10;
};

heal();
