
// 11 what shows in the console?


function getStatus() {
  let server = false;
  function getServerStatus() {
    server = true;
  }
  if(server) {
    return true;
  }
}

console.log(getStatus());
getServerStatus();
