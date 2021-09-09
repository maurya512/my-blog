// * import the css file
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSmall">Personal and Tech</span>
        <span className="headerTitleLarge">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/2115217/pexels-photo-2115217.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="computer screen"
      />
    </div>
  );
};

export default Header;
