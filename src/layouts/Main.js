import React from "react";
import { Route } from "react-router-dom";
import About from "../pages/About";
import Menu from "../pages/Menu";

const Contact = () => <h2> kontakt</h2>;
const Prom = () => <h2> promocje</h2>;

const Main = () => {
  return (
    <div>
      <Route path="/" exact component={About} />
      <Route path="/menu" component={Menu} />
      <Route path="/contact" component={Contact} />
      <Route path="/prom" component={Prom} />
    </div>
  );
};

export default Main;
