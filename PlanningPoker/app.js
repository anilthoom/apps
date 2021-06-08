var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.sendFile('app.html', { root: __dirname });
});

users = [];
io.on('connection', function (socket) {
    socket.on('joinUserInRoom', function (roomno, username) {
        if (users.indexOf(username) > -1) {
            // TODO: Set suffix to the name and emit with new name
            socket.emit('userExists', username + ' username is taken! Try some other name.');
        }
        else {
            users.push(username);
            socket.join(roomno);
            io.to(roomno).emit('userSet', { username: username, roomno: roomno });
        }
    });

    socket.on('msg', function (username) {
        io.sockets.emit('newmsg', username);
    });
});

http.listen(3000, function () {
    console.log('Listening on 3000');
});