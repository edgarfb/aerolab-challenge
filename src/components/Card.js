import React from "react";
import styles from "./Card.module.css";
import coin from "../assets/icons/coin.svg";

function CardHover(props) {
  return (
    <div className={styles.cardHover}>
      <div className={styles.cardInfoInner}>
        <div className={styles.costBox}>
          <span>{props.cost}</span>
          <img src={coin} alt="coin" />
        </div>
        <button>Reddem now</button>
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div className={styles.card}>
      <CardHover cost={props.cost} />
      <div className={styles.cardImg}>
        <img src={props.img} alt={props.name} />
      </div>
      <div className={styles.cardInfo}>
        <h6>{props.category}</h6>
        <h5>{props.name}</h5>
      </div>
    </div>
  );
}

export default Card;
