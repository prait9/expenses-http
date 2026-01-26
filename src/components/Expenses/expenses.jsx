import ExpenseItem from './expenseItem.jsx';
import './expenses.css';
import Card from '../UI/card.jsx';
import ExpensesFilter from './expenseFilter.jsx';
import { useState } from 'react';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2024');

    const filterChangeHandler = (selectedYear) => {
      console.log('chnaged year to: ', selectedYear);
    setFilteredYear(selectedYear);
  };
  
  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });


  return (
    <Card className="expenses">
      <ExpensesFilter onChangeFilter={filterChangeHandler} />
      {
      filteredExpenses.map( (expense) => (
        <ExpenseItem data={expense} key={expense.id} />
      ))
      }
    </Card>
  );
};

export default Expenses;