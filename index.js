const express = require("express");
const app = express();
const data = require("./data.json");
// passa o express para o http-server
var http = require('http').Server(app);
// passa o http-server par ao socketio
var io = require('socket.io')(http);

app.use(express.json());

app.get("/clients", function(req, res) {
  res.json(data);
});

app.get("/clients/login/:email/:password", function(req, res) {
  const { email, password } = req.params;
  const client = data.find(cli => cli.email == email && cli.password == password);
  if (!client) return res.status(204).json();
  res.json(client);
});

app.post("/clients", function(req, res) {
  const { name, email } = req.body;

  // salvar

  res.json({ name, email });
});

app.put("/clients/:id", function(req, res) {
  const { id } = req.params;
  const client = data.find(cli => cli.id == id);

  if (!client) return res.status(204).json();

  const { name } = req.body;

  client.name = name;

  res.json(client);
});

app.delete("/clients/:id", function(req, res) {
  const { id } = req.params;
  const clientsFiltered = data.filter(client => client.id != id);

  res.json(clientsFiltered);
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running");
});


 
// cria uma rota para fornecer o arquivo index.html
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
// sempre que o socketio receber uma conexão vai devoltar realizar o broadcast dela
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});
 
