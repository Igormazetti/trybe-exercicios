// arquivo App.js, criado pelo create-react-app, modificado
import React from "react";
import Order from "./Order";

class App extends React.Component {
  render() {
    const orders = [
      {
        id: 102,
        user: "cena@gmail.com",
        product: "Razer Headphone",
        price: {
          value: 99.99,
          currency: "dollars",
        },
      },
      {
        id: 77,
        user: "cena@gmail.com",
        product: "Monster 500mL",
        price: {
          value: 9.99,
          currency: "dollars",
        },
      },
    ];

    return orders.map((pedido) => (
      <div className="App">
        <h1> Orders recently created </h1>
        <Order order={pedido} />
      </div>
    ));
  }
}

export default App;
