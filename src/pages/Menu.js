import React from "react";
import "../styles/Menu.css";
import MenuList from "../components/MenuList";

const Menu = () => {
  return (
    <div className="menu">
      <h1>Kiedy zamierzasz nas odwiedzić?</h1>
      <MenuList />
    </div>
  );
};

export default Menu;
