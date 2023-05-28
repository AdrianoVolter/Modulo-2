const {Router} = require('express');
const router = Router();
const {recebaLista, listarData,saveJson} = require('../controllers/index');


router.patch('/lista', recebaLista);
router.get('/datas/:mes', listarData);
router.post('/enviarJson', saveJson);

module.exports = router;
