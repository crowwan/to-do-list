import axios from "axios";

const BASE_URL = "http://localhost:8000";

axios.defaults.withCredentials = true;
const login = (user) => {
  return axios.post(`${BASE_URL}/user/login`, { ...user });
};

const logout = () => {
  return axios.post(`${BASE_URL}/user/logout`);
};

const signup = (user) => {
  return axios.post(`${BASE_URL}/user/signup`, { ...user });
};

export { login, logout, signup };
