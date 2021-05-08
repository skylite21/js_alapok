
// 10. what shows in the console?


const toDos = ['buy potatos', '', 'take out the trash', 'clean the kitchen'];

// console.log(toDos[4]);

// for (let toDo of toDos) {
//   // empyt string is falsy
//   if(toDo) {
//     console.log('today I have to: '+toDo);
//   }
// }


for (let toDo of toDos) {
  // értékadás (value assignment)
  toDo = 'ready';
}

console.log(toDos);
//
for( let i=0; i<toDos.length; i++) {
  toDos[i]='ready';
}

console.log(toDos);

