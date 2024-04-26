import React from "react";
import CookingVideo from "../../assets/cooking-video.mp4";
import "./Login.css";

const Login = () => {
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
        <form id="form" className="login-form">
          {" "}
          <h2>Log In</h2>
          <div className="form-part">
            <label htmlFor="Username">Username</label>
            <input type="text" id="Username" required="required" />
          </div>
          <div className="form-part">
            <label htmlFor="Password">Password</label>
            <input type="password" id="Password" required="required" />
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
