const express = require('express');
const routes = express.Router();
const CategoryControllers = require('../controllers/CategoryController');

routes.get('/categories', CategoryControllers.index);
routes.post('/categories', CategoryControllers.store);
routes.get('/categories/:id', CategoryControllers.listOneCategory);

module.exports = routes;

