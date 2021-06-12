import React from "react";
import { useDispatch } from "react-redux";
import { willSetPokemons } from "./Actions/pokemonsAction";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "./Styles/App.css";
import {Router, Route, Switch} from "react-router-dom";
import history from "./Helpers/history";
import Home from "./Components/Home";

// function App() {
const App = () => {

  const dispatch = useDispatch();
  dispatch(willSetPokemons());

  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Home} />
        {/* <Route component={PageNotFound} /> */}
      </Switch>
    </Router>
  );
}

export default App;
