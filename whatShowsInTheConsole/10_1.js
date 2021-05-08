
// 10.1 what shows in the console?

let persons = [['John', '23', 'male'], ['Kate', '20', 'female']];

// for(let person of persons) {
//   if(person[2] === 'male') {
//     console.log(person[0], 'is a male');
//     if(person[1] >= 18) {
//       console.log(person[0], 'is adult');
//     }
//   }
// }

let females = 0;
for (let i = 0; i < persons.length; i++) {
  if (persons[i][2] === 'female') {
    females++;
  }
}

if( females === 1 ) {
  console.log('we have', females, 'female');
} else {
  console.log('we have', females, 'females');
}
