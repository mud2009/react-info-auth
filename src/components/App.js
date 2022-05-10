import React from "react";
import Navbar from "./Navbar"
import Control from "./Control";
import SignIn from "./SignIn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/">
          <Control/>
        </Route>
      </Switch>
    </Router>
    );
}

export default App;
