// * import the styling files for post
import "./Post.css";

const Post = () => {
  return (
    <div className="post">
      <img
        src="https://images.pexels.com/photos/965345/pexels-photo-965345.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="post pic"
        className="postImg"
      />
      <div className="postInfo">
        <div className="postCategories">
          <span className="postCategory">Life</span>
          <span className="postCategory">Tech</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amek</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDescription">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
        tempora velit laboriosam voluptate, perferendis aliquid veniam, dolore
        repellat, itaque voluptatem eaque asperiores illo laborum quas porro ab
        culpa pariatur beatae! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Magnam incidunt dolor facilis excepturi error optio
        quasi tempora voluptates laboriosam eos. Pariatur eius deleniti possimus
        aliquam eaque voluptatem velit alias officiis.
      </p>
    </div>
  );
};

export default Post;