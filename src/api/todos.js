import axios from "axios";

const BASE_URL = "http://localhost:8000";
axios.defaults.withCredentials = true;
const getTodos = () => {
  return axios.get(`${BASE_URL}/todos`);
};

const addTodo = (data) => {
  return axios.post(`${BASE_URL}/todos`, data);
};

const updateTodo = (id, data) => {
  return axios.post(`${BASE_URL}/todos/${id}`, data);
};

const deleteTodo = (id) => {
  return axios.delete(`${BASE_URL}/todos/${id}`);
};

export { getTodos, addTodo, updateTodo, deleteTodo };
