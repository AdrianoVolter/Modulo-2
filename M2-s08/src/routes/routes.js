const express = require('express')

const routes = express.Router()

const CategoryController = require('../controllers/CategoryController')

routes.get('/categories', CategoryController.index)
routes.post('/categories', CategoryController.store)

module.exports = routes
