const connection = require('./connection');

const getAllTasks = async () => {
  const query = 'SELECT id, tasks, IF(completed, "true", "false") completed FROM tasks';
  const [result] = await connection.execute(query);
  return result;
};

const createTasks = async (tasks, completed) => {
  const query = 'INSERT INTO tasks(tasks, completed) VALUES(?, ?)';
  const [result] = await connection.execute(query, [tasks, completed]);
  return {
    id: result.insertId,
    tasks,
    completed,
  };
};

const findTasks = async (task) => {
  const query = 'SELECT * FROM tasks WHERE tasks = ?';
  const [result] = await connection.execute(query, [task]);
  return result;
};

const getByIdTasks = async (id) => {
  const query = 'SELECT * FROM tasks WHERE id = ?';
  const [result] = await connection.execute(query, [id]);
  return result;
};

const updateTasks = async (tasks, completed, id) => {
  const query = 'UPDATE tasks SET tasks = ?, completed = ? WHERE id = ?';
  const [result] = await connection.execute(query, [tasks, completed, id]);
  return result;
};

const deleteTasks = async (id) => {
  const query = 'DELETE FROM tasks WHERE id = ?';
  const [result] = await connection.execute(query, [id]);
  return result;
};

module.exports = {
  getAllTasks,
  createTasks,
  getByIdTasks,
  updateTasks,
  deleteTasks,
  findTasks,
};
