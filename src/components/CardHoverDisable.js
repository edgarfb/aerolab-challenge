import React from "react";
import styles from "./CardHoverDisable.module.css";
import coin from "../assets/icons/coin.svg";

function CardHover(props) {
  const diff = props.cost - props.userPoints;
  return (
    <div className={styles.cardHover}>
      <div className={styles.cardInfoInner}>
        <div className={styles.costBox}>
          <span>{props.cost}</span>
          <img src={coin} alt="coin" />
        </div>
        <button>You need {diff} more</button>
      </div>
    </div>
  );
}

export default CardHover;
