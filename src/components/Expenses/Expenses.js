import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import './Expenses.css';

const Expenses =() => {
    
    const expenses = [
        { title: 'Toilet Paper', amount: 294.67, date: new Date(2023, 9, 28) },
        { title: 'New TV', amount: 296.30, date: new Date(2022, 5, 25) },
        { title: 'Car Insurance', amount: 394.85, date: new Date(2023, 2, 23) },
        { title: 'New Desk (Wooden)', amount: 654.03, date: new Date(2021, 7, 7) }
      ];

    return (
        <Card className='expenses'>
            <ExpenseItem expenses={expenses} />
        </Card>
    );
}

export default Expenses;