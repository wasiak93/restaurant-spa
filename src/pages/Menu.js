import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <h1>Kiedy zamierzasz nas odwiedzić?</h1>
      <ul>
        <li>
          <NavLink to="/menu/breakfast"> do 12:00</NavLink>
        </li>
        <li>
          <NavLink to="/menu/lunch"> 12:00 - 16:00</NavLink>
        </li>
        <li>
          <NavLink to="/menu/cart"> od 16:00</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
