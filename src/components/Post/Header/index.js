import { useSelector } from "react-redux";
import { FiMoreHorizontal } from "react-icons/fi";

import styles from "./header.module.css";

function Header() {
  const post = useSelector((state) => state.content.post);
  return (
    <header>
      <div className={styles.userContainer}>
        <div
          className={`${styles.imageContainer}`}
          style={{ border: post.story ? "2px solid red" : "none" }}
        >
          <img className={styles.userImage} src={post.profileUrl} />
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
