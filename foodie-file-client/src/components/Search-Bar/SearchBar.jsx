import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch(input);
    }
  };

  const handleSearchClick = () => {
    onSearch(input);
  };

  return (
    <div className="input-wrapper">
      <input
        className="input"
        placeholder="Enter text..."
        value={input}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearchClick} id="search-button">
        Search
      </button>{" "}
    </div>
  );
};

export default SearchBar;
