
const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

/**
 * 
 * @returns {string} Retorna uma string com todos os produtos cadastrados
 * @description Essa função lê o arquivo dados.json e retorna uma string com todos os produtos cadastrados
 * @example
 * listarProdutos()
 * // retorna uma string com todos os produtos cadastrados
 */


function listarProdutos(){
    try {
        const dados = JSON.parse(fs.readFileSync("dados.json", "utf-8"))
        return JSON.stringify(dados.produtos)
      } catch (erro){
        return "Erro ao executar"
      }
    }

/**
 * 
 * @param {string} novoProduto - Um objeto JSON com os dados do novo produto
 * @returns {string} Retorna uma string com uma mensagem de sucesso ou erro
 * @description Essa função recebe um objeto JSON com os dados do novo produto e salva no arquivo dados.json
 * @example
 * CriarProduto('{"nome": "Produto 1", "preco": 10}')
 * // retorna uma string com uma mensagem de sucesso ou erro
 *  
 * 
  */

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


function EditarProduto(produto){
  try {
    const dados = JSON.parse(fs.readFileSync("dados.json", "utf-8"))
    const produtoEditado = JSON.parse(produto)
    let indice = dados.produtos.findIndex((produto) => produto.id == produtoEditado.id)
    dados.produtos[indice] = produtoEditado
    fs.writeFileSync("dados.json", JSON.stringify(dados))
    return "Produto editado com sucesso!"
  }
  catch {
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

            // CriarProduto('{"nome": "Produto 1", "preco": 10}')
                let data = ''
                request.on("data", (chunk) => { // chunk é um pedaço dos dados que estão sendo enviados
                data += chunk
                })
                request.on("end", () => {
                response.writeHead(200, {"Content-Type": "text/plain; charset: utf-8;"})
                response.end(CriarProduto(data))
                })


              break
            case "PUT":
              let produtoPUT = ''
              request.on("data", (chunk) => { // chunk é um pedaço dos dados que estão sendo enviados
              produtoPUT += chunk
              })
              request.on("end", () => {
              response.writeHead(200, {"Content-Type": "text/plain; charset: utf-8;"})
              response.end(EditarProduto(produtoPUT))
              })

                
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




