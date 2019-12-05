import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";
import Hamburger from "../components/Hamburger";

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

class Navigation extends Component {
  state = {
    active: false
  };
  handleClick = () => {
    this.setState({
      active: !this.state.active
    });
  };
  render() {
    const menu = list.map(item => (
      <li key={item.id} className="menu-item">
        <NavLink to={item.path} exact={item.exact}>
          {item.name}
        </NavLink>
      </li>
    ));
    const classesNav = ["main-nav"];
    if (this.state.active) classesNav.push("nav-active");
    return (
      <>
        <Hamburger click={this.handleClick} active={this.state.active} />
        <nav className={classesNav}>
          <ul>{menu}</ul>
        </nav>
      </>
    );
  }
}

export default Navigation;
