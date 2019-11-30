import React from "react";
import { Route } from "react-router-dom";

const About = () => <h2> o nas</h2>;
const Menu = () => <h2> menu</h2>;
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
