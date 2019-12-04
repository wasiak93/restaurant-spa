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
    return (
      <button className="hamburger" onClick={this.handleClick}>
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    );
  }
}

export default Hamburger;
