import React from "react";
import styles from "./Card.module.css";
import UserContext from "../context/user-context";
import CardHover from "./CardHover";
import CardHoverDisable from "./CardHoverDisable";

function Card(props) {
  const userCtx = React.useContext(UserContext);

  function addPointsHandler() {
    const url = "https://coding-challenge-api.aerolab.co/user/points";
    fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTQyNmQ4N2MxNmRiNDAwMWEzMWE0OGMiLCJpYXQiOjE2MzE3NDMzNjd9.fjleWcbC4nvNoj321BDxkJHJ_M3HLMUxjRr7hTjDxQc",
      },
      body: JSON.stringify({
        amount: -1000,
      }),
    })
      .then((res) => res.json())
      .then((response) => console.log("Response from API", response))
      .catch((error) => console.log(error.response));
  }

  return (
    <div className={styles.card}>
      {props.cost <= userCtx.points && (
        <CardHover
          cost={props.cost}
          onClick={() => props.onReddem(props.producId)}
        />
      )}
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
