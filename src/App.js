import React from "react";

import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import Sorter from "./components/Sorter";

function App() {
  const [products, setProducts] = React.useState();
  const [original, setOriginal] = React.useState();
  let [init, setInit] = React.useState(0);
  let [end, setEnd] = React.useState(16);

  function nextHandler() {
    if (end === products.length) {
      console.log("there is no way to go!");
      return;
    }
    setInit((prev) => prev + 16);
    setEnd((prev) => prev + 16);
  }
  function prevHandler() {
    if (init === 0) {
      return;
    }
    setInit((prev) => prev - 16);
    setEnd((prev) => prev - 16);
  }
  // I try to used this function as an module but does not working because its needs the states from this Component
  // I think I can use context to achieve that but I not have that knowledge yet
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

      {/* init prop to display the arrow left */}
      {/* end prop to display the amout of products */}
      <Sorter
        init={init}
        end={end}
        onSortProducts={sortProductsHandler}
        onNextClick={nextHandler}
        onPrevClick={prevHandler}
      />
      <div className="products">
        {products &&
          products
            .slice(init, end)
            .map((pro) => (
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
