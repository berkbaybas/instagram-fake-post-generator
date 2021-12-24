import LikeIcon from "../Icons/LikeIcon";
import CommentIcon from "../Icons/CommentIcon";
import ShareIcon from "../Icons/ShareIcon";
import SaveIcon from "../Icons/SaveIcon";

import styles from "./stats.module.css";

function Stats() {
  return (
    <div className={styles.statsContainer}>
      <div className={styles.leftStats}>
        <div className={styles.iconWrapper}>
          <LikeIcon className={styles.icon} />
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
          <SaveIcon className={styles.icon} />
        </div>
      </div>
    </div>
  );
}

export default Stats;
