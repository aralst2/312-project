import React, { useState } from "react";
import SearchBar from "../../components/Search-Bar/SearchBar";
import axios from "axios";
import "./Ingredients.css";

const Recipes = () => {
  const [response, setResponse] = useState("");

  const handleSearch = async (input) => {
    try {
      const res = await axios.post("http://localhost:4500/openai/ask", {
        question: input,
      });
      setResponse(res.data);
    } catch (error) {
      console.error("Failed to get the response:", error);
      setResponse("Failed to fetch response.");
    }
  };

  return (
    <div className="ingredients-page">
      <div className="input-field">
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="response-container">{response && <p>{response}</p>}</div>
    </div>
  );
};

export default Recipes;
