const { StatusCodes } = require('http-status-codes');
const services = require('../services/tasksServices');

const getAllTasks = async (req, res) => {
  const tarefa = await services.getAllTasks();
  return res.status(StatusCodes.OK).json(tarefa);
};

const createTasks = async (req, res) => {
  try {
    const { name, quantity } = req.body;
    const tarefa = await services.createTasks(name, quantity);
    return res.status(StatusCodes.CREATED).json(tarefa);
  } catch (error) {
    return res.status(StatusCodes.CONFLICT).json(error.message);
  }
};

const getByIdTasks = async (req, res) => {
  const { id } = req.params;
  const tarefa = await services.getByIdTasks(id);
  return res.status(StatusCodes.OK).json(tarefa);
};

const updateTasks = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, quantity } = req.body;
    await services.updateTasks(name, quantity, id);
    return res.status(StatusCodes.OK).json({ id, name, quantity });
  } catch (error) {
    return res.status(StatusCodes.NOT_FOUND).json(error.message);
  }
};

const deleteTasks = async (req, res) => {
  try {
    const { id } = req.params;
    await services.deleteTasks(id);
    return res.status(StatusCodes.NO_CONTENT).end();
  } catch (error) {
    return res.status(StatusCodes.NOT_FOUND).json(error.message);
  }
};

module.exports = {
  getAllTasks,
  createTasks,
  getByIdTasks,
  updateTasks,
  deleteTasks,
};
