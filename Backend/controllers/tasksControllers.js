const { StatusCodes } = require('http-status-codes');
const services = require('../services/tasksServices');

const getAllTasks = async (req, res) => {
  const tarefa = await services.getAllTasks();
  return res.status(StatusCodes.OK).json(tarefa);
};

const createTasks = async (req, res) => {
  const { name, quantity } = req.body;
  const tarefa = await services.createTasks(name, quantity);
  return res.status(StatusCodes.CREATED).json(tarefa);
};

const getByIdTasks = async (req, res) => {
  const { id } = req.params;
  const tarefa = await services.getByIdTasks(id);
  return res.status(StatusCodes.OK).json(tarefa);
};

const updateTasks = async (req, res) => {
  const { id } = req.params;
  const { name, quantity } = req.body;
  await services.updateTasks(name, quantity, id);
  return res.status(StatusCodes.OK).json({ id, name, quantity });
};

const deleteTasks = async (req, res) => {
  const { id } = req.params;
  await services.deleteTasks(id);
  return res.status(StatusCodes.NO_CONTENT).end();
};

module.exports = {
  getAllTasks,
  createTasks,
  getByIdTasks,
  updateTasks,
  deleteTasks,
};
