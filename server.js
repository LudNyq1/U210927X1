const http = require('http'); //Initializes the http pack from nodeJs

const server = http.createServer((req, res) =>{
    res.setHeader('Content-type', 'text/html');
    res.end('Hello world, server is up and running!')
});

console.log('Sever is up and running on this current computer');
server.listen(8089);