const express = require('express');
const useRouterV1 = express.Router();
const userController = require('../../controllers/user');

useRouterV1.get('/user/listaDeUsuarios', userController.listarUsuarios);

module.exports = router;