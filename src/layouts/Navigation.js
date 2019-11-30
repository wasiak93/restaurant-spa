import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

const Navigation = () => {
  return (
    <>
      <nav className="menu">
        <ul>
          <li>
            <NavLink to="/">O nas</NavLink>
          </li>
          <li>
            <NavLink to="menu">Menu</NavLink>
          </li>
          <li>
            <NavLink to="contact">Kontakt</NavLink>
          </li>
          <li>
            <NavLink to="prom">Promocje</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
