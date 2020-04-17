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
console.log('starting the server at port 8000.. visit http://localhost:8000 from your browser!');
console.log('or http://127.0.0.1:8000');
server.listen(8000);

// ha ezt a programot elindítod, ez végtelen ciklusban fog futni, ctrl+c billentyűkkel
// fogod tudni csak leállítani!!
// ez a program csak nodejs-be fut, böngészőben nyilván nemtud..:)

