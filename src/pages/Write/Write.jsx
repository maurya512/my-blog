import React from "react";

// * import the style files for write component
import "./Write.css";

export default function Write() {
  return (
    <div className="write">
      {/* temp img holder */}
      <img
        src="https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="web blog post"
        className="writeImg"
      />
      <form className="writeForm">
        <div className="writeFormGrp">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            // every page reloads focuses on the title
            autoFocus={true}
          />
        </div>
        {/* form */}
        <div className="writeFormGrp">
          <textarea
            placeholder="Tell your story...."
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        {/* button */}
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}
