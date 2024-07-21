const express = require("express");
const morgan = require("morgan");
require("express-async-errors");
require("dotenv").config();
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

let planets = [
  {
    id: 1,
    name: "Earth",
  },
  {
    id: 2,
    name: "Mars",
  },
];

app.use(express.json());

app.use(morgan("dev"));

app.get("/planets", (req, res) => {
  res.json(planets);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
