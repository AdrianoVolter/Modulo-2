const {Router} = require('express');
const router = Router();
const {recebaLista, listarData} = require('../controllers/index');
const {enviarJson} = require('../controllers/enviarJson');
const {retornaDados} = require('../controllers/retornaDados');
const {alterarJson} = require('../controllers/alterarJson');


router.patch('/lista', recebaLista);
router.get('/datas/:mes', listarData);
router.post('/enviarJson', enviarJson);
router.get('/retornaDados', retornaDados);
router.put('/alterarJson/:id', alterarJson);

module.exports = router;
