const http = require('http');
const fs = require('fs');


// Crie uma função para ler os dados do arquivo JSON e retornar todos em uma lista como resultado.

function lerDados() {
      fs.readFile('dados.json', (err, data) => {
         if (err) throw err;
         let dados = JSON.parse(data);
         console.log(dados);
      });
   }


const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end("<>Hello World!")


   switch (req.method) {

      case 'GET':
         response.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' }) // aqui vai a lógica do GET - exercício 6
         response.write(lerDados()) 
         response.end()    

      break

      case 'POST':

         // aqui vai a lógica do POST - exercício 7
      break

   }

})
server.listen(3050)

console.log("Servidor rodando na porta 'http://localhost:3050'")
  


