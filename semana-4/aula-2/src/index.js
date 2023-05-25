const express = require('express');
const app = express();


app.get('/', (req, res) => {

        res.status(200).send('Olá, mundo!');
    
})

app.get('/contato', (req, res) => {

    const {idade} = req.query;
    console.log(idade);

    res.status(200).send('Obrigado por entrar em contato!');

})

module.exports = app;

