const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const corsOptions = {
  origin: "*",

  // credentials: true,
};

const DB_URI = process.env.DB_CONNECTION;
mongoose
  .connect(DB_URI)
  .then(() => {
    console.log("Connected to Mongo Database");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.use(cors(corsOptions));

// Server initialization
const port = 4500;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
