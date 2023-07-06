const express = require('express')
const routes = express.Router()

const RoleController = require('../controllers/RoleController');
const UserRoleController = require('../controllers/UserRoleController');
const PermissionController = require('../controllers/PermissionController');
const PermissionRoleController = require('../controllers/PermissionRoleController');
//const { auth } = require('../middleware/auth');

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
