import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PhoneList from "./components/PhoneList";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/phones" component={PhoneList} />
      </Switch>
    </Router>
  );
};

export default App;
