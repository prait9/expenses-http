import "./NewExpense.css";

import Expenseform from './ExpenseForm.jsx';        

const NewExpense = (props) => {
    return (
        <div className = 'new-expense'>
            <Expenseform/>
        </div>

    )
};

export default NewExpense;