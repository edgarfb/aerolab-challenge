import React from "react";
import logo from "../assets/aerolab-logo.svg";
import coin from "../assets/icons/coin.svg";
import styles from "./Header.module.css";
import AppContext from "../context/app-context";
import { Link } from "react-router-dom";

function Header(props) {
  const context = React.useContext(AppContext);

  return (
    <header className={styles.header}>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className={styles.user}>
        {/* <div className="addPoints">
          <button onClick={props.onAddPoint}>Add points</button>
        </div> */}

        <div className={styles.userName}>
          <Link to="/history">{context.user.name}</Link>
        </div>
        <div className={styles.userPoints}>
          {context.user.points}
          <img src={coin} alt="" />
        </div>
      </div>
    </header>
  );
}

export default Header;
