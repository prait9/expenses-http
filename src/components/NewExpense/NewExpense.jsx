import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm.jsx";
import { useState } from "react";

const NewExpense = (props) => {
  const [editForm, setEditForm] = useState(false);

    const openFormHandler = (expenseForm) => {
      setEditForm(true);
    };

    const closeFormHandler = (expenseForm) => {
      setEditForm(false);
    };


  

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onSaveExpenseData(expenseData);
  };

  return (
    <div className="new-expense">
       {!editForm && <button onClick={openFormHandler}>Add New Expense</button>}
      {editForm && <ExpenseForm 
      onSaveExpenseData={saveExpenseDataHandler}
      onCancel={closeFormHandler}
      />}
    </div>
  );
};

export default NewExpense;
