// src/api/auth.js
import axios from 'axios';

const register = async (userData) => {
  try {
    const response = await axios.post('/api/register', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default {
  register,
};
