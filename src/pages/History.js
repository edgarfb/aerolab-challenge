import React from "react";
import styles from "./History.module.css";
import HistoryCard from "../components/HistoryCard";

function Histoy(props) {
  const [reddenHistory, setReddemHistory] = React.useState();

  console.log(reddenHistory);

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
      .then((historyReddem) => setReddemHistory([...historyReddem]))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className={styles.history}>
      {reddenHistory &&
        reddenHistory.map((pro) => (
          <HistoryCard
            producId={pro._id}
            key={pro.createDate}
            img={pro.img.url}
            imgHd={pro.img.hdUrl}
            name={pro.name}
            category={pro.category}
            cost={pro.cost}
            date={pro.createDate}
          />
        ))}
    </div>
  );
}

export default Histoy;
