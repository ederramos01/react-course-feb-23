import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

import "./ExpenseItem.css";
import { useState } from "react";

const ExpenseItem = ({expenses}) => {

  const [element, setElement] = useState(expenses);

  const clickHandler = (title) => {
    const elementModified = element.map((item) => {
        if(item.title === title ) {
          item.title = 'updated'
          return {...item, title: item.title};
        }
        return item;
      })
    setElement(elementModified);
  };

  return (
    <>
    {
        element.map((item, index) => (
        <Card className="expense-item" key={index}>
          <ExpenseDate date={item.date}/>
          <div className="expense-item__description" name='title'>
            <h2>{item.title}</h2>
            <div className="expense-item__price">${item.amount}</div>
          </div>
          <button onClick={() => clickHandler(item.title)}>Change Title</button>
        </Card>
        ))
      }
    </>
  );
};

export default ExpenseItem;
