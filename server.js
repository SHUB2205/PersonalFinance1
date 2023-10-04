// server.js
const express = require('express');
const app = express();
const port = 5000;

// Middleware to parse JSON requests
app.use(express.json());

// Mock user data
const userData = {
  firstName: 'John',
  accountBalance: 5000,
  recentTransactions: [
    { id: 1, description: 'Groceries', amount: -100 },
    { id: 2, description: 'Salary', amount: 3000 },
    { id: 3, description: 'Rent', amount: -1200 },
  ],
};

// API endpoint to retrieve user data
app.get('/api/user-data', (req, res) => {
  res.json(userData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
