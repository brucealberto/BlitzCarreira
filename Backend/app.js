const express = require('express');
const { getAll, create } = require('./controller/tarefaController');

const app = express();

app.use(express.json());

app.get('/tarefa', getAll);

app.post('/tarefa', create);

module.exports = app;
