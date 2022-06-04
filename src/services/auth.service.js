import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth/';

const register = (name, username, email, password) => {
  return axios.post(API_URL + 'signup', {
    name,
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  return axios.post(API_URL + 'signin', {
    username,
    password,
  });
};

const logout = () => {
  localStorage.removeItem('user');
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};
export default AuthService;
