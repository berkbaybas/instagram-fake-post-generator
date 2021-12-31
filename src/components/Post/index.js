import { useSelector } from "react-redux";
import Stats from "./Stats";
import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";

import styles from "./post.module.css";

function Post() {
  const post = useSelector((state) => state.content.post);
  return (
    <div className={styles.postWrapper}>
      <div className={styles.postContainer}>
        <Header />
        <img src={post.url} />
        <Stats />
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default Post;
