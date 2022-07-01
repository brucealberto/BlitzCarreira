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

module.exports = {
  getAll,
  create,
};
