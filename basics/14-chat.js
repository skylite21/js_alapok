// we can also create a chat application with sockets
// this is lower level
// we'll use the net library instead of http
const net = require('net');

let sockets = [];

const s = net.Server( (socket) => {

  sockets.push(socket);
  socket.on('data', (d) => {
    for (let i=0; i < sockets.length; i++) {
      if (sockets[i] == socket) continue;
      sockets[i].write(d);
    }
  });

  socket.on('end', () => {
    let i = sockets.indexOf(socket);
    sockets.splice(i, 1);
  });
} );

console.log('server is listening at port 8000...');
// a telnet programot telepíteni kell a gépedre, (windows-on pl putty tud telnetezni csak át kell kapcsolni!)
// apt install telnet; brew install telnet...
console.log('run `telnet localhost 8000` from multiple command line windows, and start typing');
s.listen(8000);

// https://www.youtube.com/watch?v=jo_B4LTHi3I
