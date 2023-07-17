import './App.css';
import Toolbar from './components/Toolbar';
import List from './components/List';

function App() {
  return (
    <div className="App">
        <h3>TODO List</h3>
        <Toolbar />
        <List />
    </div>
  );
}

export default App;
