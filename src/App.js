import './App.css';
import Toolbar from './components/Toolbar';
import { ListProvider } from './components/Context';

function App() {
  return (
    <div className="App">
        <h3>TODO List</h3>
        <ListProvider>
        <Toolbar />
        </ListProvider>
    </div>
  );
}

export default App;
