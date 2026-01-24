import React from 'react';
import './expenseFilter.css';
import { useState } from 'react';


const ExpensesFilter = (props) => {
    const [filteredYear, setFilteredYear] = useState('2024');

    const filterChangeHandler = (event) => {
        setFilteredYear(event.target.value);
        props.onChangeFilter(event.target.value);
    }   


    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={filteredYear} onChange={filterChangeHandler}>
                    <option value='2023'>2023</option>
                    <option value='2024'>2024</option>
                    <option value='2025'>2025</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;