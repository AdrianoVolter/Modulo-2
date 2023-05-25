const express = require('express')
const rotas = express.Router()
const { validaEmail } = require('../utils')

rotas.get('/rotadopedro/:nome', (requisicao, resposta) => {

  const { email } = requisicao.body // Requisição do corpo de dados
  const { idade, local } = requisicao.query // Requisição do argumento opcional de dados
  const { nome } = requisicao.params // Requisição do argumento obrigatório nos dados via URI
  
  console.log(nome)
 
  if(!email || !validaEmail(email)) {
    return resposta.status(400).send({
      message: 'Não foi possível criar um usuário', 
      causa: "Não enviou o e-mail"
     })
  }

  return resposta.status(201).send({
    message: 'Criou um usuário', 
   })
})

rotas.get('/rotadoluis/:nome', (requisicao, resposta) => {
  return resposta.status(200).send({"mensagem": "Novo endpoint"})
})


module.exports = rotas