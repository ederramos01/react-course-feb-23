import ExpenseItem from "./components/ExpenseItem";

function App() {
  
  const expenses = [
    { title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) },
    { title: 'Car Insurance', amount: 296.30, date: new Date(2021, 2, 25) },
    { title: 'Car Insurance', amount: 394.85, date: new Date(2021, 2, 23) },
    { title: 'Car Insurance', amount: 654.03, date: new Date(2021, 2, 7) },
  ];

  return (
    <div className="App">
      <h1>Let's start with ReactJS</h1>
      <ExpenseItem expenses={expenses} />
    </div>
  );
}

export default App;
