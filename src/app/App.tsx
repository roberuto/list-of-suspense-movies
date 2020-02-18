import React from "react";
import { Switch, Route } from "react-router-dom";

import { Home } from "./views/Home/Home";
import { Reveal } from "./views/Reveal/Reveal";
import { Hidden } from "./views/Hidden/Hidden";
import { Collapse } from "./views/Collapse/Collapse";

import "./App.css";

export const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/reveal-order">
          <Reveal />
        </Route>
        <Route path="/forward-collapse">
          <Collapse />
        </Route>
        <Route path="/backwards-hide">
          <Hidden />
        </Route>
      </Switch>
    </div>
  );
};
