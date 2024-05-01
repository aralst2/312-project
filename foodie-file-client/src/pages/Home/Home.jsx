import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const navigateToIngredients = () => navigate("/ingredients");
  const navigateToRecipes = () => navigate("/recipes");

  return (
    <div className="home-container">
      <button
        className="home-button"
        id="button1"
        onClick={navigateToIngredients}
      >
        <em>get</em>Ingredients
      </button>
      <button className="home-button" id="button2" onClick={navigateToRecipes}>
        <em>get</em>Recipes
      </button>
    </div>
  );
}

export default Home;
