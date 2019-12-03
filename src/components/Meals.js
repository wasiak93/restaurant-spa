import React from "react";
import MenuList from "./MenuList";
import "../styles/Breakfast.css";

const mealsList = {
  breakfast: {
    title: "Śniadanie",
    details: [
      {
        id: 0,
        name: "Jajecznica",
        price: 16.9,
        ingridents:
          "3 jajka, szczypiorek, boczek, masło, pomidor, ogórek, kromka chleba,herbata"
      },
      {
        id: 1,
        name: "Angielskie Śniadanie",
        price: 19.9,
        ingridents:
          "jajko sadzone, bekon, fasolka w sosie pomidorowym, 2 kiełbaski,tost, herbata"
      }
    ]
  }
};
const Meals = data => {
  const meal = data.match.params.id;
  const list = [...mealsList[meal].details];
  console.log(meal);
  console.log(list);
  console.log(mealsList.meal);
  const meals = list.map(item => (
    <div key={item.id}>
      <div className="header_meal">
        <h2>{item.name}</h2>
        <p className="price">{item.price}</p>
      </div>
      <p>{item.ingridents}</p>
    </div>
  ));
  return (
    <div className="meal">
      <h1>{meal.title}</h1>
      <div className="text">
        <MenuList />
        <section className="content">{meals}</section>
      </div>
    </div>
  );
};

export default Meals;
