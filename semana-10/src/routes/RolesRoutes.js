const express = require('express');
const routes = express.Router();
const RoleController = require('../controllers/RoleController');

//get all roles
routes.get('/roles', RoleController.index);
//create a role
routes.post('/roles', RoleController.store);

module.exports = routes;
