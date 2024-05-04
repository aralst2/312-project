const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const mongoose = require("mongoose");
const userRoutes = require("./src/routes/user");
const recipeRouter = require("./src/routes/recipe"); 
const userRoute = require("./src/routes/userInfo");
const cookieParser = require("cookie-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
app.use(cookieParser());

// Routes
app.use("/auth", userRoutes);
app.use("/recipes", recipeRouter); //Recipes


//app.use('/user', userRoute); // doesn't work

const DB_URI = process.env.DB_CONNECTION;
mongoose
  .connect(DB_URI)
  .then(() => {
    console.log("Connected to Mongo Database");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Server initialization
const port = process.env.PORT || 4500;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
