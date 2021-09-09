// * import the style files
import "./Navbar.css";

const Navbar = () => {
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
          <li className="navListItems">HOME</li>
          <li className="navListItems">ABOUT</li>
          <li className="navListItems">CONTACT</li>
          <li className="navListItems">WRITE</li>
          <li className="navListItems">LOGOUT</li>
        </ul>
      </div>

      {/* right portion of the navbar */}
      <div className="navRight">
        {/* profile image */}
        <img
          className="navImg"
          src="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=20&w=20"
          alt="artificial intelligence robo"
        />
        {/* search icon */}
        <i className="navSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
};

export default Navbar;
