import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {

    const [info, setInfo] = useState({
        title: '',
        amount: '',
        date: ''
    });

    const changeHandler = (e) => {
        setInfo((prevState)=>{
            return {
                ...prevState,
                [e.target.name]: e.target.value,
            }
        });
    }

    const printInfo = (e) => {
        e.preventDefault();
        console.log(info);
    } 

    return (
    <>
      <form>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="title">Title</label>
            <input type="text" name='title' id="title" onChange={changeHandler}/>
          </div>
          <div className="new-expense__control">
            <label htmlFor="amount">Amount</label>
            <input type="number" min="0.01" step="0.01" name='amount' id="amount" onChange={changeHandler}/>
          </div>
          <div className="new-expense__control">
            <label htmlFor="date">Date</label>
            <input type="date" min="2019-01-01" max="2022-12-31" name='date' id="date" onChange={changeHandler} />
          </div>
        </div>
        <div className="new-expense__actions">
            <button onClick={printInfo}>Add Expense</button>
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;
