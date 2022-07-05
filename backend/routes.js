const { Router } = require('express');
const {
  getAllTasks, createTasks, getByIdTasks, updateTasks, deleteTasks,
} = require('./controllers/tasksControllers');

const routes = Router();

routes.get('/tasks', getAllTasks);

routes.post('/tasks', createTasks);

routes.get('/tasks/:id', getByIdTasks);

routes.put('/tasks/:id', updateTasks);

routes.delete('/tasks/:id', deleteTasks);

module.exports = routes;
