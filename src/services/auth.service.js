import axios from 'axios';
import TokenService from "./token.service";

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
  return axios.post(API_URL + 'signin-refresh', {
    username,
    password,
  }).then(response => {
    if (response.data.accessToken) {
      TokenService.setUser(response.data);
    }
    return response.data;
  });
};

const logout = () => {
  TokenService.removeUser();
};

const getCurrentUser = () => {
  return TokenService.getUser();
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};
export default AuthService;
