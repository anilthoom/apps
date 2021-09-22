import ExpenseItem from "./components/ExpenseItem";

function App() {
  const items = [
    {
      title: 'Car Insurance',
      date: new Date(),
      amount: 23.49
    },
    {
      title: 'Sofa cleaning',
      date: new Date(),
      amount: 10.13
    },
  ];
  return (
    <div>
      <p>Welcome</p>
      <ExpenseItem title={items[0].title} date={items[0].date} amount={items[0].amount}></ExpenseItem>
      <ExpenseItem title={items[1].title} date={items[1].date} amount={items[1].amount}></ExpenseItem>
    </div>
  );
}

export default App;