const express = require('express')
const routes = express.Router()
const CategoryControllers = require('../controllers/CategoryController');
const TraineeControllers = require('../controllers/TraineeController');

//get all categories
routes.get('/categories', CategoryControllers.index);
//create a category
routes.post('/categories', CategoryControllers.store);
//get all trainees
routes.get('/trainees', TraineeControllers.index);
//create a trainee
routes.post('/trainees', TraineeControllers.store);
//get trainee by id
routes.get('/trainees/:id', TraineeControllers.show);

module.exports = routes
