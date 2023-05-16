const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end("<>Hello World!")
}).listen(3050)

console.log("Servidor rodando na porta 'http://localhost:3050'")
  


