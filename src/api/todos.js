import axios from "axios";

const BASE_URL = "https://d3jjxq0lnfykmw.cloudfront.net";
const getTodos = () => {
  return axios.get(`${BASE_URL}/todos`);
};

const addTodo = (data) => {
  return axios.put(`${BASE_URL}/todos`, data);
};

const updateTodo = (id, data) => {
  return axios.put(`${BASE_URL}/todos/${id}`, data);
};

const deleteTodo = (id) => {
  return axios.delete(`/todos/${id}`);
};

export { getTodos, addTodo, updateTodo, deleteTodo };
