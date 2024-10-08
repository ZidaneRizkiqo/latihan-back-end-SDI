const http = require('http');
const fs = require ("fs");

const port =  +process.argv[2];
const filepath = process.argv[3];

 http.createServer((request, response) => {
    fs.createReadStream(filepath).pipe(response);
}).listen(port);