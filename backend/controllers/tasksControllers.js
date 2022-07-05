const { StatusCodes } = require('http-status-codes');
const services = require('../services/tasksServices');

const getAllTasks = async (req, res) => {
  const tasks = await services.getAllTasks();
  return res.status(StatusCodes.OK).json(tasks);
};

const createTasks = async (req, res) => {
  try {
    const { tasks, completed } = req.body;
    const result = await services.createTasks(tasks, completed);
    return res.status(StatusCodes.CREATED).json(result);
  } catch (error) {
    return res.status(StatusCodes.CONFLICT).json(error.message);
  }
};

const getByIdTasks = async (req, res) => {
  const { id } = req.params;
  const result = await services.getByIdTasks(id);
  return res.status(StatusCodes.OK).json(result);
};

const updateTasks = async (req, res) => {
  try {
    const { id } = req.params;
    const { tasks, completed } = req.body;
    await services.updateTasks(tasks, completed, id);
    return res.status(StatusCodes.OK).json({ id, tasks, completed });
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
