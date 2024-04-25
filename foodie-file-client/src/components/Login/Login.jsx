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
      </div>

      <div className="right-side">
        <form id="form" className="login-form">
          {" "}
          <h2>Log In</h2>
          <div className="form-part">
            <label htmlFor="Username">Username</label>
            <input type="text" id="Username" />
          </div>
          <div className="form-part">
            <label htmlFor="Password">Password</label>
            <input type="password" id="Password" />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
          <div className="help-actions">
            <a href="/forgot-password">Forgot Password?</a>{" "}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
