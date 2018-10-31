
// 7.1 what shows in the console?

weapon = "hammer";
armor = 43;
damage = 20;

if( (weapon === "hammer") && (armor > 50) ) {
  damage = damage + 30; 
  console.log('extra damage!');
}

if(damage > 40 || armor > 40) {
  speed = 50;
  console.log('we can run');
}



