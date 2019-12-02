import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <h1>Kiedy zamierzasz nas odwiedzić?</h1>
      <NavLink to="/menu/breakfast"> do 12:00</NavLink>
      <NavLink to="/menu/lunch"> 12:00 - 16:00</NavLink>
      <NavLink to="/menu/cart"> od 16:00</NavLink>
    </div>
  );
};

export default Menu;
