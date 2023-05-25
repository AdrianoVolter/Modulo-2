const express = require('express')
const userRoutesV1 = express.Router()
const { listaDeUsuarios, criarBaseDeDadosDeUsuario } = require('../../controllers/user')

userRoutesV1.get('/user/listaDeUsuarios/:nomeDoArquivo', listaDeUsuarios)
userRoutesV1.post('/user/criarArquivo', criarBaseDeDadosDeUsuario)
userRoutesV1.get('/', (req, res) => res.send('Olá, mundo!'))

module.exports = userRoutesV1