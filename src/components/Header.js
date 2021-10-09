import React from "react";
import logo from "../assets/aerolab-logo.svg";
import coin from "../assets/icons/coin.svg";
import styles from "./Header.module.css";
import UserContext from "../context/user-context";

function Header() {
  const userCtx = React.useContext(UserContext);
  return (
    <header className={styles.header}>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className={styles.user}>
        <div className={styles.userName}>{userCtx.name}</div>
        <div className={styles.userPoints}>
          {userCtx.points}
          <img src={coin} alt="" />
        </div>
      </div>
    </header>
  );
}

export default Header;
