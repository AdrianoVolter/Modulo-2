const express = require('express');
const routes = express.Router();
const TraineeControllers = require('../controllers/TraineeController');

//get all trainees
routes.get('/trainees', TraineeControllers.index);
//create a trainee
routes.post('/trainees', TraineeControllers.store);
//get trainee by id
routes.get('/trainees/:id', TraineeControllers.show);
//update trainee by id
routes.put('/trainees/:id', TraineeControllers.update);

module.exports = routes;