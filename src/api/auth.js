import axios from "axios";

// const BASE_URL = "http://localhost:8000";

axios.defaults.withCredentials = true;
const login = user => axios.post(`/user/login`, { ...user });

const logout = () => axios.post(`/user/logout`);

const signup = user => axios.post(`/user/signup`, { ...user });

export { login, logout, signup };
