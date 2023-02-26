import React from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from "./components/Expenses/Expenses";

const App = () =>{

  return (
    <div className="App">
      <NewExpense />
      <Expenses />
    </div>
  );
}

export default App;
