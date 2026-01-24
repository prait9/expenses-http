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
      <ExpenseItem data={props.dataMain[0]} />
      <ExpenseItem data={props.dataMain[1]} />
      <ExpensesFilter onChangeFilter={filterChangeHandler} />
    </Card>
  );
};

export default Expenses;