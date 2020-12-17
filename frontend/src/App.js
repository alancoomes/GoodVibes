import logo from "./logo.svg";
import "./App.css";
import AlbumsContainer from "./containers/AlbumsContainer";
import SongsContainer from "./containers/SongsContainer";
import Home from "./components/Home";
import { Route } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/" component={Home} />
      <AlbumsContainer />
      <SongsContainer />
    </div>
  );
}

export default App;
