const express = require('express')
//const rotas = require('./routes')
const app = express()

const PORT = 3000

//  app.use(express.json())
// app.use(rotas)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => console.log(`Servidor ligado na porta http://localhost:${PORT}`))