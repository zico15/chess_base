const WebSocket = require('ws');

let port = process.env.PORT || 3000

const server = new WebSocket.Server({ port });


let sockets = [];
server.on('connection', function(socket) {
  // Adicionamos cada nova conexão/socket ao array `sockets`
  sockets.push(socket);

  // Quando você receber uma mensagem, enviamos ela para todos os sockets
  socket.on('message', function(msg) {
      console.log(msg);
    sockets.forEach(s => s.send(msg));
  });

  // Quando a conexão de um socket é fechada/disconectada, removemos o socket do array
  socket.on('close', function() {
      
    console.log('client :'+ sockets.length);
    sockets = sockets.filter(s => s !== socket);
    console.log('client close:'+ sockets.length);
  });
});