// * import style files for the sidebar
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* sibebar content */}
      <div className="sidebarItem">
        {/* description of the sibebar content */}
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://images.pexels.com/photos/705164/computer-laptop-work-place-camera-705164.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="work desk"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          magnam sit illum cumque veritatis ut aperiam rerum enim ducimus
          deserunt? Autem nesciunt doloremque qui similique amet magni quis
          illum dicta.
        </p>
      </div>

      {/* second list of items */}
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {/* list of categories */}
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Work</li>
          <li className="sidebarListItem">Misc</li>
        </ul>
      </div>

      {/* third list of items */}
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        {/* social media icons */}
        <div className="sidebarSocialIcons">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-github-square"></i>
          <i className="sidebarIcon fab fa-linkedin"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
