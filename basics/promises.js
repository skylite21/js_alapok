db = false;
const promise = new Promise( (resolve, reject) => {
  console.log('start value is 2');
  if (db) {
    resolve(2);
  } else {
    reject('asd');
  }
});

promise
  .then(first).catch(errorhandler)
  .then(second).catch(errorhandler)
  .then(third).catch(errorhandler)
  .then( (response) => {console.log(response); });

function errorhandler(){
  console.log('error');
  return Promise.reject(err);
}

function first(value) {
  console.log('adding 1');
  return value+1;
}

function second(value) {
  console.log('adding 2');
  return value+2;
}

function third(value) {
  console.log('adding 3');
  return value+3;
}
