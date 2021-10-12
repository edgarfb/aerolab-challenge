import React from "react";
import styles from "./NotFound.module.css";
import logo from "../assets/aerolab-logo.svg";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className={styles.notFound}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <figure>
        <div className={styles.notFoundImage}>
          <img src="https://aerolab.co/static/images/404/404.png" alt="" />
        </div>
      </figure>
      <div className={styles.btnBox}>
        <Link to="/" className={styles.btn}>
          Follow the orange kite!
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
