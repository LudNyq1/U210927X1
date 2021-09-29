const http = require('http'); //Imports modules froms nodeJs
const fs = require('fs');   //File system module, read write and read.

const server = http.createServer((req, res) =>{
    fs.readFile('index.html', (err, data)=>{
        res.writeHead('200', {'Content-Type' : 'text/html'});
        res.write(data);
        res.end();
    });
});

console.log('Sever is up and running on this computer!');
server.listen(process.env.PORT || 8089); //Listens to the local port and heroku