import React from "react";
import styles from "./Card.module.css";

function Card(props) {
  return (
    <div className={styles.card}>
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
