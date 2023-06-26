const express = require('express')
const routes = express.Router()
const CategoryControllers = require('../controllers/CategoryController')


routes.get('/categories', CategoryControllers.index);


module.exports = routes
