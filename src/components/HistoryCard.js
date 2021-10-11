import React from "react";
import styles from "./HistoryCard.module.css";

function HistoryCard(props) {
  function formatDateHandler(propDate) {
    let date = Date.parse(propDate);
    let newDate = new Date(date);

    return newDate.toLocaleString();
  }
  return (
    <div>
      <picture className={styles.cardImg}>
        <source srcSet={props.imgHd + " 2x"} />
        <img src={props.img} alt={props.name} />
      </picture>
      <div className={styles.cardInfo}>
        <h5>{props.name}</h5>
        <h6>Category: {props.category}</h6>
        <h6>Cost: {props.cost}</h6>
        <h6>Redeem date: {formatDateHandler(props.date)}</h6>
      </div>
    </div>
  );
}

export default HistoryCard;
