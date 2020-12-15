import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import SongsIndex from './containers/SongsIndex';
import AlbumsIndex from './containers/AlbumsIndex';
import SongsForm from './components/songs/SongsForm';
import AlbumsForm from './components/albums/AlbumsForm';
import Nav from "./components/Nav"

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/songs" component={SongsIndex}/>
          <Route exact path="/albums" component={AlbumsIndex}/>
          <Route exact path="/songs/new" component={SongsForm}/>
          <Route exact path="/albums/new" component={AlbumsForm}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
