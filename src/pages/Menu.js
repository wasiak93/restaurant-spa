import React from "react";
import "../styles/Menu.css";
import MenuList from "../components/MenuList";

const Menu = () => {
  return (
    <div className="menu">
      <h2>Kiedy zamierzasz nas odwiedzić?</h2>
      <MenuList />
    </div>
  );
};

export default Menu;
