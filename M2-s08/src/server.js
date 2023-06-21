const express = require('express') //Framework da aplicação
const cors = require('cors') // Biblioteca utilizada para inserir headers http
const app = express() // Instância da aplicação para usarmos as devidas funções
const PORT = 3334 
//const routes = require('./routes/routes') 
const { connection } = require('./database/connection') // Importação da conexão com o banco de dados

//connection.sync() // Sincronização do banco de dados com o servidor
app.use(cors()) // Utilização da função cors dentro do servidor
app.use(express.json()) // Habilitar entrada de dados como json no servidor
app.listen(PORT, () => console.log(`Servidor executando na porta http://localhost:${PORT}`)) // Inicialização do servidor

