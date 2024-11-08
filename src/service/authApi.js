import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

const register = async (data) => {
  const response = await axios.post(`${API_URL}/register`, data);
  return response.data;
};

const login = async (data) => {
  const response = await axios.post(`${API_URL}/login`, data);
  return response;
};

export default {
  register,
  login,
};
