const express = require('express');
const app = express();
//const cors = require('cors');
const userRotas = require('./userRotas');
const port = 3000;


//app.use(cors());
app.use(express.json());
app.use(userRotas);

app.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}\nAcesse http://localhost:${port}/criarUser para criar um usuário`);
    }
);