let scores = [32, 54, 12, 3, 95];
let winners = 0;
for (let i = 0; i < scores.length; i++) {
  if (scores[i]>=50) {
    winners = winner + 1;
  }
}
console.log('we have '+winners+' winner(s)');

