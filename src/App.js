import React from "react";
import { Ide } from "./pages/Ide";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Ide />
        </Route>
      </Switch>
    </Router>
  );
};
