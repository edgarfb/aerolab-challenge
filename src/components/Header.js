import React from "react";
import logo from "../assets/aerolab-logo.svg";
import coin from "../assets/icons/coin.svg";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className={styles.user}>
        <div className={styles.userName}>John Kite</div>
        <div className={styles.userPoints}>
          6000
          <img src={coin} alt="" />
        </div>
      </div>
    </header>
  );
}

export default Header;
