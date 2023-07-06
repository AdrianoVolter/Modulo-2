const express = require('express');
const routes = express.Router();
const CompanyControllers = require('../controllers/CompanyController');


//get all companies
routes.get('/companies', CompanyControllers.index);
//create a company
routes.post('/companies', CompanyControllers.store);
//get company by id
routes.get('/companies/:id', CompanyControllers.show);
//update company by id
routes.put('/companies/:id', CompanyControllers.update);


module.exports = routes;
