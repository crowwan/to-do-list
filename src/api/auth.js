import axios from "axios";

const BASE_URL = "https://d3jjxq0lnfykmw.cloudfront.net";
axios.defaults.withCredentials = true;
const login = (user) => {
  return axios.put(`${BASE_URL}/user/login`, { ...user });
};

const logout = () => {
  return axios.put(`${BASE_URL}/user/logout`);
};

const signup = (user) => {
  return axios.put(`${BASE_URL}/user/signup`, { ...user });
};

export { login, logout, signup };
