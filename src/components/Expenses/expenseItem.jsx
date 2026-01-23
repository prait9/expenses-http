import './expenseItem.css'; 
import ExpenseDate from './expenseDate.jsx';
import React, { useState } from 'react';


const ExpenseItem = (props) => {
    const [Title, setTitle] = useState(props.data.title);
    
    const clickHandler = () => {
        console.log('Updated')
        setTitle(`Updated by click ${Title}`);
        console.log(Title);
    }

    return  (
        <>
        <div className= "expense-item">
            <ExpenseDate date={props.data.date} />
            <div className= "expense-item__description">
                <h2>{props.data.title}</h2>
                <div className="expense-item__price">{props.data.price}</div>
            </div>
        </div>
        <button onClick={clickHandler}>Click me</button>
        
        
        </>
    );
}

export default ExpenseItem; 