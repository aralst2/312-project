import React, { useState } from "react";
import axios from "axios";
import CookingVideo from "../../assets/cooking-video-2.mp4";
import "./Register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4500/auth/register", {
        username,
        name,
        email,
        password,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="register-split-screen">
        <div className="register-left-side">
          <video width="90%" height="90%" autoPlay muted loop>
            <source src={CookingVideo} type="video/mp4" />
          </video>
          <div id="register-text-overlay">
            <h3>Where delicious recipes await</h3>
          </div>
          <div className="register-text-overlay2">
            Already a member? <a href="/">Login here!</a>{" "}
          </div>
        </div>

        <div className="register-right-side">
          <form className="register-form" onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <div className="register-form-part">
              <label htmlFor="Username">Username</label>
              <input
                type="text"
                id="Username"
                required="required"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="register-form-part">
              <label htmlFor="Name">Name</label>
              <input
                type="text"
                id="Name"
                required="required"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="register-form-part">
              <label htmlFor="Name">Email</label>
              <input
                type="email"
                id="Email"
                required="required"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="register-form-part">
              <label htmlFor="Password">Password</label>
              <input
                type="password"
                id="Password"
                required="required"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="register-login-button">
              Register
            </button>
            <div className="register-help-actions">
              <a href="/home">Continue as a guest</a>{" "}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
