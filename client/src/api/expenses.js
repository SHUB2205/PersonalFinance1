// src/api/expenses.js
import axios from 'axios';

const getExpenses = async () => {
  try {
    const response = await axios.get('/api/expenses');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default {
  getExpenses,
};
