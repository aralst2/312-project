import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import "./SearchBar.css";

const SearchBar = () => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    // Fetch data from API
  };

  const handleSearch = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaArrowCircleUp id="search-icon" />
      <input
        className="input"
        placeholder="Enter text..."
        value={input}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
