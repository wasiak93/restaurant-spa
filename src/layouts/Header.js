import React from "react";
import img1 from "../images/restaurant.jpg";
import "../styles/Header.css";

const Header = () => {
  return (
    <>
      <img src={img1} alt="" />
      <h1>Smakowite Bistro</h1>
    </>
  );
};

export default Header;
