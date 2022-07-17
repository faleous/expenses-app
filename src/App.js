import './App.css';
import CostItem from './components/CostItem';
import ListCostItems from './components/ListCostItmes';

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
    },
    {
      date: new Date(2022, 5, 13),
      description: 'Present',
      amount: 49.99
    }
  ]

  return (
    <div className="App">
      Let's get started!
      <ListCostItems costs={costs}/>
    </div>

  );
}

export default App;
