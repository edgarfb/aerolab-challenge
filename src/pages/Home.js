import React from "react";
import Welcome from "../components/Welcome";
import Sorter from "../components/Sorter";
import Products from "../components/Products";

function Home(props) {
  return (
    <React.Fragment>
      <Welcome />
      <Sorter />
      <Products products={props.products} />
    </React.Fragment>
  );
}

export default Home;
