import React from "react";
import CookingVideo from "../../assets/cooking-video-2.mp4";
import "./Register.css";

const Register = () => {
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
          <form id="register-form" className="register-form">
            <h2>Sign Up</h2>
            <div className="register-form-part">
              <label htmlFor="Username">Username</label>
              <input type="text" id="Username" required="required" />
            </div>
            <div className="register-form-part">
              <label htmlFor="Name">Name</label>
              <input type="text" id="Name" required="required" />
            </div>
            <div className="register-form-part">
              <label htmlFor="Name">Email</label>
              <input type="email" id="Email" required="required" />
            </div>
            <div className="register-form-part">
              <label htmlFor="Password">Password</label>
              <input type="password" id="Password" required="required" />
            </div>
            <div className="register-form-part">
              <label htmlFor="ConfirmPassword">Confirm Password</label>
              <input type="password" id="ConfirmPassword" required="required" />
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
