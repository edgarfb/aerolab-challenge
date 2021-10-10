import React from "react";
import styles from "./Welcome.module.css";

function Welcome() {
  return (
    <div className={styles.welcomeImage}>
      <div className={styles.welcomeText}>
        <h3>Electronics</h3>
      </div>
    </div>
  );
}

export default Welcome;
