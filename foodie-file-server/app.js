const express = require("express");
const session = require("express-session");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const mongoose = require("mongoose");

const userRoutes = require("./src/routes/user");
const recipeRouter = require("./src/routes/recipe");
const userInfo = require("./src/routes/user");
const update = require("./src/routes/user");
const openAI = require("./src/routes/openai");

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

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: process.env.NODE_ENV == "production" },
    maxAge: 60 * 60 * 1000, // 1 hour in milliseconds
  })
);

// Routes
app.use("/auth", userRoutes);
app.use("/recipes", recipeRouter); //Recipes
app.use("/account", userInfo);
app.use("/update", update);
app.use("/openai", openAI);

// Database connection
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
