const {Router} = require('express');
const router = Router();
const {recebaLista, listarData} = require('../controllers/index');
const {enviarJson} = require('../controllers/enviarJson');
const {retornaDados} = require('../controllers/retornaDados');


router.patch('/lista', recebaLista);
router.get('/datas/:mes', listarData);
router.post('/enviarJson', enviarJson);
router.get('/retornaDados', retornaDados);

module.exports = router;
