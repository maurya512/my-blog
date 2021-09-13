import React from "react";
// * import styling for singPost
import "./SingPost.css";

// * import components

const SingPost = () => {
  return (
    //   a container for single post on the page
    <div className="singPost">
      {/* single post wrapper */}
      <div className="singPostWrapper">
        {/* image for single post */}
        <img
          src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=500"
          alt="dev img"
          className="singPostImg"
        />
        {/* title of the single post */}
        <h1 className="singPostTitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          {/* edit / del single post */}
          <div className="singPostEdit">
            <i className="singPostIcon fas fa-edit"></i>
            <i className="singPostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        {/* single post author and creation info */}
        <div className="singPostInfo">
          {/* single post author */}
          <span className="singPostAuthor">
            Author: <b>Maurya</b>
          </span>
          <br></br>
          {/* sing post date */}
          <span className="singPostDate">
            Date: <b>1 hour</b> ago
          </span>
        </div>
        <p className="singPostDesc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          nostrum repellendus atque quos! Quae, cumque vitae voluptas nihil
          cupiditate optio quidem placeat! Quis sunt dicta debitis molestias?
          Dolor, sit praesentium!
          <br></br>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex dolorem
          excepturi maiores quae necessitatibus quibusdam dolores, qui odio
          libero? Aut recusandae quasi est maiores ullam optio cupiditate
          temporibus, qui vero.
          <br></br>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, ab
          possimus sed placeat accusantium recusandae repellat ad adipisci
          tempore in earum, eveniet neque. Autem asperiores quasi ratione, eius
          omnis non.
          <br></br>
        </p>
      </div>
    </div>
  );
};

export default SingPost;
