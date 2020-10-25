let player = {
  name: 'John',
  score: 35,
  levelUp: function() {
    function calculateNewLevel() {
      console.log(this);
    }
    calculateNewLevel();
  }
};
player.levelUp();
