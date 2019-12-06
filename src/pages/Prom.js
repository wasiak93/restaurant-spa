import React from "react";
import "../styles/Prom.css";

const proms = [
  {
    position: "first",
    day: "Poniedziałek",
    discount: "Do każdego dania głównego kompot gratis"
  },
  {
    position: "second",
    day: "Wtorek",
    discount: "Dla rachunków wyższych niż 200 złotych 10% zniżki"
  },
  { position: "third", day: "Czartek", discount: "Lunch za połowę ceny!" }
];

const Prom = () => {
  const promList = proms.map(item => (
    <div key={item.day}>
      <h2 className={item.position}>W każdy: {item.day}</h2>
      <p>{item.discount}</p>
    </div>
  ));

  return <div className="prom">{promList}</div>;
};

export default Prom;
