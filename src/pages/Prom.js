import React from "react";

const proms = [
  { day: "Poniedziałek", discount: "Do każdego dania głównego kompot gratis" },
  {
    day: "Wtorek",
    discount: "Dla rachunków wyższych niż 200 złotych 10% zniżki"
  },
  { day: "Środa", discount: "Lunch za połowę ceny!" }
];

const Prom = () => {
  const promList = proms.map(item => (
    <div key={item.day}>
      <h1>Promocja w: {item.day}</h1>
      <p>{item.discount}</p>
    </div>
  ));

  return <>{promList}</>;
};

export default Prom;
