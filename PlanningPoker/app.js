var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.sendFile('app.html', { root: __dirname });
});

users = [];
io.on('connection', function (socket) {
    socket.on('joinUserInRoom', function (roomNo, userName) {
        if (users.indexOf(userName) > -1) {
            // TODO: Set suffix to the name and emit with new name
            socket.emit('userExists', userName + ' username is taken! Try some other name.');
        }
        else {
            users.push(userName);
            socket.join(roomNo);
            console.log(roomNo, " ", userName )
            io.to(roomNo).emit('userSet', { username: userName, roomnumber: roomNo });
        }
    });

    socket.on('msg', function (userName) {
        io.sockets.emit('newmsg', userName);
    });
});

http.listen(3000, function () {
    console.log('Listening on 3000');
});