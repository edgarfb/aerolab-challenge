import React from "react";
import styles from "./AddPoints.module.css";
import addPointsHandler from "../helpers/add-points";

function AddPoints() {
  return (
    <div className={styles.addPoints}>
      <h1>Add 1000 Points</h1>
      <div className={styles.addPointsBtn}>
        <button onClick={addPointsHandler}>Add points</button>
      </div>
    </div>
  );
}

export default AddPoints;
