import React from "react";
import styles from "./MainContainer.module.css";

function MainContainer(props) {
  return <main className={styles.mainContainer}>{props.children}</main>;
}

export default MainContainer;
