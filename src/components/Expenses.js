import ExpenseItem from "./ExpenseItem";

import './Expenses.css';

function Expenses() {
    
    const expenses = [
        { title: 'Car Insurance', amount: 294.67, date: new Date(2023, 9, 28) },
        { title: 'Car Insurance', amount: 296.30, date: new Date(2022, 5, 25) },
        { title: 'Car Insurance', amount: 394.85, date: new Date(2023, 2, 23) },
        { title: 'Car Insurance', amount: 654.03, date: new Date(2021, 7, 7) },
      ];

    return (
        <ExpenseItem expenses={expenses} className='expenses' />
    );
}

export default Expenses;