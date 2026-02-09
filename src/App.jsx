import "./App.css";
import ExpenseItem from "./components/Expenses/expenseItem.jsx";
import Expenses from "./components/Expenses/expenses.jsx";
import NewExpense from "./components/NewExpense/NewExpense.jsx";
import { useState, useEffect } from "react";

  const expenses = [
  ];

const App = (props) => {
  const [expense, setExpenses] = useState(() => {
  const expenseFormLS = JSON.parse(localStorage.getItem("expenses"));
  return expenseFormLS || [];
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expense));
  }, [expense]);


  const addExpenseHandler = (expense) => {
    setExpenses((previousExpense) => {
      return [expense, ...previousExpense];
    });
  };

  return (
    <div>
      <NewExpense onSaveExpenseData={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
