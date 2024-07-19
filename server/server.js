const PORT = process.env.VITE_API_PORT ?? 8000;
const express = require("express");
const app = express();
const pool = require("./db");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("FotList API");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
