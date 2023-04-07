import axios from "axios";

// const BASE_URL = process.env.REACT_APP_API_URL;
axios.defaults.withCredentials = true;
const login = (user) => {
  return axios.post(`/user/login`, { ...user });
};

const logout = () => {
  return axios.post(`/user/logout`);
};

const signup = (user) => {
  return axios.post(`/user/signup`, { ...user });
};

export { login, logout, signup };
