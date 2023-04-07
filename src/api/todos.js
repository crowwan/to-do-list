import axios from "axios";

// const BASE_URL = process.env.REACT_APP_API_URL;
axios.defaults.withCredentials = true;
const getTodos = () => {
  return axios.get(`/todos`);
};

const addTodo = (data) => {
  return axios.post(`/todos`, data);
};

const updateTodo = (id, data) => {
  return axios.post(`/todos/${id}`, data);
};

const deleteTodo = (id) => {
  return axios.delete(`/todos/${id}`);
  return axios.delete(`/todos/${id}`);
};

export { getTodos, addTodo, updateTodo, deleteTodo };
