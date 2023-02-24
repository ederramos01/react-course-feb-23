import './ExpenseDate.css';

function ExpenseDate({item}) {
    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{ item.date.toLocaleString('en-US', { month: 'long' }) }</div>
            <div className='expense-date__year'>{ item.date.toLocaleString('en-US', { day: '2-digit' }) }</div>
            <div className='expense-date_day'>{ item.date.getFullYear() }</div>
        </div>
    )
}

export default ExpenseDate;