const express = require('express');
const routes = express.Router();
const UserRoleController = require('../controllers/UserRoleController');


//get all users_roles
routes.get('/users_roles', UserRoleController.index);
//create a user_role
routes.post('/users_roles', UserRoleController.store);


module.exports = routes

