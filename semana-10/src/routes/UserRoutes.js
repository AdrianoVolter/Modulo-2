const express = require('express');
const routes = express.Router();
const UserController = require('../controllers/UserController');

//create a user
routes.post('/users', UserController.createOneUser);
//login user
routes.post('/users/login', UserController.loginUser);
//get all users
routes.get('/users', UserController.getAllUsers);

module.exports = routes;
