import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import SongsIndex from './components/SongsIndex';
import SongsForm from './components/SongsForm';
import Nav from "./components/Nav"

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/songs" component={SongsIndex}/>
          <Route exact path="/songs/new" component={SongsForm}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
