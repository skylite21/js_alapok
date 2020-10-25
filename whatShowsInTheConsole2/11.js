let player = {
  name: 'John',
  score: 35,
  levelUp: function() {
    console.log(this);
  }
};
player.levelUp();

