const models = require('../models/Tasks');

const getAllTasks = async () => {
  const tasks = await models.getAllTasks();
  if (!tasks) throw new Error('Tasks Doesnt exists!');
  // tasks.completed === 1 ? true : false
  return tasks;
};

const createTasks = async (task, completed) => {
  const findTask = await models.findTasks(task);
  if (findTask.length > 0) throw new Error('Tasks already exists');
  const result = await models.createTasks(task, completed);
  return result;
};

const getByIdTasks = async (id) => {
  const result = await models.getByIdTasks(id);
  return result;
};

const updateTasks = async (tasks, completed, id) => {
  const tasksId = await models.getByIdTasks(id);
  if (!tasksId.length) throw new Error('Tasks not found');
  const result = await models.updateTasks(tasks, completed, id);
  return result;
};

const deleteTasks = async (id) => {
  const tasksId = await models.getByIdTasks(id);
  if (!tasksId.length) throw new Error('Tasks not found');
  const result = await models.deleteTasks(id);
  return result;
};

module.exports = {
  getAllTasks,
  createTasks,
  getByIdTasks,
  updateTasks,
  deleteTasks,
};
