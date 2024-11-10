import axios from "axios";

const API_URL = "http://localhost:5000/api/admin";

const getAllUsers = async (token) => {
  const response = await axios.get(`${API_URL}/`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

const searchUser = async (token, query) => {
  console.log("Query parameters:", query);
  const response = await axios.get(`${API_URL}/search`, {
    headers: { Authorization: `Bearer ${token}` },
    params: query,
  });
  return response.data;
};

const deleteUser = async (token, id) => {
  const response = await axios.delete(`${API_URL}/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export default {
  getAllUsers,
  searchUser,
  deleteUser,
};
