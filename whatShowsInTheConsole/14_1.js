
// 14 what shows in the console?

function getServerStatus(id) {
  return new Promise(function (resolve, reject) {
    setTimeout(function() {
      if (typeof(id) !== 'number') {
        reject(new Error('ID is not a number!'));
      }
      const result = `server ${id} is online`;
      resolve(result);
    }, 1000);
  });
}

getServerStatus(1).then(response => {console.log(response); }, error => {console.log(error); });

// getServerStatus('asd')
//   .then((response) => {console.log(response); })
//   .catch((error) => {console.log(error); });
//

getServerStatus(2)
  .then(response => console.log(response))
  .catch(error => console.log(error));


getServerStatus(3)
  .then((response) => {console.log(response); return getServerStatus(4); }) 
  .then((response) => {console.log(response); return getServerStatus(5); })
  .then((response) => {console.log(response); })
  .catch(error => console.log(error));  // same as .then(undefined, function(){..})
