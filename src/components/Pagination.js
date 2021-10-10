import React from "react";
import styles from "./Pagination.module.css";
import AppContext from "../context/app-context";

function Pagination() {
  const context = React.useContext(AppContext);
  return (
    <div className={styles.productAmount}>{context.end} of 32 products</div>
  );
}

export default Pagination;
