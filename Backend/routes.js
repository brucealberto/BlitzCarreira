const { Router } = require('express');
const {
  getAll, create, getById, update, deleteTask,
} = require('./controller/tarefaController');

const routes = Router();

routes.get('/tarefa', getAll);

routes.post('/tarefa', create);

routes.get('/tarefa/:id', getById);

routes.put('/tarefa/:id', update);

routes.delete('/tarefa/:id', deleteTask);

module.exports = routes;
