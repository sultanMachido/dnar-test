import logo from "./logo.svg";
import "./App.css";
import {Route,Switch} from 'react-router-dom';
import PageOne from "./Pages/PageOne";
import PageTwo from "./Pages/PageTwo";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={PageOne} />
        <Route path="/pagetwo" component={PageTwo} />
      </Switch>
    </div>
  );
}

export default App;
