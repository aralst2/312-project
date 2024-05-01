import React from "react";
import SearchBar from "../../components/Search-Bar/SearchBar";
import "./Recipes.css";

const Recipes = () => {
  return (
    <div className="page">
      <div className="input-field">
        <SearchBar />
        <div>Input Results</div>
      </div>
    </div>
  );
};

export default Recipes;
