import React, { useState, useEffect } from 'react';
import SearchBar from "../../components/Search-Bar/SearchBar";
import "./Ingredients.css";



const Ingredients = () => {
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
    <div className="ingred-page">
      <div className="input-field">
        <SearchBar onSearch = {handleSearch}/>
      </div>
      <div className="ingred-container">
          <h2>Ingredients</h2>
          <ul className="ingred-list">
            {recipes.map(recipe => (
              <li key={recipe._id}>
                <h3>{recipe.title}</h3>
                <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
              </li>
            ))}
          </ul>
        </div>
    </div>
  );
};

export default Ingredients;
