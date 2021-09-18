import React from "react";
import { Link } from "react-router-dom";
// * import styling for the register page
import "./Register.css";

const Register = () => {
  return (
    //   registration form similar to login form
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your username"
        />
        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your email"
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password"
        />
        {/* register submit button */}
        <button className="registerBtn">Register</button>
      </form>
      {/* login redirect button */}
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          LOGIN
        </Link>
      </button>
    </div>
  );
};

export default Register;
