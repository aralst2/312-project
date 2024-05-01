import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <button className="home-button" id="button1">
        Ingredients
      </button>
      <button className="home-button" id="button2">
        Recipes
      </button>
    </div>
  );
}

export default Home;
