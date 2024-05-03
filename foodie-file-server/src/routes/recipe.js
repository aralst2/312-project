const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');

// GET /recipes endpoint to fetch recipes
router.get('/recipes', async (req, res) => {
  try {
    let recipes;
    if (req.query.search) {
      // If search query is provided, filter recipes by title
      const regex = new RegExp(req.query.search, 'i'); // Case-insensitive search
      recipes = await Recipe.find({ title: { $regex: regex } });
    } else {
      // Otherwise, fetch all recipes
      recipes = await Recipe.find();
    }
    res.json(recipes);
  } catch (error) {
    console.error('Error fetching recipes:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
