import "./expenseItem.css";
import ExpenseDate from "./expenseDate.jsx";
import React, { useState } from "react";

const ExpenseItem = (props) => {
  const [Title, setTitle] = useState(props.expenseData.title);
  const amountValue =
    props.expenseData.amount !== undefined
      ? props.expenseData.amount
      : props.expenseData.price;

  const clickHandler = () => {
    console.log("Updated");
    setTitle(`Updated by click ${Title}`);
    console.log(Title);
  };

  return (
    <li>
      <div className="expense-item">
        <ExpenseDate date={props.expenseData.date} />
        <div className="expense-item__description">
          <h2>{props.expenseData.title}</h2>
          <div className="expense-item__price">${Number(amountValue).toFixed(2)}</div>
        </div>
      </div>
      <button onClick={clickHandler}>Click me</button>
    </li>
  );
};

export default ExpenseItem;
