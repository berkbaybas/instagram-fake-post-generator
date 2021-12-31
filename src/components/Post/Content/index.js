import { useSelector } from "react-redux";

import styles from "./content.module.css";

function Content() {
  const post = useSelector((state) => state.content.post);
  return (
    <div className={styles.contentContainer}>
      <div className={styles.likeContainer}>
        <p className={styles.like}>
          {post.like} like{post.like > 1 ? "s" : ""}
        </p>
      </div>
      <div className={styles.postInfoContainer}>
        <p className={styles.postInfo}>
          <span className={styles.username}>{post.username} </span>
          {post.caption}
        </p>
      </div>
      <div className={styles.commentContainer}>
        <span>
          View all {post.comment} comment{post.comment > 1 ? "s" : ""}
        </span>
      </div>
      <div className={styles.dateContainer}>
        <span>
          {post.date} DAY{post.date > 1 ? "S" : ""} AGO
        </span>
      </div>
    </div>
  );
}

export default Content;
