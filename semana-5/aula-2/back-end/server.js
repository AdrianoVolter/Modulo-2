const express = require('express');
const app = express();
const cors = require('cors');
const rotasDaEmpresa = require('./router/empresaRotas');
const PORT = 3333;

app.use(cors());
app.use(express.json());
app.use(rotasDaEmpresa);
app.use(express.static('public'));
app.use(express.static('public/images'));


app.listen(PORT, () => {


console.log(`Server is running on port http://localhost:${PORT}`);
})