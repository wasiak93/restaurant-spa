import React from "react";
import "../styles/Hamburger.css";
const Hamburger = props => {
  const classes = ["hamburger"];
  if (props.active) classes.push("hamburger-active");
  return (
    <button className={classes.join(" ")} onClick={props.click}>
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
};

export default Hamburger;
