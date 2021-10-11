import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";

import History from "./pages/History";
import AppContext from "./context/app-context";
import addPointsHandler from "./helpers/add-points";

function App() {
  const [products, setProducts] = React.useState();
  const [original, setOriginal] = React.useState();
  const [init, setInit] = React.useState(0);
  const [end, setEnd] = React.useState(16);
  const [user, setUser] = React.useState();
  // I use isReedem to update the user info when a product is reddem
  // Be awere it's not a boolean, it use the "productId" and pass it value as dependency to React.useEffect
  const [isReedem, setIsRedeem] = React.useState();

  // request the user and store it on "user" state
  React.useEffect(() => {
    fetch("https://coding-challenge-api.aerolab.co/user/me", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTQyNmQ4N2MxNmRiNDAwMWEzMWE0OGMiLCJpYXQiOjE2MzE3NDMzNjd9.fjleWcbC4nvNoj321BDxkJHJ_M3HLMUxjRr7hTjDxQc",
      },
    })
      .then((res) => res.json())
      .then((data) => setUser({ ...data }));
  }, [isReedem]);

  // request the products and store it on "products" state
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

  function reddemHandler(producId) {
    const url = "https://coding-challenge-api.aerolab.co/redeem";
    fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTQyNmQ4N2MxNmRiNDAwMWEzMWE0OGMiLCJpYXQiOjE2MzE3NDMzNjd9.fjleWcbC4nvNoj321BDxkJHJ_M3HLMUxjRr7hTjDxQc",
      },
      body: JSON.stringify({
        productId: producId,
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        setIsRedeem(producId);
        console.log("Response from API", response);
      })
      .catch((error) => console.log(error.response));
  }

  const contextValues = {
    user: { ...user },
    init,
    end,
    sortProductsHandler,
    nextHandler,
    prevHandler,
    reddemHandler,
  };
  return (
    <AppContext.Provider value={contextValues}>
      <Router>
        <Header onAddPoint={addPointsHandler} />
        <Switch>
          <Route path="/" exact>
            <Home products={products} />
          </Route>
          <Route path="/history">
            <History isReedem={isReedem} />
          </Route>
          <Route path="/history">
            <History />
          </Route>
        </Switch>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
