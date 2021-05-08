
// 7.1 what shows in the console?

let weapon = 'hammer';
let armor = 43;
let damage = 20;

if( (weapon === 'hammer') && (armor > 50) ) {
  damage = damage + 30; 
  console.log('extra damage!');
} 

let speed = 10;
if(damage > 40 || armor > 40) {
  let speed = 50;
  console.log('we can run');
}

console.log(speed);

