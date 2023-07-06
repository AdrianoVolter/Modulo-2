const express = require('express');
const routes = express.Router();
const PermissionController = require('../controllers/PermissionController');


//get all permissions
routes.get('/permissions', PermissionController.index);
//create a permission
routes.post('/permissions', PermissionController.store);


module.exports = routes
