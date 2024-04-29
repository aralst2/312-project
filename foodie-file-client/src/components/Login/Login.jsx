import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CookingVideo from "../../assets/cooking-video.mp4";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4500/auth/login", {
        username,
        password,
      })
      .then((response) => {
        console.log(response);
        if (response.data.status === true) {
          navigate("/home");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="split-screen">
      <div className="left-side">
        <video width="90%" height="90%" autoPlay muted loop>
          <source src={CookingVideo} type="video/mp4" />
        </video>
        <div id="text-overlay">
          <h3>Where delicious recipes await</h3>
        </div>
        <div className="text-overlay2">
          Would you like to join? <a href="/register">Sign up here!</a>{" "}
        </div>
      </div>

      <div className="right-side">
        <form id="form" className="login-form" onSubmit={handleSubmit}>
          {" "}
          <h2>Log In</h2>
          <div className="form-part">
            <label htmlFor="Username">Username</label>
            <input
              type="text"
              id="Username"
              required="required"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-part">
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              id="Password"
              required="required"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
          <div className="help-actions">
            <a href="/forgot-password">Forgot Password?</a>{" "}
          </div>
          <div className="help-actions">
            <a href="/home">Continue as a guest</a>{" "}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
