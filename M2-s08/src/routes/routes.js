const express = require('express')
const routes = express.Router()
const CategoryControllers = require('../controllers/CategoryController');
const TraineeControllers = require('../controllers/TraineeController');
const CompanyControllers = require('../controllers/CompanyController');
const ContractControllers = require('../controllers/ContractController');

//get all categories
routes.get('/categories', CategoryControllers.index);
//create a category
routes.post('/categories', CategoryControllers.store);
//get all trainees
routes.get('/trainees', TraineeControllers.index);
//create a trainee
routes.post('/trainees', TraineeControllers.store);
//get trainee by id
routes.get('/trainees/:id', TraineeControllers.show);
//update trainee by id
routes.put('/trainees/:id', TraineeControllers.update);

//get all companies
routes.get('/companies', CompanyControllers.index);
//create a company
routes.post('/companies', CompanyControllers.store);
//get company by id
routes.get('/companies/:id', CompanyControllers.show);
//update company by id
routes.put('/companies/:id', CompanyControllers.update);

//create a contract
routes.post('/contracts', ContractControllers.store);
//get all contracts
routes.get('/contracts', ContractControllers.index);
//get contract by id
routes.get('/contracts/:id', ContractControllers.show);

module.exports = routes
