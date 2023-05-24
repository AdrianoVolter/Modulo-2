const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {

        res.status(200).send('Olá, mundo!');
    
})

app.get('/contato', (req, res) => {

    const {idade} = req.query;
    console.log(idade);

    res.status(200).send('Obrigado por entrar em contato!');

})



app.listen(port, () => console.log(`Example app listening on port http://localhost:${port}`));
