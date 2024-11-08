import axios from "axios";

const API_URL = "http://localhost:5000/api/users";

const getProfile = async (token) => {
  const response = await axios.get(`${API_URL}/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

const updateProfile = async (token, data) => {
  const response = await axios.put(`${API_URL}/profile`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

const updatePassword = async (token, currentPassword, newPassword) => {
  const response = await axios.put(
    `${API_URL}/profile/password`,
    { currentPassword, newPassword },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return response.data;
};

export default {
  getProfile,
  updateProfile,
  updatePassword,
};
