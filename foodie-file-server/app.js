const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const mongoose = require("mongoose");
const userRoutes = require("./src/routes/user");
const cookieParser = require("cookie-parser");
const app = express();

const Recipe = require("./src/models/Recipes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
app.use(cookieParser());

//Routes
app.use("/auth", userRoutes);

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

app.get('/recipes', async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    console.error('Error fetching recipes:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

/*
const recipes = [
  {
    name: 'Chicken Parmesan',
    ingredients: ['chicken breasts', 'breadcrumbs', 'marinara sauce', 'mozzarella cheese'],
    instructions: 'Bread chicken, fry until golden brown, top with sauce and cheese, bake until cheese melts.'
  },
  {
    name: 'Vegetable Stir-Fry',
    ingredients: ['mixed vegetables (bell peppers, broccoli, carrots, mushrooms)', 'soy sauce', 'garlic', 'ginger', 'rice'],
    instructions: 'Stir-fry vegetables with garlic and ginger in a wok, add soy sauce, serve over rice.'
  },
  {
    name: 'Grilled Salmon',
    ingredients: ['salmon fillets', 'lemon', 'olive oil', 'salt', 'pepper'],
    instructions: 'Marinate salmon in lemon juice, olive oil, salt, and pepper, grill until cooked through.'
  },
  {
    name: 'Margarita Pizza',
    ingredients: ['pizza dough', 'tomato sauce', 'fresh mozzarella', 'fresh basil', 'olive oil'],
    instructions: 'Roll out dough, top with sauce, cheese, and basil, bake until crust is golden and cheese is bubbly.'
  },
  {
    name: 'Shrimp Scampi',
    ingredients: ['shrimp', 'linguine', 'butter', 'garlic', 'lemon juice', 'parsley'],
    instructions: 'Saute shrimp and garlic in butter, add lemon juice and parsley, toss with cooked linguine.'
  },
  {
    name: 'Beef Tacos',
    ingredients: ['ground beef', 'taco seasoning', 'tortillas', 'lettuce', 'tomato', 'cheese', 'sour cream'],
    instructions: 'Cook beef with taco seasoning, fill tortillas with beef and toppings, serve with sour cream.'
  },
  {
    name: 'Spinach and Feta Stuffed Chicken',
    ingredients: ['chicken breasts', 'spinach', 'feta cheese', 'garlic', 'olive oil'],
    instructions: 'Make a pocket in chicken breasts, stuff with spinach and feta mixture, bake until chicken is cooked.'
  },
  {
    name: 'Pasta Primavera',
    ingredients: ['pasta', 'assorted vegetables (bell peppers, zucchini, squash)', 'olive oil', 'garlic', 'Parmesan cheese'],
    instructions: 'Cook pasta, saute vegetables in olive oil and garlic, toss with cooked pasta, top with Parmesan.'
  },
  {
    name: 'Vegetarian Chili',
    ingredients: ['beans (black beans, kidney beans)', 'bell peppers', 'onion', 'tomatoes', 'chili powder', 'cumin'],
    instructions: 'Saute vegetables, add beans, tomatoes, and spices, simmer until flavors are melded.'
  },
  {
    name: 'Caprese Salad',
    ingredients: ['tomatoes', 'fresh mozzarella', 'fresh basil', 'balsamic glaze', 'olive oil'],
    instructions: 'Slice tomatoes and mozzarella, arrange on a plate with basil leaves, drizzle with olive oil and balsamic glaze.'
  },
  // Add more recipes as needed
];

module.exports = recipes;

Recipe.insertMany(recipes)
  .then((result) => {
    console.log('Recipes inserted successfully:', result);
  })
  .catch((error) => {
    console.error('Error inserting recipes:', error);
  });
*/
