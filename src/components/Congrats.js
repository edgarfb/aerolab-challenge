import React from "react";
import ReactDOM from "react-dom";
import styles from "./Congrats.module.css";
import logo from "../assets/aerolab-logo.svg";
import { useHistory } from "react-router-dom";

function Congrats(props) {
  const history = useHistory();
  function toHistory() {
    history.replace("/redeem-history");
    props.onCloseCongratsMessage();
  }
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <div className={styles.congrats}>
          <div className={styles.congratsMessage}>
            <h2>Congrats!</h2>
            <p>You have a new product</p>
            <figure className={styles.logo}>
              <img src={logo} alt="" />
            </figure>
            <div>
              <button className={styles.btn} onClick={toHistory}>
                View
              </button>
              <button
                className={styles.btn}
                onClick={props.onCloseCongratsMessage}
              >
                Close
              </button>
            </div>
          </div>
        </div>,
        document.getElementById("congrats-root")
      )}
    </React.Fragment>
  );
}

export default Congrats;
