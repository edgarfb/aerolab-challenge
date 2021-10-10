import React from "react";
import styles from "./Card.module.css";
import UserContext from "../context/user-context";
import CardHover from "./CardHover";
import CardHoverDisable from "./CardHoverDisable";

function Card(props) {
  const userCtx = React.useContext(UserContext);

  console.log("userCtx from Card", userCtx.name);
  return (
    <div className={styles.card}>
      {props.cost < userCtx.points && <CardHover cost={props.cost} />}
      {props.cost > userCtx.points && (
        <CardHoverDisable cost={props.cost} userPoints={userCtx.points} />
      )}
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
