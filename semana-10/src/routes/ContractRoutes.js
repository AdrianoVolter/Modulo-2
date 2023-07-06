const express = require('express');
const routes = express.Router();
const ContractControllers = require('../controllers/ContractController');


//create a contract
routes.post('/contracts', ContractControllers.store);
//get all contracts
routes.get('/contracts', ContractControllers.index);
//get contract by id
routes.get('/contracts/:id', ContractControllers.show);
//update contract by id
routes.patch('/contracts/:id', ContractControllers.update);

module.exports = routes;
