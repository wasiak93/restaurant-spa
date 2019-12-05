import React, { Component } from "react";
import img1 from "../images/restaurant1.jpg";
import img2 from "../images/restaurant2.jpg";
import img3 from "../images/restaurant3.jpg";
import img4 from "../images/restaurant4.jpg";
import "../styles/Header.css";

class Header extends Component {
  state = { width: "" };
  handleResize = () => {
    const width = window.innerWidth;
    this.setState({
      width
    });
  };
  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  render() {
    const { width } = this.state;
    let imgActual = "";
    console.log(width);
    if (width < 460) {
      imgActual = img1;
    } else if (460 <= width && width < 640) {
      imgActual = img2;
      console.log("zmiana");
    } else if (640 <= width && width < 1280) {
      imgActual = img3;
    } else if (1280 <= width) {
      imgActual = img4;
    }

    return (
      <>
        <img src={imgActual} alt="" />
        <h1>Smakowite Bistro</h1>
      </>
    );
  }
}

export default Header;
