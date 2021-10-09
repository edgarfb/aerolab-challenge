import React from "react";
import styles from "./Sorter.module.css";
import arrowRight from "../assets/icons/arrow-right.svg";
import arrowLeft from "../assets/icons/arrow-left.svg";

function Button(props) {
  return (
    <button
      // TODO I need to add the active btn
      className={props.className || styles.btn}
      onClick={props.onClick}
    >
      {props.label || props.children}
    </button>
  );
}

const labels = ["Most recent", "Lower price", "Highest price"];

function Sorter(props) {
  return (
    <div className={styles.sorter}>
      <div className={styles.sorterLeft}>
        <div className={styles.productAmount}>{props.end} of 32 products</div>

        <div className={styles.sortBy}>
          Sort by:{"   "}
          {labels.map((label) => {
            return (
              <Button
                onClick={() => {
                  props.onSortProducts(label);
                }}
                key={Math.random()}
                label={label}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.next}>
        {props.init > 0 && (
          <Button className={styles.btnArrow} onClick={props.onPrevClick}>
            <img src={arrowLeft} alt="" />
          </Button>
        )}
        <Button className={styles.btnArrow} onClick={props.onNextClick}>
          <img src={arrowRight} alt="" />
        </Button>
      </div>
    </div>
  );
}

export default Sorter;
