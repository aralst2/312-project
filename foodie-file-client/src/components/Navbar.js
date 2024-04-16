import React from "react";
import FoodieFileLogo from "../assets/Foodie-File-Logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src={FoodieFileLogo} alt="Foodie File Logo" />
      </div>
      <div className="navbar__links">
        <Link to="/"> Home </Link>
        <Link to="/recipes"> Recipes </Link>
        <Link to="/ingredients"> Ingredients </Link>
        <Link to="/account"> Account </Link>
      </div>
    </div>
  );
}

export default Navbar;
