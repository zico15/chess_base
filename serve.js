/*const http = require('http');


let port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, () => {
  console.log(`Server running at`);
});

*/
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var clients = {};

app.get('/', function(req, res){
res.send('server is running');
});

//SocketIO vem aqui

http.listen(port, function(){
console.log('listening on port 3000');
});