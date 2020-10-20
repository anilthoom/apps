const http = require('http');
const server = http.createServer((req, res) =>{
    res.end('Server Response')
});

server.listen(process.env.PORT || 3000)