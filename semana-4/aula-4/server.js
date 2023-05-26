const express = require('express');
const app = express();
const rotasDaEmpresa = require('./router/empresaRotas');
const PORT = 3000;

app.use(express.json());
app.use(rotasDaEmpresa);

app.listen(PORT, () => {
console.log(`Server is running on port http://localhost:${PORT}`);
})