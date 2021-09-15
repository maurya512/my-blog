import React from "react";
// * import style files for user settings component
import "./Settings.css";

// * import components
import Sidebar from "../../components/Sidebar/Sidebar";

const Settings = () => {
  return (
    //   settings div
    <div className="settings">
      {/* settings wrapper */}
      <div className="settingsWrapper">
        {/* user title */}
        <div className="settingsTitle">
          {/* Update and Delete Account Features */}
          <span className="settingsUpdateTitle">Update Account</span>
          <span className="settingsDelTitle">Delete Account</span>
        </div>
        {/* user form */}
        <form className="settingsForm">
          {/* label for profile pic */}
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=20&w=20"
              alt="user profile pic"
            />
            <label htmlFor="fileInput">
              <i className="settingsProfilePicIcon far fa-user-circle"></i>
            </label>
            {/* edit profile pic if needed */}
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Maurya" />
          <label>Email</label>
          <input type="email" placeholder="maurya@email.com" />
          <label>Password</label>
          <input type="password"/>
          {/* submit the changes */}
          <button className="submitSettings">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
