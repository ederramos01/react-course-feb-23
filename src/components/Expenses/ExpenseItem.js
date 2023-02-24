import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

import "./ExpenseItem.css";

const ExpenseItem = ({ expenses }) => {

  return (
    <>
      {expenses.map((item, index) => (
        <Card className="expense-item" key={index}>
          <ExpenseDate item={item}/>
          <div className="expense-item__description">
            <h2>{item.title}</h2>
            <div className="expense-item__price">${item.amount}</div>
          </div>
        </Card>
      ))}
    </>
  );
}

export default ExpenseItem;
