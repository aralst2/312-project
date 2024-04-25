import React from "react";
import FoodieFileLogo from "../../assets/FF-Logo.png";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={FoodieFileLogo} alt="Foodie File Logo" />
      </div>
      <div className="links">
        <Link to="/home"> Home </Link>
        <Link to="/recipes"> Recipes </Link>
        <Link to="/ingredients"> Ingredients </Link>
        <Link to="/account"> Account </Link>
      </div>
    </div>
  );
}

export default Navbar;
