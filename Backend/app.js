const express = require('express');
const {
  getAll, create, getById, update, deleteTask,
} = require('./controller/tarefaController');

const app = express();

app.use(express.json());

app.get('/tarefa', getAll);

app.post('/tarefa', create);

app.get('/tarefa/:id', getById);

app.put('/tarefa/:id', update);

app.delete('/tarefa/:id', deleteTask);

module.exports = app;
