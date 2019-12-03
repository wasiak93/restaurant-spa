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
  },
  lunch: {
    title: "Lunch",
    details: [
      {
        id: 0,
        name: "Danie dnia- Ślązak",
        price: 19.9,
        ingridents:
          "Zupa pomidorowa, zrazy wołowe z czerwona kapustą i kluseczkami, kompot"
      },
      {
        id: 1,
        name: "Danie dnia- Fit",
        price: 19.9,
        ingridents:
          "Zupa krem z brokułów, grilowana pierś z kurczaka z ryże brązowym i warzywami gotowanymi na parza, woda"
      }
    ]
  },
  cart: {
    title: "Karta główna",
    details: [
      {
        id: 0,
        name: "Kotlet schabowy",
        price: 26.9,
        ingridents: "Kotlet schabowy z kością, ziemniaki z wody, mizeria"
      },
      {
        id: 1,
        name: "Placek po zbójnicku",
        price: 29.9,
        ingridents:
          "2 placki ziemniaczane, mięso wołowe w sosie myśliwskim z papryką, pieczarkami, ogórkiem kiszony, wszystko posypane żółtym serem i okraszone kwaśną śmietaną"
      },
      {
        id: 2,
        name: "Zapiekanka po polsku",
        price: 20.9,
        ingridents:
          "ziemniaki pieczone, mięso wołowe, kurczak, boczek, papryka, pomidor, cukinia, sos beszamelowy, wszystko przełożone plastrami żółtego sera i zapieczone"
      }
    ]
  }
};
const Meals = data => {
  const meal = data.match.params.id;
  const list = [...mealsList[meal].details];

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
      <h1>{mealsList[meal].title}</h1>
      <div className="text">
        <MenuList />
        <section className="content">{meals}</section>
      </div>
    </div>
  );
};

export default Meals;
