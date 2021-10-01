import React from "react";
import { Link } from "react-router-dom";
// * import style files for login page
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      {/* login form */}
      <div className="loginForm">
        <label>Email</label>
        <input className="loginInput" type="email" placeholder="Enter Email" />
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter Password"
        />
        {/* login button prompt */}
        <button className="loginBtn">Login</button>
        <button className="userRegBtn">
          <Link to="/register" className="link">
            REGISTER
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Login;