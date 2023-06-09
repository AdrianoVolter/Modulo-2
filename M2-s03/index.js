const http = require('http');
const fs = require('fs');


// Crie uma função para ler os dados do arquivo JSON e retornar todos em uma lista como resultado.

function lerDados() {
   try {
      const dados = JSON.parse(fs.readFileSync("dados.json", "utf-8"))
      return JSON.stringify(dados.produtos)  // aqui vai a lógica do GET - exercício 6
   } catch (erro) {
      return "Erro ao executar"
   }
}


function CriarProduto(novoProduto){
   try {
         const dados = JSON.parse(fs.readFileSync("dados.json", "utf-8"))
         dados.produtos.push(JSON.parse(novoProduto))
         fs.writeFileSync("dados.json", JSON.stringify(dados))
         return "Produto cadastrado com sucesso!"
         } catch {
         return "Erro ao executar"
         }
      }

// Crie uma função para criar um novo produto no arquivo JSON. O novo produto deve ser passado como parâmetro para a função.


const server = http.createServer((request, response) => {
   if (request.url == '/') {
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      res.end("Você está na página inicial")
   }
   else if (request.url == '/produto') {

      switch (request.method) {

         case 'GET':
            response.writeHead(200, { 'Content-Type': 'application/json; charset-utf-8' }) // aqui vai a lógica do GET - exercício 6
            response.write(lerDados()) 
            response.end()    

         break

         case 'POST':

            let data = ''
            request.on('data', (chunk) => {
               data += chunk
            })
            request.on('end', () => {
            response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' }) // aqui vai a lógica do POST - exercício 7
            response.end(CriarProduto(data))
            })


         break

      }
   }
   

})
server.listen(3050)

console.log("Servidor rodando na porta 'http://localhost:3050'")
  


