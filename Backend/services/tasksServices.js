const models = require('../models/Tasks');

const getAllTasks = async () => {
  const tasks = await models.getAllTasks();
  if (!tasks) throw new Error('Tasks Doesnt exhists!');
  return tasks;
};

const createTasks = async (name, quantiy) => {
  const findTasksName = await models.findTasksByName(name);
  if (findTasksName.length > 0) throw new Error('Tasks already exists');
  const tasks = await models.createTasks(name, quantiy);
  return tasks;
};

const getByIdTasks = async (id) => {
  const tasks = await models.getByIdTasks(id);
  return tasks;
};

const updateTasks = async (name, quantity, id) => {
  const tasksId = await models.getByIdTasks(id);
  if (tasksId.length === 0) throw new Error('Tasks not found');
  const tasks = await models.updateTasks(name, quantity, id);
  return tasks;
};

const deleteTasks = async (id) => {
  const tasksId = await models.getByIdTasks(id);
  if (tasksId.length === 0) throw new Error('Tasks already deleted');
  const tasks = await models.deleteTasks(id);
  return tasks;
};

module.exports = {
  getAllTasks,
  createTasks,
  getByIdTasks,
  updateTasks,
  deleteTasks,
};
