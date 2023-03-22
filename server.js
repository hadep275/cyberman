import express from "express";
const app = express();

const port = 1000;

app.listen(port, (response, request) => {
  console.log(`Final Destination: ${port}`);
});

app.get("/", (request, response) => {
  response.send("The Final Return of The Cyberman");
});