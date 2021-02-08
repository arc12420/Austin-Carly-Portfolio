import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Books from "./components/Books/Books";
import Projects from "./components/Projects/Projects";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/Books" component={Books} />
    <Route path="/Projects" component={Projects} />
    <Route path="/About" component={About} />
  </Switch>
);
