import './ExpenseForm.css';
import React, { useState } from 'react';

const ExpenseForm = (props) => {

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredPrice, setEnteredPrice] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const TitleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  }
  const PriceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);
  }
  const DateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  }

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={TitleChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Price</label>
          <input type="number" min="0.01" step="0.01" onChange={PriceChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2024-11-12" max="2026-01-31" onChange={DateChangeHandler} />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm

