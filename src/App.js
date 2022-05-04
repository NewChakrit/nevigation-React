import "./App.css";
import Nevigation from "./components/Nevigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import User from "./components/pages/User";

function App() {
  return (
    <div className="App">
      <Router>
        <Nevigation />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/user" component={User} />
          <Route path="/products" component={Products} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
