import Stats from "./Stats";
import Content from "./Content";

function Post() {
  return (
    <>
      <div className="post-container">
        <img src="https://picsum.photos/600/600" />
      </div>
      <Stats />
      <Content />
    </>
  );
}

export default Post;
