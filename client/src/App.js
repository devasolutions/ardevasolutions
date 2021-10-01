import Sidebar from './Components/Sidebar';
import Grid from './Components/Grid';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
      <Grid/>
      </div>
    </Router>
  );
}

export default App;
