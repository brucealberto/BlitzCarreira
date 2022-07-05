const axios = require('axios');

const apiUrl = 'http://localhost:3001/tasks';

function getAllTasks() {
  return axios.get(apiUrl);
}

function createTasks(task) {
  return axios.post(apiUrl, task);
}

function updateTasks(id, task) {
  return axios.put(apiUrl + '/' + id, task);
}

function deleteTasks(id) {
  return axios.delete(apiUrl + '/' + id);
}

module.exports = {
  getAllTasks,
  createTasks,
  updateTasks,
  deleteTasks,
};
