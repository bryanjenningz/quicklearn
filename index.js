var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var users = {};

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
  socket.on('disconnect', function() {
    delete users[socket.id];
    io.emit('update users', users);
  });
  socket.on('chat message', function(msg) {
    io.emit('chat message', msg);
  });
  socket.on('update info', function(info) {
    users[socket.id] = info;
    io.emit('update users', users);
  });
});

http.listen(3000, function() {
  console.log('listening on *:3000');
});
