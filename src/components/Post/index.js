import { useSelector } from "react-redux";
import Stats from "./Stats";
import Content from "./Content";

function Post() {
  const post = useSelector((state) => state.post);
  console.log(post);
  return (
    <>
      <div className="post-container">
        <img src={post.url} />
      </div>
      <Stats />
      <Content />
    </>
  );
}

export default Post;
