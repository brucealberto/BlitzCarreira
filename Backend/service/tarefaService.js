const model = require('../model/Tarefa');

const getAll = async () => {
  const tarefas = await model.getAll();
  if (!tarefas) throw new Error('Tarefa não existe');
  return tarefas;
};

const create = async (name, quantiy) => {
  const tarefa = await model.create(name, quantiy);
  return tarefa;
};

const getById = async (id) => {
  const tarefa = await model.getById(id);
  return tarefa;
};

const update = async (name, quantity, id) => {
  const tarefa = await model.update(name, quantity, id);
  return tarefa;
};

module.exports = {
  getAll,
  create,
  getById,
  update,
};
