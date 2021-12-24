import styles from "./content.module.css";

function Content() {
  return (
    <div className={styles.contentContainer}>
      <div className={styles.likeContainer}>
        <p>13,709 likes</p>
      </div>
      <div className={styles.postInfoContainer}>
        <p>
          <span>username </span>
          Yılbaşı dendi mi benim için önce yeni
        </p>
      </div>
      <div className={styles.commentContainer}>
        <span>View all 100 comments</span>
      </div>
      <div className={styles.dateContainer}>
        <span>1 DAY AGO</span>
      </div>
    </div>
  );
}

export default Content;
