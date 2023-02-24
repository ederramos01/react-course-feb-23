import React from "react";
import ExpenseDate from "./ExpenseDate";

import "./ExpenseItem.css";

function ExpenseItem({ expenses }) {

  return (
    <>
      {expenses.map((item, index) => (
        <div className="expense-item" key={index}>
          <ExpenseDate item={item}/>
          <div className="expense-item__description">
            <h2>{item.title}</h2>
            <div className="expense-item__price">${item.amount}</div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ExpenseItem;
