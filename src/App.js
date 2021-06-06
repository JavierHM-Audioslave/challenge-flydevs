import { useDispatch } from "react-redux";
import { willSetPokemons } from "./Actions/pokemonsAction";

// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "./Styles/App.css";
import {Router, Route, Switch} from "react-router-dom";
import history from "./Helpers/history";
import Home from "./Home";

// function App() {
const App = () => {

  const dispatch = useDispatch();
  dispatch(willSetPokemons());

  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Home} />
        {/* <Route exact path="/character" component={Character} />
        <Route component={PageNotFound} /> */}
      </Switch>
    </Router>
  );
}

export default App;
