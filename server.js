var express = require('express');
var app = express();
app.use(express.static('public'));

var server = require('http').createServer(app);
var io = require('socket.io')(server);

var clients = []

io.on('connection', (socket) => {
    console.log('Connected to server: ' + socket.id);

    // socket.on('message', (data))

    socket.on('disconnect',() => {
        console.log('Client has disconnected.');
    })
})

server.listen(3000, function(){
    console.log('Server is running at http://localhost:3000');
})