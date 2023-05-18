
const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

function listarProdutos(){
    try {
        const dados = JSON.parse(fs.readFileSync("dados.json", "utf-8"))
        return JSON.stringify(dados.produtos)
      } catch (erro){
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
const server = http.createServer((request, response) => {
    if(request.url == "/produto"){
        switch(request.method){
            case "GET":
                response.writeHead(200, {"Content-Type": "application/json; charset: utf-8;"})
                response.end(listarProdutos())
              break
            case "POST":
                let data = ''
                request.on("data", (chunk) => {
                data += chunk
                })
                request.on("end", () => {
                response.writeHead(200, {"Content-Type": "text/plain; charset: utf-8;"})
                response.end(CriarProduto(data))
                })


              break
            case "PUT":
                response.writeHead(200, {"Content-Type": "text/plain; charset: utf-8;"})
                response.end("Você está no endpoint de produtos e está realizando um PUT")
              break
            case "DELETE":
                response.writeHead(200, {"Content-Type": "text/plain; charset: utf-8;"})
                response.end("Você está no endpoint de produtos e está realizando um DELETE")
              break
            
          }
    }

  else if(request.url != "/" && request.url != "/produto"){
    response.writeHead(404, {"Content-Type": "text/plain; charset: utf-8;"})
    response.end("Endpoint não encontrado")
  } else {
    response.writeHead(200, {"Content-Type": "text/plain; charset: utf-8;"})
    response.end("O endpoint padrão é o '/'")
  }

})
server.listen(3000, () => {
    console.log('Servidor rodando na porta http://localhost:3000')

})




