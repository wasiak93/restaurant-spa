import React from "react";
import Opinion from "../components/Opinion.js";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="info">
        <h2>Nowy Świat 1</h2>
        <p>Godziny otwarcia: </p>
        <p>Poniedziałek - Niedziela </p>
        <p>8:00 - 24:00</p>
      </div>

      <Opinion />
    </div>
  );
};

export default Contact;
