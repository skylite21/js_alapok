net = require('net');

let sockets = [];

const s = net.Server( (socket) => {

  sockets.push(socket);
  socket.on('data', (d) => {
    for (let i=0; i<sockets.length; i++) {
      if (sockets[i] == socket) continue;
      sockets[i].write(d);
    }
  });

  socket.on('end', () => {
    let i = sockets.indexOf(socket);
    sockets.splice(i, 1);
  })
} );

s.listen(8000);
