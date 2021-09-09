// * import style files for posts
import Post from "../../Post/Post";
import "./Posts.css";

const Posts = () => {
  return (
    <div className="posts">
      {/* post component being rendered a couple of times */}
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Posts;
