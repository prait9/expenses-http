import ExpenseItem from './expenseItem.jsx';
import './expenses.css';
import Card from '../UI/card.jsx';

const Expenses = (props) => {

  return (
    <Card className="expenses">
      <ExpenseItem data={props.dataMain[0]} />
      <ExpenseItem data={props.dataMain[1]} />
    </Card>
  );
};

export default Expenses;