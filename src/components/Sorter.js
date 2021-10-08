import React from "react";
import styles from "./Sorter.module.css";

function Button(props) {
  return <button onClick={props.onClick}>{props.label}</button>;
}

const labels = ["Most recent", "Lower price", "Highest price"];

function Sorter(props) {
  return (
    <div className={styles.sorter}>
      <div className={styles.productAmount}>16 of 32 products</div>
      <div className={styles.sortBy}>
        Sort by:
        {labels.map((label) => {
          return (
            <Button
              onClick={() => props.onSortProducts(label)}
              key={Math.random()}
              label={label}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Sorter;
