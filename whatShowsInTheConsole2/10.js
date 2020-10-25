
let player = {
  name: 'John',
  lastName: 'Smith',
  health: 100,
  winner: false,
  shoot: function(shot) {
    this.health = this.health - shot;
  }
};
console.log('Welcome '+player.name+'!');
player.shoot(42);
console.log(player.name+' got shot, health: '+player.health);
