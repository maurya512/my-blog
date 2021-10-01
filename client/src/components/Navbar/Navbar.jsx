// * import the style files
import { Link, Route } from "react-router-dom";
import Write from "../../pages/Write/Write";
import Home from "../../pages/Home/Home";
import Register from "../../pages/Register/Register";
import "./Navbar.css";

const Navbar = () => {
  // pseudo user
  const user = true;
  return (
    // ! gave the div a classname of nav
    <div className="nav">
      {/* left portion of the navbar */}
      <div className="navLeft">
        {/* social media icons */}
        <i className="navIcon fab fa-facebook"></i>
        <i className="navIcon fab fa-github"></i>
        <i className="navIcon fab fa-linkedin"></i>
      </div>

      {/* center portion of the navbar */}
      <div className="navCenter">
        <ul className="navList">
          <li className="navListItems">
            {/* give the classname link and define its style in html so can be used for links all across the web app */}
          </li>
          <li className="navListItems">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          <li className="navListItems">
            <Link to="/about" className="link">
              ABOUT
            </Link>
          </li>
          <li className="navListItems">
            <Link to="/settings" className="link">
              SETTINGS
            </Link>
          </li>
          <li className="navListItems">
            <Link to="/write" className="link">
              WRITE
            </Link>
          </li>
          <li className="navListItems">
            {/* CHECKS TO SEE IF USER IS LOGGED IN. IF USER IS LOGGED IN THEN DISPLAY LOGOUT  */}
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>

      {/* right portion of the navbar */}
      <div className="navRight">
        {/* profile image */}
        {/* checking to see if user is logged in */}
        {user ? (
          <img
            className="navImg"
            src="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=20&w=20"
            alt="artificial intelligence robo"
          />
        ) : (
          <ul className="navList">
            <li className="navListItems">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="navListItems">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        {/* search icon */}
        <i className="navSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
};

export default Navbar;