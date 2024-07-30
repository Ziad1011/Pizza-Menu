import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container header">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} />
        ))}
      </ul>

      {/* <Pizza
        name="Pizza Spinaci"
        ingredident="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/Spinaci.jpg"
        price="10 EGP"
      />

      <Pizza
        name="Pizza Funchini"
        ingredident="Tomato,and ricotta cheese"
        photoName="pizzas/Funghi.jpg"
        price="500 EGP"
      />

      <Pizza
        name="Pizza Salamino"
        ingredident="Tomato,and ricotta cheese and salt & papper"
        photoName="pizzas/salamino.jpg"
        price="300 EGP"
      /> */}
    </main>
  );
}

function Pizza(props) {
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <h5>{props.pizzaObj.price}</h5>
      </div>
    </li>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React PiZZa</h1>
    </header>
  );
}

function Footer() {
  const hours = new Date().getHours();
  console.log(hours);
  const opneHours = 12;
  const closeHours = 22;
  if (hours >= opneHours && hours <= closeHours) alert("We are Open");
  else alert("We are Closed");
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}.We Are Currently Open
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
