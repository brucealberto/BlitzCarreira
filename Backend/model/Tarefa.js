const connection = require('./connection');

const getAll = async () => {
  const query = 'SELECT * FROM tarefas';
  const [result] = await connection.execute(query);
  return result;
};

const create = async (name, quantity) => {
  const query = 'INSERT INTO tarefas(name, quantity) VALUES(?, ?)';
  const [result] = await connection.execute(query, [name, quantity]);
  return {
    id: result.insertId,
    name,
    quantity,
  };
};

const getById = async (id) => {
  const query = 'SELECT * FROM tarefas WHERE id = ?';
  const [result] = await connection.execute(query, [id]);
  return result;
};

const update = async (name, quantity, id) => {
  const query = 'UPDATE tarefas SET name = ?, quantity = ? WHERE id = ?';
  const [result] = await connection.execute(query, [name, quantity, id]);
  return result;
};

const deleteTask = async (id) => {
  const query = 'DELETE FROM tarefas WHERE id = ?';
  const [result] = await connection.execute(query, [id]);
  return result;
};

module.exports = {
  getAll,
  create,
  getById,
  update,
  deleteTask,
};
