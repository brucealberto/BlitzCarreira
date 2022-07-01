const express = require('express');
const {
  getAll, create, getById, update,
} = require('./controller/tarefaController');

const app = express();

app.use(express.json());

app.get('/tarefa', getAll);

app.post('/tarefa', create);

app.get('/tarefa/:id', getById);

app.put('/tarefa/:id', update);

module.exports = app;
