let scores = [32, 54, 12, 3, 95];
let i = 0;
let firstWinnerFound = false;
while (!firstWinnerFound) {
  if (scores[i] >= 50) {
    firstWinnerFound = true;
    break;
  }
  i++;
}
if (firstWinnerFound) {
  console.log('we have a winner!');
}
