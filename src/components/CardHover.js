import React from "react";
import styles from "./CardHover.module.css";
import coin from "../assets/icons/coin.svg";

function CardHover(props) {
  return (
    <div className={styles.cardHover}>
      <div className={styles.cardInfoInner}>
        <div className={styles.costBox}>
          <span>{props.cost}</span>
          <img src={coin} alt="coin" />
        </div>
        <button className={styles.btn} onClick={props.onClick}>
          Reddem now
        </button>
      </div>
    </div>
  );
}

export default CardHover;
