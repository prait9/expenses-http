import ExpenseItem from './expenseItem.jsx';
import './expenses.css';
import Card from '../UI/card.jsx';
import ExpensesFilter from './expenseFilter.jsx';

const Expenses = (props) => {


    const filterChangeHandler = (selectedYear) => {
    console.log(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter onChangeFilter={filterChangeHandler} />
      {
      props.expenses.map( (expense) => (
        <ExpenseItem data={expense} key={expense.id} />
      ))
      }
    </Card>
  );
};

export default Expenses;