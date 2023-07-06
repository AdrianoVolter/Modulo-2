const express = require('express');
const routes = express.Router();
const CategoryControllers = require('../controllers/CategoryController');
const {verifyToken} = require('../controllers/UserController');

routes.get('/categories', verifyToken  ,CategoryControllers.index);
routes.post('/categories', verifyToken,  CategoryControllers.store);
routes.get('/categories/:id', verifyToken, CategoryControllers.listOneCategory);

module.exports = routes;

