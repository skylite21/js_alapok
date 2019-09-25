setTimeout(function(){ console.log('Done'); }, 3000);

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
};

console.log('world');

sleep(500).then(() => {
  console.log('hello');
});

console.log('hello again');

const doSomething = async () => {
  await sleep(2000);
};

doSomething();


console.log('áhello again');
