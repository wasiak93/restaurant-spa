import React, { Component } from "react";
import "../styles/Hamburger.css";

class Hamburger extends Component {
  state = {
    active: false
  };
  handleClick = () => {
    this.setState({
      active: !this.state.active
    });
  };
  render() {
    const classes = ["hamburger"];
    if (this.state.active) classes.push("hamburger-active");
    return (
      <button className={classes.join(" ")} onClick={this.handleClick}>
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    );
  }
}

export default Hamburger;
