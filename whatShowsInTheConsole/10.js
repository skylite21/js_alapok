

// 10. what shows in the console?

const toDos = ['buy potatos', '', 'take out the trash', 'clean the kitchen'];

console.log(toDos[4]);

for (let toDo of toDos) {
  if(toDo) {
    console.log('today I have to: '+toDo);
  }
}

for (let toDo of toDos) {
  toDo = 'ready';
}

console.log(toDos);
