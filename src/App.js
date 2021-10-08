import React from "react";

import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import Sorter from "./components/Sorter";

function App() {
  const [products, setProducts] = React.useState();
  const [original, setOriginal] = React.useState();

  function sortProductsHandler(label) {
    switch (label) {
      case "Most recent":
        setProducts([...original]);
        break;
      case "Lower price":
        let lower = products.sort((a, b) => a.cost - b.cost);
        setProducts([...lower]);
        break;
      case "Highest price":
        let highest = products.sort((a, b) => b.cost - a.cost);
        setProducts([...highest]);
        break;

      default:
        console.log("I am Groot");
        break;
    }
  }

  React.useEffect(() => {
    fetch("https://coding-challenge-api.aerolab.co/products", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTQyNmQ4N2MxNmRiNDAwMWEzMWE0OGMiLCJpYXQiOjE2MzE3NDMzNjd9.fjleWcbC4nvNoj321BDxkJHJ_M3HLMUxjRr7hTjDxQc",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setOriginal([...data]);

        setProducts([...data]);
      });
  }, []);
  return (
    <div className="App">
      <Header />

      <div className="welcomeImage">
        <div className="welcome-text">
          <h3>Electronics</h3>
        </div>
      </div>
      <Sorter onSortProducts={sortProductsHandler} />
      <div className="products">
        {products &&
          products.map((pro) => (
            <Card
              key={pro._id}
              img={pro.img.url}
              name={pro.name}
              category={pro.category}
              cost={pro.cost}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
