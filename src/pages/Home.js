import React from "react";
import Welcome from "../components/Welcome";
import Sorter from "../components/Sorter";
import Products from "../components/Products";
import MainContainer from "../components/MainContainer";

function Home(props) {
  return (
    <React.Fragment>
      <Welcome />
      <MainContainer>
        <Sorter />
        <Products products={props.products} />
      </MainContainer>
    </React.Fragment>
  );
}

export default Home;
