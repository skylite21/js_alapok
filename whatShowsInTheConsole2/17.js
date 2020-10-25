let player1 = {
  name: 'John',
  
  score: 10
};
let player2 = player1;
player2.score = 40;
console.log(player1.score);
console.log(player2.score);


