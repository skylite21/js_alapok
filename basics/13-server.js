
// in nodeJS we can also create a web server
// for that we need to import the built in library: http
// we assign it to a variable called http
const http = require('http');

// we create the server 
const server = http.createServer( (req, res) => {
  res.writeHead(200, {'content-type': 'text/plain', });
  res.write('hello\n');
  setTimeout( () => {res.end('world\n'); }, 2000 );
});

// we call the listen function on the server
server.listen(8000);
