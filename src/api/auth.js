import axios from "axios";

const BASE_URL = "http://ec2-54-180-116-211.ap-northeast-2.compute.amazonaws.com";

axios.defaults.withCredentials = true;
const login = user => axios.post(`${BASE_URL}/user/login`, { ...user });

const logout = () => axios.post(`${BASE_URL}/user/logout`);

const signup = user => axios.post(`${BASE_URL}/user/signup`, { ...user });

export { login, logout, signup };
