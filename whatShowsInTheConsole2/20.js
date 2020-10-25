let player = {
  name: 'John',
  levelUp: function(health){
    console.log(this.name+' leveled up with: '+health);
  }
};
player2 = {
  name: 'Emily'
};
player.levelUp.call(player2,43);
player.levelUp.apply(player2, [42]);
let emilyUP = player.levelUp.bind(player2, [43]);
emilyUP();


