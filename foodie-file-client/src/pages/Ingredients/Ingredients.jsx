import React from "react";
import SearchBar from "../../components/Search-Bar/SearchBar";
import "./Ingredients.css";

const Ingredients = () => {
  return (
    <div className="page">
      <div className="input-field">
        <SearchBar />
        <div>Input Results</div>
      </div>
    </div>
  );
};

export default Ingredients;
