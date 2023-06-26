const express = require('express') 
const cors = require('cors') 
const app = express() 
const PORT = 3334
//const routes = require('./routes/routes') 

const { connection } = require('./database/connection') 


//app.use(routes)
app.use(cors())
app.use(express.json())
app.listen(PORT, () => console.log(`Servidor executando na porta http://localhost:${PORT}`)) // Inicialização do servidor

