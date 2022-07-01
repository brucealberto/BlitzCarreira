const { StatusCodes } = require('http-status-codes');
const service = require('../service/tarefaService');

const getAll = async (req, res) => {
  const tarefa = await service.getAll();
  return res.status(StatusCodes.OK).json(tarefa);
};

const create = async (req, res) => {
  const { name, quantity } = req.body;
  const tarefa = await service.create(name, quantity);
  return res.status(StatusCodes.CREATED).json(tarefa);
};

module.exports = {
  getAll,
  create,
};
