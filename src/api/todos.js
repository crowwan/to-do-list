import axios from "axios";

// const BASE_URL = "http://localhost:8000";
axios.defaults.withCredentials = true;
const getTodos = () => axios.get(`/todos`);

const addTodo = data => axios.post(`/todos`, data);

const updateTodo = (id, data) => axios.post(`/todos/${id}`, data);

const deleteTodo = id => axios.delete(`/todos/${id}`);

export { getTodos, addTodo, updateTodo, deleteTodo };
