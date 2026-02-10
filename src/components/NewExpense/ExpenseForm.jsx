import "./ExpenseForm.css";
import React, {Fragment, useRef, useState} from "react";
import Error from '../UI/error.jsx';


const ExpenseForm = (props) => {
  const [error, setError] = useState(null);

  const titleInputRef = useRef();
  const priceInputRef = useRef();
  const dateInputRef = useRef();

  const errorHandler = () => {
    setError(null);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current?.value || "";
    const enteredPrice = priceInputRef.current?.value || "";
    const enteredDate = dateInputRef.current?.value || "";

    if (
      enteredTitle.trim().length === 0 ||
      enteredPrice.toString().trim().length === 0 ||
      enteredDate.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid title, price and date (non-empty values).",
      });
      return;
    }

    const expenseData = {
      title: enteredTitle,
      amount: parseFloat(enteredPrice),
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    // clear inputs
    if (titleInputRef.current) titleInputRef.current.value = "";
    if (priceInputRef.current) priceInputRef.current.value = "";
    if (dateInputRef.current) dateInputRef.current.value = "";

    // close the form
    if (props.onCancel) props.onCancel();
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
