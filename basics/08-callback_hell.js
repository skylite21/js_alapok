
// ha a stöbb olyan fügvényünk van ami async, vagy sok a callback, és mindegyiket
// egymás után akarjuk mindenképp futtatni akkor:
// callback hell
function getServerStatus(id, callback) {
  setTimeout(function() {
    const result = `server ${id} is online`;
    callback(null, result);
  }, 1000);
}

// 1 megoldás: természetesen nem működik, mind a három egyszerre fog lefutni:
// holott mi azt akarnánk elérni hogy egymás után fussanak
console.log('callback nélkül:');
getServerStatus(1, function(error, result) {
  console.log(result);
});

getServerStatus(2, function(error, result) {
  console.log(result);
});

getServerStatus(3, function(error, result) {
  console.log(result);
});


console.log('callback-ekkel:');
// 2. megoldás
// itt már egymás után kérdezzük le a szerverek statusát de a kód undorító,
// mert nehezen érthető, komplexebb kód átláthatatlan és érthetetlen lesz tőle
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
