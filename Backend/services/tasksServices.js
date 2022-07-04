const models = require('../models/Tasks');

const getAllTasks = async () => {
  const tasks = await models.getAllTasks();
  if (!tasks) throw new Error('Tasks Doesnt exhists!');
  return tasks;
};

const createTasks = async (task, completed) => {
  const findTask = await models.findTasks(task);
  if (findTask.length > 0) throw new Error('Tasks already exists');
  const tasks = await models.createTasks(task, completed);
  return tasks;
};

const getByIdTasks = async (id) => {
  const tasks = await models.getByIdTasks(id);
  return tasks;
};

const updateTasks = async (tasks, completed, id) => {
  const tasksId = await models.getByIdTasks(id);
  if (!tasksId.length) throw new Error('Tasks not found');
  const task = await models.updateTasks(tasks, completed, id);
  return task;
};

const deleteTasks = async (id) => {
  const tasksId = await models.getByIdTasks(id);
  if (!tasksId.length) throw new Error('Tasks not found');
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
