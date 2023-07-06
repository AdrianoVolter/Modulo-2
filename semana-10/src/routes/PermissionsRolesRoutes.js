const express = require('express');
const routes = express.Router();
const PermissionRoleController = require('../controllers/PermissionRoleController');

//get all permissions_roles
routes.get('/permissions_roles', PermissionRoleController.index);
//create a permission_role
routes.post('/permissions_roles', PermissionRoleController.store);

module.exports = routes

