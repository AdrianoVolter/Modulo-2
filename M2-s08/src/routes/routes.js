const express = require('express')
const routes = express.Router()
const CategoryControllers = require('../controllers/CategoryController')


routes.get('/categories', CategoryControllers.index);
routes.post('/categories', CategoryControllers.store);


module.exports = routes
