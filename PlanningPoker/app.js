var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile('app.html', {root: __dirname});
});

users = [];
io.on('connection', function(socket){
    socket.on('setUserName', function(data){
        if(users.indexOf(data) > -1){
            // TODO: Set suffix to the name and emit with new name
             
            socket.emit('userExists', data + ' username is taken! Try some other name.');
        }
        else{
            users.push(data);
            socket.emit('userSet', {username: data});            
        }
    });

    socket.on('msg', function(data){
        io.sockets.emit('newmsg', data);
    });
});

http.listen(3000, function(){
    console.log('Listening on 3000');
});