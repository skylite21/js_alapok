
// 9.1 what shows in the console?

scores = [12, 43, 59, 80];

for (let i = 0; i <= scores.length; i++) {
  if (scores[i] >= 80) {
    console.log('we have a winner');
  }
}

for (let score of scores) {
  if(score <= 50) {
    console.log('under minimum');
  }
}
