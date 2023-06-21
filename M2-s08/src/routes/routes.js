const express = require('express')

const routes = express.Router()

const TraineeController = require('../controllers/TraineeController')
const CompanyController = require('../controllers/CompanyController')
const ContractController = require('../controllers/ContractController')
const CategoryController = require('../controllers/CategoryController')

routes.get('/trainees', TraineeController.index)
routes.get('/trainees/:id', TraineeController.show)
routes.post('/trainees', TraineeController.store)
routes.put('/trainees/:id', TraineeController.update)
routes.delete('/trainees/:id', TraineeController.destroy)

routes.get('/companies', CompanyController.index)
routes.get('/companies/:id', CompanyController.show)
routes.post('/companies', CompanyController.store)
routes.put('/companies/:id', CompanyController.update)
routes.delete('/companies/:id', CompanyController.destroy)

routes.get('/contracts', ContractController.index)
routes.get('/contracts/:id', ContractController.show)
routes.post('/contracts', ContractController.store)
routes.put('/contracts/:id', ContractController.update)
routes.delete('/contracts/:id', ContractController.destroy)

routes.get('/categories', CategoryController.index)
routes.get('/categories/:id', CategoryController.show)
routes.post('/categories', CategoryController.store)
routes.put('/categories/:id', CategoryController.update)
routes.delete('/categories/:id', CategoryController.destroy)

module.exports = routes
