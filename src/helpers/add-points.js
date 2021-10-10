export default function addPointsHandler() {
  const url = "https://coding-challenge-api.aerolab.co/user/points";
  fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTQyNmQ4N2MxNmRiNDAwMWEzMWE0OGMiLCJpYXQiOjE2MzE3NDMzNjd9.fjleWcbC4nvNoj321BDxkJHJ_M3HLMUxjRr7hTjDxQc",
    },
    body: JSON.stringify({
      amount: 1000,
    }),
  })
    .then((res) => res.json())
    .then((response) => console.log("Response from API", response))
    .catch((error) => console.log(error.response));
}
