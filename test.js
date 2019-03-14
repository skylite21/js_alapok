let player = {
  name: 'John',
  score: 35,
  levelUp: function() {
    console.log('LevelUP happens!');
  }
};
let player2 = {
  name: 'Mike',
  score: 35
};
player2.levelUp = player.levelUp;
player2.levelUp();



