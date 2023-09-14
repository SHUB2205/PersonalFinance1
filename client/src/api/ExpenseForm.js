// src/components/ExpenseForm.js
import React, { useState } from 'react';

const ExpenseForm = () => {
  const [expense, setExpense] = useState({
    description: '',
    amount: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExpense({ ...expense, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the expense data to the backend API
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="description"
        value={expense.description}
        onChange={handleInputChange}
        placeholder="Expense Description"
      />
      <input
        type="number"
        name="amount"
        value={expense.amount}
        onChange={handleInputChange}
        placeholder="Amount"
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
