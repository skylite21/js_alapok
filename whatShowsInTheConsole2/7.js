let scores = [53, 23, 20, 10, 35, 80];
function changeScores(scoreArray, fn) {
  let resultArray = [];
  for (let score of scoreArray) {
    resultArray.push(fn(score));
  }
  return resultArray;
}
function checkIfWinner(score){
  if (score >= 50) {
    return 'Winner';
  } else {
    return 'Looser';
  }
}
let winners = changeScores(scores, checkIfWinner);
console.log(winners);
