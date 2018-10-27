const http = require('http');

const server = http.createServer( (req, res) => {
  res.writeHead(200, {'content-type': 'text/plain', });
  res.write('hello\n');
  setTimeout( () => {res.end('world\n')}, 2000 );
});

server.listen(8000);
