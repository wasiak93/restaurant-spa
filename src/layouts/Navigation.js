import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav>
        <ul>
          <NavLink to="/">O nas</NavLink>
          <NavLink to="menu">Menu</NavLink>
          <NavLink to="contact">Kontakt</NavLink>
          <NavLink to="prom">Promocje</NavLink>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
