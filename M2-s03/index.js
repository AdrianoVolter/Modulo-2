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


http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end("<>Hello World!")
}).listen(3050)

switch (req.method) {

    case 'GET':

       // aqui vai a lógica do GET - exercício 5
    break

    case 'POST':

       // aqui vai a lógica do POST - exercício 7
    break

}




console.log("Servidor rodando na porta 'http://localhost:3050'")
  


