import './App.css';
import CostItem from './components/CostItem';

function App() {
  const costs = [
    {
      date: new Date(2022, 4, 10),
      description: 'Financial operations',
      amount: 12.33
    },
    {
      date: new Date(2022, 4, 11),
      description: 'Food',
      amount: 2.33
    }
  ]

  return (
    <div className="App">
      Let's get started!
      <CostItem date={costs[0].date} description={costs[0].description} amount={costs[0].amount}/>
      <CostItem date={costs[1].date} description={costs[1].description} amount={costs[1].amount}/>
    </div>
  );
}

export default App;
