import axios from "axios";

const BASE_URL = "http://localhost:8000/todos";

const getTodos = () => {
  return axios.get(BASE_URL);
};

const addTodo = (data) => {
  return axios.post(`${BASE_URL}`, data);
};

const updateTodo = (id, data) => {
  return axios.post(`${BASE_URL}/id`, data);
};

const deleteTodo = (id) => {
  return axios.delete(`${BASE_URL}/id`);
};

export { getTodos, addTodo, updateTodo, deleteTodo };
