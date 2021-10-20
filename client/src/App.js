import Grid from './Components/Grid';
import Home from './Components/Home'
import Login from './Components/Login'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path='/login'>
        <Login/>
        </Route>
        <Route path='/grid'>
          <Grid/>
        </Route>
        <Home/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
