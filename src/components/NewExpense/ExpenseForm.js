import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [showForm, setShowForm] = useState(true);

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  // const changeHandler = (e) => {
  //   setInfo((prevState) => {
  //     return expenseData
  //      return {
  //        ...prevState,
  //        [e.target.name]: e.target.value,
  //      };
  //   });
  // };

  const changeStatusToFalse = () => {
    setShowForm(false);
  }

  const changeStatusToTrue = () => {
    setShowForm(true);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    changeStatusToTrue();
  };

  return (
    <>
      {!showForm === true && (
        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                value={enteredTitle}
                onChange={titleChangeHandler}
              />
            </div>
            <div className="new-expense__control">
              <label htmlFor="amount">Amount</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                name="amount"
                id="amount"
                value={enteredAmount}
                onChange={amountChangeHandler}
              />
            </div>
            <div className="new-expense__control">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                min="2019-01-01"
                max="2022-12-31"
                name="date"
                id="date"
                value={enteredDate}
                onChange={dateChangeHandler}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button type="button" onClick={changeStatusToTrue}>Cancel</button>
            <button type="submit">Add Expense</button>
          </div>
        </form>
      )}
      {showForm === true &&
        <button onClick={changeStatusToFalse}>Add new expense</button>
      }
    </>
  );
};

export default ExpenseForm;
