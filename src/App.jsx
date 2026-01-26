import "./App.css";
import ExpenseItem from "./components/Expenses/expenseItem.jsx";
import Expenses from "./components/Expenses/expenses.jsx";
import NewExpense from "./components/NewExpense/NewExpense.jsx";
import { useState } from "react";

const App = (props) => {
  const expenses = [
    {
      id: "1d",
      date: new Date(2023, 10, 12),
      title: "New book",
      price: 30.99,
    },
    {
      id: "2d",
      date: new Date(2024, 10, 12),
      title: "New jeans",
      price: 99.99,
    },
    {
      id: "3d",
      date: new Date(2024, 10, 12),
      title: "New jeans",
      price: 139.99,
    },
  ];

  const [expense, setExpenses] = useState(expenses);

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
