import React from "react";
import styles from "./Sorter.module.css";
import arrowRight from "../assets/icons/arrow-right.svg";
import arrowLeft from "../assets/icons/arrow-left.svg";
import Pagination from "./Pagination";
import AppContext from "../context/app-context";

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
  const context = React.useContext(AppContext);
  return (
    <div className={styles.sorter}>
      <div className={styles.sorterLeft}>
        {/* <Pagination /> */}
        <div className={styles.sortBy}>
          <span className={styles.sortTxt}>Sort by:</span>
          {labels.map((label) => {
            return (
              <Button
                onClick={() => {
                  context.sortProductsHandler(label);
                }}
                key={Math.random()}
                label={label}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.next}>
        {context.init > 0 && (
          <Button className={styles.btnArrow} onClick={context.prevHandler}>
            <img src={arrowLeft} alt="" />
          </Button>
        )}
        <Button className={styles.btnArrow} onClick={context.nextHandler}>
          <img src={arrowRight} alt="" />
        </Button>
      </div>
    </div>
  );
}

export default Sorter;
