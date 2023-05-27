const {Router} = require('express');
const router = Router();
const {recebaLista, listarData} = require('../controllers/index');

router.patch('/lista', recebaLista);
router.get('/datas/:mes', listarData);

module.exports = router;
