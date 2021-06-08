var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.sendFile('app.html', { root: __dirname });
});

users = [];
const rooms = io.of("/").adapter.rooms;
io.on('connection', function (socket) {
    console.log("ROOM SIZE : ", rooms.size)
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

    socket.on('msg', function (data) {
        console.log(data)
        io.to(data.room).emit('newmsg', data);
    });
});
io.of("/").adapter.on("create-room", (room) => {
    console.log(`room ${room} was created`);
  });
  
  io.of("/").adapter.on("join-room", (room, id) => {
    console.log(`socket ${id} has joined room ${room}`);
  });
  
http.listen(3000, function () {
    console.log('Listening on 3000');
});