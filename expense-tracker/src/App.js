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
      title: 'Sofa cleaning',
      date: new Date(),
      amount: 10.13
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
      <Expenses items={expenses} />
    </div>
  );
}

export default App;