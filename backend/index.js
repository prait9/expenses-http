import fs from "node:fs/promises";
import express from 'express';

const app = express();

app.use((req, res, next ) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/expenses', async (req, res) => {
  const fileContent = await fs.readFile('./data/expenses.json');
  const expenseData = JSON.parse(fileContent);
  res.status(200).json({ expenses: expenseData });
});



app.listen(3000, () => {
  console.log('Server is running on port 3000');
});