let db = true;
const promise = new Promise( (resolve, reject) => {
  console.log('start value is 2');
  if (db) {
    resolve(2);
  } else {
    reject(false);
  }
});


function errorhandler(err){
  console.log('error', err);
}

function first(value) {
  console.log('adding 1');
  // throw new Error("test error outside");
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

promise
  .then(first).catch(errorhandler)
  .then(second).catch(errorhandler)
  .then(third).catch(errorhandler)
  .then( (response) => {console.log('the response is', response); });
