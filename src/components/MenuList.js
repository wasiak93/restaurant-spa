import React from "react";
import { NavLink } from "react-router-dom";

const MenuList = () => {
  return (
    <nav>
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
    </nav>
  );
};

export default MenuList;
