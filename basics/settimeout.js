setTimeout(function(){ console.log('Done'); }, 3000);

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

console.log('world');

sleep(500).then(() => {
  //do stuff
  console.log('hello');
})

console.log('hello again')

const doSomething = async () => {
  await sleep(2000)
  //do stuff
}

doSomething()


console.log('áhello again')
