import ExpenseItem from "./expenseItem.jsx";
import "./expenses.css";
import Card from "../UI/card.jsx";
import ExpensesFilter from "./expenseFilter.jsx";
import { useState } from "react";
import ExpenseList from "./expenseList.jsx";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2024");

  const filterChangeHandler = (selectedYear) => {
    console.log("chnaged year to: ", selectedYear);
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return new Date(expense.date).getFullYear().toString() === filteredYear;
  });

  let expenseContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((expense) => {
      return <ExpenseItem data={expense} key={expense.id} />;
    });
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        filteredYear={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
