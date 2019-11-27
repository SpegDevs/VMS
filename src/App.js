import React from "react";
import { Ide } from "./pages/Ide";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RestfulProvider } from "restful-react";

export const App = () => {
  return (
    <RestfulProvider base="">
      <Router>
        <Switch>
          <Route path="/">
            <Ide />
          </Route>
        </Switch>
      </Router>
    </RestfulProvider>
  );
};
