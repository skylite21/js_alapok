let score = 34;
if (score >= 50) {  
  console.log('player gets gold medal');
} else if (score >= 20 && score < 50) {
  console.log('player gets silver medal');
} else if (score < 20 && score > 5) {
  console.log('player gets bronze medal');
} else {
  console.log('player gets nothing');
}
