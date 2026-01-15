import ExpenseItem from './expenseItem.jsx';
import './expenses.css';

const Expenses = (props) => {
           console.log(props);

  return (
    <div className="expenses">
      <ExpenseItem data={props.dataMain[0]} />
      <ExpenseItem data={props.dataMain[1]} />
    </div>
  );
};

export default Expenses;