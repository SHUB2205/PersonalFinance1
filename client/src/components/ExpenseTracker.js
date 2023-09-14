// src/components/ExpenseTracker.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch expenses from the server
    axios.get('/api/expenses')
      .then((response) => {
        setExpenses(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Expense Tracker</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {expenses.map((expense) => (
            <li key={expense._id}>{expense.description}: ${expense.amount}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpenseTracker;
