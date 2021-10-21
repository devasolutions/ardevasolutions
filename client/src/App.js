import Grid from './Components/Grid';
import Home from './Components/Home'
import Login from './Components/Login'
import Clients from './Components/Clients';
import Solutions from './Components/Solutions';
import Developers from './Components/Developers';
import Technologies from './Components/Technologies';
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
        <Route path='/technologies'>
          <Grid/>
          <Technologies/>
        </Route>
        <Route path='/solutions'>
          <Grid/>
          <Solutions/>
          </Route>
          <Route path='/developers'>
          <Grid/>
          <Developers/>
          </Route>
          <Route path='/clients'>
          <Grid/>
          <Clients/>
        </Route>
        <Home/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
