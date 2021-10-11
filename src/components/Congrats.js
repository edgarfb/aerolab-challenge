import React from "react";
import styles from "./Congrats.module.css";
import logo from "../assets/aerolab-logo.svg";

function Congrats() {
  return (
    <div className={styles.congrats}>
      <div className={styles.congratsMessage}>
        <h2>Congrats!</h2>
        <h3>Visit your acount</h3>
        <figure className={styles.logo}>
          <img src={logo} alt="" />
        </figure>
      </div>
    </div>
  );
}

export default Congrats;
