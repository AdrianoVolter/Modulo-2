const {Router} = require('express');
const router = Router();
const {recebaLista, listarData} = require('../controllers/index');

router.patch('/lista', recebaLista);
router.get('/data', listarData);

module.exports = router;
