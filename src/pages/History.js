import React from "react";
// import styles from "./Histoy.module.css";

function Histoy(props) {
  const [reddenHistory, setReddemHistory] = React.useState();

  React.useEffect(() => {
    fetch("https://coding-challenge-api.aerolab.co/user/history", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTQyNmQ4N2MxNmRiNDAwMWEzMWE0OGMiLCJpYXQiOjE2MzE3NDMzNjd9.fjleWcbC4nvNoj321BDxkJHJ_M3HLMUxjRr7hTjDxQc",
      },
    })
      .then((res) => res.json())
      .then((historyReddem) => console.log("History reddem", historyReddem))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

export default Histoy;
