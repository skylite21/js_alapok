

// ha a stöbb olyan fügvényünk van ami async és mindegyiket
// egymás után akarjuk mindenképp futtatni akkor
// az első megoldás nem jó mert ez mindhárom
// teljesen egyszerre történik meg
//callback hell
function getServerStatus(id, callback) {
  setTimeout(function() {
    const result = `server ${id} is online`;
    callback(null, result);
  }, 1000);
}

// 1 megoldás:
getServerStatus(1, function(error, result) {
  console.log(result);
});

getServerStatus(2, function(error, result) {
  console.log(result);
});

getServerStatus(3, function(error, result) {
  console.log(result);
});


// 2. megoldás
// itt már egymás után kérdezzük le a szerverek statusát de a kód undorító, 
// ezt hívják callback hell-nek

getServerStatus(1, function(error, result) {
  console.log(result);
  getServerStatus(2, function(error, result) {
    console.log(result);
    getServerStatus(3, function(error, result) {
      console.log(result);
      getServerStatus(4, function(error, result) {
        console.log(result);
        getServerStatus(5, function(error, result) {
          console.log(result);
          getServerStatus(6, function(error, result) {
            console.log(result);
          });
        });
      });
    });
  });
});
