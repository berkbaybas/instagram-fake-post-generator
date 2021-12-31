import { useSelector } from "react-redux";

import LikeIcon from "../../Icons/LikeIcon";
import CommentIcon from "../../Icons/CommentIcon";
import ShareIcon from "../../Icons/ShareIcon";
import SaveIcon from "../../Icons/SaveIcon";
import SaveSolidIcon from "../../Icons/SaveSolidIcon";
import LikeSolidIcon from "../../Icons/LikeSolidIcon";

import styles from "./stats.module.css";

function Stats() {
  const post = useSelector((state) => state.content.post);

  return (
    <div className={styles.statsContainer}>
      <div className={styles.leftStats}>
        <div className={styles.iconWrapper}>
          {post.liked ? (
            <LikeSolidIcon className={styles.icon} />
          ) : (
            <LikeIcon className={styles.icon} />
          )}
        </div>
        <div className={styles.iconWrapper}>
          <CommentIcon className={styles.icon} />
        </div>
        <div className={styles.iconWrapper}>
          <ShareIcon className={styles.icon} />
        </div>
      </div>
      <div className={styles.rightStats}>
        <div className={styles.iconWrapper}>
          {post.saved ? (
            <SaveSolidIcon className={styles.icon} />
          ) : (
            <SaveIcon className={styles.icon} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Stats;
