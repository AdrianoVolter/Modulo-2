const {Router} = require('express');
const router = Router();
const {recebaLista} = require('../controllers/index');

router.patch('/lista', recebaLista);

module.exports = router;
