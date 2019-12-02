import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

const list = [
  { id: 1, name: "O nas", path: "/", exact: true },
  {
    id: 2,
    name: "Menu",
    path: "/menu",
    exact: false
  },
  {
    id: 3,
    name: "Kontakt",
    path: "/contact",
    exact: false
  },
  {
    id: 4,
    name: "Promocje",
    path: "/prom",
    exact: false
  }
];
const Navigation = () => {
  const menu = list.map(item => (
    <li key={item.id}>
      <NavLink to={item.path} exact={item.exact}>
        {item.name}
      </NavLink>
    </li>
  ));
  return (
    <>
      <nav className="navigation">
        <ul>{menu}</ul>
      </nav>
    </>
  );
};

export default Navigation;
