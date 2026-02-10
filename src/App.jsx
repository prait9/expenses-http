import "./App.css";
import ExpenseItem from "./components/Expenses/expenseItem.jsx";
import Expenses from "./components/Expenses/expenses.jsx";
import NewExpense from "./components/NewExpense/NewExpense.jsx";
import { useState, useEffect } from "react";

  const expenses = [
  ];

const App = (props) => {
  const [expenses, setExpenses] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
  const getExpenses = async () => {
  setIsFetching(true);

  try {
        const response = await fetch("http://localhost:3000/expenses");
        const data = await response.json();
        setExpenses(data.expenses || []);

        if (!response.ok) {
          throw new Error("Failed to fetch expenses");
        }

        } catch (error) {
          setError ({
            title: "Error!",
            message: "Something went wrong while fetching expenses. Try again later."
          })
          setShowError(true);
        }
        setIsFetching(false);
        }

    getExpenses();
    console.log("useEffect called");
  }, []);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const errorHandler = (error) => {
    setError(error);
    setShowError(true);
  };  

  const addExpenseHandler = (expense) => {
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses];
    });
  };

  return (
    <div className="App">
      {showError && (
        <Error
          title={error.title}
          message={error.message}
          onConfirm={() => setShowError(false)}
        />)
      }
      <NewExpense onSaveExpenseData={addExpenseHandler} />
      <Expenses 
      expenses={expenses}
      isFetching={isFetching} />
      
    </div>
  );
};

export default App;
