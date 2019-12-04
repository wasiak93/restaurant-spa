import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "../pages/About";
import Menu from "../pages/Menu";
import Meals from "../components/Meals";
import Contact from "../pages/Contact";
import Prom from "../pages/Prom.js";

// const Contact = () => <h2> kontakt</h2>;
// const Prom = () => <h2> promocje</h2>;
const ErrorPage = () => <h2>podana strona nie istnieje</h2>;

const Main = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={About} />
        <Route path="/menu" exact component={Menu} />
        <Route path="/menu/:id" component={Meals} />
        <Route path="/contact" component={Contact} />
        <Route path="/prom" component={Prom} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
};

export default Main;
