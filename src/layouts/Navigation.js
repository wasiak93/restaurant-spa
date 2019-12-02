import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

const Navigation = () => {
  return (
    <>
      <nav className="navigation">
        <ul>
          <li>
            <NavLink to="/" exact>
              O nas
            </NavLink>
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
