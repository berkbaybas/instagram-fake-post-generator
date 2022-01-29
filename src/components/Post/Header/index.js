import { useSelector } from "react-redux";

import { FiMoreHorizontal } from "react-icons/fi";
import ImageUrlLoader from "../../Loader/ImageUrlLoader";

import styles from "./header.module.css";

function Header() {
  const post = useSelector((state) => state.content.post);
  console.log(post.profileUrl);
  return (
    <header>
      <div className={styles.userContainer}>
        <div
          className={`${styles.imageContainer}`}
          style={{ border: post.story ? "2px solid red" : "none" }}
        >
          {post.profileUrl ? (
            <img className={styles.userImage} src={post.profileUrl} />
          ) : (
            <ImageUrlLoader />
          )}
        </div>
        <p className={styles.userInfo}>{post.username}</p>
      </div>
      <button>
        <FiMoreHorizontal />
      </button>
    </header>
  );
}

export default Header;
