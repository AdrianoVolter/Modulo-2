const {Router } = require('express');

const router = Router();


const {criarUsuario} = require('./userController');

router.post('/criarUser', criarUsuario);

module.exports = router;