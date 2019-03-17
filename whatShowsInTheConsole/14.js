
//callback hell
function getServerStatus(id, callback) {
  setTimeout(function() {
    if (typeof(id) !== 'number') {
      callback(new Error('ID is not a number!'));
      return;
    }
    const result = `server ${id} is online`;
    callback(null, result);
  }, 1000);
}

getServerStatus(1, function(error, result) {
  console.log(result);
});

getServerStatus(2, function(error, result) {
  console.log(result);
});

getServerStatus(3, function(error, result) {
  console.log(result);
});

// getServerStatus(1, function(error, result) {
//   console.log(result);
//   getServerStatus(2, function(error, result) {
//     console.log(result);
//     getServerStatus(3, function(error, result) {
//       console.log(result);
//       getServerStatus(4, function(error, result) {
//         console.log(result);
//         getServerStatus(5, function(error, result) {
//           console.log(result);
//           getServerStatus(6, function(error, result) {
//             console.log(result);
//           });
//         });
//       });
//     });
//   });
// });
//
//
