import React from "react";
import styles from "./Products.module.css";
import Card from "../components/Card";
import AppContext from "../context/app-context";
import Pagination from "./Pagination";

function Products(props) {
  const context = React.useContext(AppContext);
  return (
    <React.Fragment>
      <div className={styles.products}>
        {props.products &&
          props.products
            .slice(context.init, context.end)
            .map((pro) => (
              <Card
                producId={pro._id}
                key={pro._id}
                img={pro.img.url}
                name={pro.name}
                category={pro.category}
                cost={pro.cost}
              />
            ))}
      </div>
      <div className={styles.pagination}>
        <Pagination />
      </div>
    </React.Fragment>
  );
}

export default Products;
