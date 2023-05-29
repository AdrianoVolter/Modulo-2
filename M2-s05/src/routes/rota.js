const {Router} = require('express');
const router = Router();
const {recebaLista, listarData} = require('../controllers/index');
const {enviarJson} = require('../controllers/enviarJson');


router.patch('/lista', recebaLista);
router.get('/datas/:mes', listarData);
router.post('/enviarJson', enviarJson);

module.exports = router;
