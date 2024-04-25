const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const corsOptions = {
  origin: "*",

  // credentials: true,
};

app.use(cors(corsOptions));

// Server initialization
const port = 4500;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
