
// 9.1 what shows in the console?

const scores = [12, 4, 59, 43];
// console.log(scores[4]);

for (let i = 0; i < scores.length; i++) {
  if (scores[i] >= 80) {
    console.log('we have a winner');
  }
}
//
// // for of loop...
for (let score of scores) {
  if(score <= 50) {
    console.log('under minimum');
  }
}

