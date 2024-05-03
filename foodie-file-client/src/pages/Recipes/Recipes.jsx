import React, { useState, useEffect } from 'react';
import SearchBar from "../../components/Search-Bar/SearchBar";
import "./Recipes.css";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch('http://localhost:4500/recipes');
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  const handleSearch = (query) => {
    const filtered = recipes.filter(recipe =>
      recipe.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredRecipes(filtered);
  };

  return (
    <div className="page">
      <div className="input-field">
        <SearchBar onSearch = {handleSearch}/>
      </div>
      <div className="recipe-container">
          <h2>Recipes</h2>
          <ul className="recipe-list">
            {recipes.map(recipe => (
              <li key={recipe._id}>
                <h3>{recipe.name}</h3>
                <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
                <p><strong>Instructions:</strong> {recipe.instructions}</p>
              </li>
            ))}
          </ul>
        </div>
    </div>
  );
};

export default Recipes;
