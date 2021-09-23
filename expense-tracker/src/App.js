import Expenses from "./components/Expenses";

function App() {
  const expenses = [
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
    {
      title: 'Carpentar work',
      date: new Date(),
      amount: 34.15
    },
    {
      title: 'Dry cleaning',
      date: new Date(),
      amount: 5.75
    },
  ];
  return (
    <div>
      <p>Welcome</p>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;