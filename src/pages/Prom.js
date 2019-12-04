import React from "react";
import "../styles/Prom.css";

const proms = [
  { day: "Poniedziałek", discount: "Do każdego dania głównego kompot gratis" },
  {
    day: "Wtorek",
    discount: "Dla rachunków wyższych niż 200 złotych 10% zniżki"
  },
  { day: "Czartek", discount: "Lunch za połowę ceny!" }
];

const Prom = () => {
  const promList = proms.map(item => (
    <div key={item.day}>
      <h1>W każdy: {item.day}</h1>
      <p>{item.discount}</p>
    </div>
  ));

  return <div className="prom">{promList}</div>;
};

export default Prom;
