// ha több olyan fügvényünk van ami async, vagy sok a callback, és mindegyiket
// egymás után akarjuk mindenképp futtatni akkor kerülünk szembe
// azzal a jelenséggel amit úgy hívnak hogy:
// callback hell

// vegyük az alábbi fügvényt ami lekérdezi egy adott
// szerver status-át, id alapján, majd a státusz
// lekérdezése után futtatunk egy callback-et.
// a callback első paramétere egy null (ide tehetnénk egy kis)
// hiba kezelést, mondjuk egy if-et, amikor is az első paraméter
// a hiba lenne, a második pedig az eredmény amit kaptunk
// ezt hívják error first callback function-nek:
// https://www.youtube.com/watch?v=0h8r2K7ZHZU

function getServerStatus(id, callback) {
  setTimeout(function() {
    const result = `server ${id} is online`;
    callback(null, result);
  }, 1000);
}

// 1 megoldás: ez nem működik, mind a három egyszerre fog lefutni:
// holott mi azt akarnánk elérni hogy egymás után fussanak
// de ez csak annyit csinál hogy elindítja a három kérést egyszerre.
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


// 2. megoldás
// itt már egymás után kérdezzük le a szerverek statusát de a kód undorító,
// mert nehezen érthető, komplexebb kód átláthatatlan és érthetetlen lesz tőle
// ezt hívják callback hell-nek

console.log('callback-ekkel:');
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

// ha még error handlinget is szeretnénk akkor igy nézne ki:
// undorító, átláthatatlan, kezelhetetlen, fenntarthtatlan... 
// de régen csak ez volt! hálistennek ma már vannak Promise-ok és async
// fügvények *lásd: promises-fetch.js

getServerStatus(1, function(error, result) {
  if (error) {
    console.log(error);
  } else {
    console.log(result);
  }
  getServerStatus(2, function(error, result) {
    if (error) {
      console.log(error);
    } else {
      console.log(result);
    }
    getServerStatus(3, function(error, result) {
      if (error) {
        console.log(error);
      } else {
        console.log(result);
      }
      getServerStatus(4, function(error, result) {
        if (error) {
          console.log(error);
        } else {
          console.log(result);
        }
        getServerStatus(5, function(error, result) {
          if (error) {
            console.log(error);
          } else {
            console.log(result);
          }
          getServerStatus(6, function(error, result) {
            if (error) {
              console.log(error);
            } else {
              console.log(result);
            }
          });
        });
      });
    });
  });
});
