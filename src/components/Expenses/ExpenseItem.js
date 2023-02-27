import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

import "./ExpenseItem.css";

const ExpenseItem = ({ expense }) => {
  // const [element, setElement] = useState(expenses);

  // const clickHandler = (title) => {
  //   const elementModified = element.map((item) => {
  //       if(item.title === title ) {
  //         item.title = 'updated'
  //         return {...item, title: item.title};
  //       }
  //       return item;
  //     })
  //   setElement(elementModified);
  // };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={expense.date} />
        <div className="expense-item__description" name="title">
          <h2>{expense.title}</h2>
          <div className="expense-item__price">${expense.amount}</div>
        </div>
        {/* <button onClick={() => clickHandler(item.title)}>Change Title</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
