import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSearch = (value) => {
    setInput(value);
    onSearch(value); // Pass the search query to the parent component
  };

  return (
    <div className="input-wrapper">
      <FaArrowCircleUp id="search-icon" />
      <input className="input"
        placeholder="Enter text..."
        value={input}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
