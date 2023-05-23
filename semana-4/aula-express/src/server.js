const express = require('express');

const app = express();

app.get('/rotapedro', (req, res) => {
    res.status(200).send({mensage:'Hello World'});
});


app.listen(3000, () => {
    console.log('Servidor rodando na porta http://localhost:3000');
    }
);