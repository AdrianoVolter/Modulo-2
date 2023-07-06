const express = require('express');
const routes = express.Router();
const ContactControllers = require('../controllers/ContactController');


//create a contract
routes.post('/contracts', ContactControllers.store);
//get all contracts
routes.get('/contracts', ContactControllers.index);
//get contract by id
routes.get('/contracts/:id', ContactControllers.show);
//update contract by id
routes.patch('/contracts/:id', ContactControllers.update);

module.exports = routes;
