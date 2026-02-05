import "./ExpenseForm.css";
import React, {Fragment, useRef, useState} from "react";
import Error from '../UI/error.jsx';


const ExpenseForm = (props) => {
  const[error, setError] = useState(null);
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredPrice: "",
    enteredDate: "",
  });

  const titleInputRef = React.createRef();
  const priceInputRef = React.createRef();
  const dateInputRef = React.createRef();

const errorHandler = () => {
  setError(null);
}

  const submitHandler = (event) => {
const enteredTitle = titleInputRef.current.value;
const enteredPrice = priceInputRef.current.value;
const enteredDate = dateInputRef.current.value;

    event.preventDefault();
    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredPrice,
      date: userInput.enteredDate,
    };
    setUserInput({
      enteredTitle: "",
      enteredPrice: "",
      enteredDate: "",
    });
    props.onSaveExpenseData(expenseData);

    if (enteredTitle.trim().length === 0 || enteredPrice.trim().length === 0 || enteredDate.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid title, price and date (non-empty values)."
      });
      return;
    }
  };

  return (
<Fragment>
  {error && <Error 
  title = {error.title}
  message = {error.message}
  onConfirm = {errorHandler}
  />}

    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            id="title"
            ref={titleInputRef}
          />
        </div>

        <div className="new-expense__control">
          <label>Price</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            id="amount"
            ref={priceInputRef}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2024-11-12"
            max="2026-01-31"
            ref={dateInputRef}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button type="button" onClick={props.onCancel}>Cancel</button>
      </div>
    </form>
    </Fragment>
  );
};

export default ExpenseForm;
