import React from "react";
import styles from "./Card.module.css";
import AppContext from "../context/app-context";
import CardHover from "./CardHover";
import CardHoverDisable from "./CardHoverDisable";

function Card(props) {
  const context = React.useContext(AppContext);

  return (
    <div className={styles.card}>
      {props.cost <= context.user.points && (
        <CardHover
          cost={props.cost}
          onClick={() => context.reddemHandler(props.producId)}
        />
      )}
      {props.cost > context.user.points && (
        <CardHoverDisable cost={props.cost} userPoints={context.user.points} />
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
