const express = require('express')
const app = express()
const router = require('./routes/rota')

const PORT = 3000

app.use(express.json())
// app.use(rotas)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use(router)

app.listen(PORT, () => console.log(`Servidor ligado na porta http://localhost:${PORT}`))