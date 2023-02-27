import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from './ExpensesChart';

import "./Expenses.css";

import { useState } from "react";

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const getDateHandler = (yearSelected) => {
    setFilteredYear(yearSelected);
  };

  const filterExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onGetData={getDateHandler} />
        <ExpensesChart expenses={filterExpenses}/>
        <ExpensesList items={filterExpenses}/>
      </Card>
    </>
  );
};

export default Expenses;
