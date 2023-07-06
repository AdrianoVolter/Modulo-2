const express = require('express')
const routes = express.Router()
const CategoryControllers = require('../controllers/CategoryController');
const TraineeControllers = require('../controllers/TraineeController');
const CompanyControllers = require('../controllers/CompanyController');
const ContractControllers = require('../controllers/ContractController');
const UserController = require('../controllers/UserController');
const RoleController = require('../controllers/RoleController');
const UserRoleController = require('../controllers/UserRoleController');
const { auth } = require('../middleware/auth');

//get all categories
routes.get('/categories',auth, CategoryControllers.index);
//create a category
routes.post('/categories', CategoryControllers.store);
//get category by id
routes.get('/categories/:id', auth ,CategoryControllers.listOneCategory);
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
//update contract by id
routes.patch('/contracts/:id', ContractControllers.update);

//create a user
routes.post('/users', UserController.createOneUser);
//login user
routes.post('/users/login', UserController.loginUser);
//get all users
routes.get('/users', UserController.getAllUsers);


//get all roles
routes.get('/roles', RoleController.index);
//create a role
routes.post('/roles', RoleController.store);


//get all users_roles
routes.get('/users_roles', UserRoleController.index);
//create a user_role
routes.post('/users_roles', UserRoleController.store);




module.exports = routes
