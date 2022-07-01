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

module.exports = {
  getAll,
  create,
};
