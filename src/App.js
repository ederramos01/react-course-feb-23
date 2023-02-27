import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  { title: 'Toilet Paper', amount: 294.67, date: new Date(2020, 9, 28) },
  { title: 'New TV', amount: 296.30, date: new Date(2022, 5, 25) },
  { title: 'Car Insurance', amount: 394.85, date: new Date(2020, 2, 23) },
  { title: 'New Desk (Wooden)', amount: 654.03, date: new Date(2021, 7, 7) },
  { title: 'Bottle of water', amount: 454.36, date: new Date(2022, 9, 11) }
];

const App = () =>{

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    });
  }

  return (
    <div className="App">\
      <NewExpense onAddExpense={addExpenseHandler}/>      
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
