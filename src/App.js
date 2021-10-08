import React from "react";

import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  const [products, setProducts] = React.useState();
  if (products !== undefined) {
    console.log(products);
  }
  React.useEffect(() => {
    let data = fetch("https://coding-challenge-api.aerolab.co/products", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTQyNmQ4N2MxNmRiNDAwMWEzMWE0OGMiLCJpYXQiOjE2MzE3NDMzNjd9.fjleWcbC4nvNoj321BDxkJHJ_M3HLMUxjRr7hTjDxQc",
      },
    })
      .then((res) => res.json())
      .then((data) => setProducts([...data]));
  }, []);
  return (
    <div className="App">
      <Header />

      <div className="welcomeImage">
        <div className="welcome-text">
          <h3>Electronics</h3>
        </div>
      </div>

      <div className="products">
        {products &&
          products.map((pro) => (
            <Card
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
