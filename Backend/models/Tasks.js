const connection = require('./connection');

const getAllTasks = async () => {
  const query = 'SELECT * FROM tarefas';
  const [result] = await connection.execute(query);
  return result;
};

const createTasks = async (name, quantity) => {
  const query = 'INSERT INTO tarefas(name, quantity) VALUES(?, ?)';
  const [result] = await connection.execute(query, [name, quantity]);
  return {
    id: result.insertId,
    name,
    quantity,
  };
};

const findTasksByName = async (name) => {
  const query = 'SELECT * FROM tarefas WHERE name = ?';
  const [result] = await connection.execute(query, [name]);
  return result;
};

const getByIdTasks = async (id) => {
  const query = 'SELECT * FROM tarefas WHERE id = ?';
  const [result] = await connection.execute(query, [id]);
  return result;
};

const updateTasks = async (name, quantity, id) => {
  const query = 'UPDATE tarefas SET name = ?, quantity = ? WHERE id = ?';
  const [result] = await connection.execute(query, [name, quantity, id]);
  return result;
};

const deleteTasks = async (id) => {
  const query = 'DELETE FROM tarefas WHERE id = ?';
  const [result] = await connection.execute(query, [id]);
  return result;
};

module.exports = {
  getAllTasks,
  createTasks,
  getByIdTasks,
  updateTasks,
  deleteTasks,
  findTasksByName,
};
