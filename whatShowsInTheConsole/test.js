
let myStatus;
function sayHello() {
  console.log('hello');
  myStatus = 'online';
}

setTimeout(sayHello, 1000);

console.log(myStatus);



