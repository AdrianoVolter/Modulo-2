const express = require('express') //Framework da aplicação
const cors = require('cors') // Biblioteca utilizada para inserir headers http
const { connection } = require('./database/connection') // Configuração de acesso ao banco de dados

class Server {
    constructor (server = express()) {
      this.middlewares(server)
      this.initializeServer(server)
        this.database()
    }
  
    async middlewares(app) {
      app.use(cors())
      app.use(express.json())
    }
  
    async initializeServer(app) {
      const PORT = 3334
      app.listen(PORT, () => console.log(`Servidor executando na porta ${PORT}`))
    }

    async database() {
        try {
            await connection.authenticate();
            console.log('Conectado ao DB postgres!');
          } catch (error) {
            console.error('Não foi possível conectar no banco de dados.', error);
          }
    }
  }
  
module.exports = { Server }