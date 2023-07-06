const express = require('express')
const routes = express.Router()

const TraineeControllers = require('../controllers/TraineeController');
const CompanyControllers = require('../controllers/CompanyController');
const ContractControllers = require('../controllers/ContractController');
const UserController = require('../controllers/UserController');
const RoleController = require('../controllers/RoleController');
const UserRoleController = require('../controllers/UserRoleController');
const PermissionController = require('../controllers/PermissionController');
const PermissionRoleController = require('../controllers/PermissionRoleController');
//const { auth } = require('../middleware/auth');




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


//get all permissions
routes.get('/permissions', PermissionController.index);
//create a permission
routes.post('/permissions', PermissionController.store);


//get all permissions_roles
routes.get('/permissions_roles', PermissionRoleController.index);
//create a permission_role
routes.post('/permissions_roles', PermissionRoleController.store);

module.exports = routes
