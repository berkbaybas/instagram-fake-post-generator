import { useDispatch, useSelector } from "react-redux";
import {
  handleUsername,
  handleLike,
  handleComment,
  handleDate,
  handleCaption,
  handleUrl,
  handleProfileUrl,
} from "../../redux/actions/postActions";
import styles from "./sidebar.module.css";

function Sidebar() {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);

  const onChangeUsername = (username) => {
    console.log(username);
    dispatch(handleUsername(username));
  };

  const onChangelike = (like) => {
    dispatch(handleLike(like));
  };

  const onChangeComment = (comment) => {
    dispatch(handleComment(comment));
  };

  const onChangeDate = (date) => {
    dispatch(handleDate(date));
  };

  const onChangeCaption = (caption) => {
    dispatch(handleCaption(caption));
  };

  const onChangeUrl = (url) => {
    dispatch(handleUrl(url));
  };

  const onChangeProfileUrl = (urlProfile) => {
    dispatch(handleProfileUrl(urlProfile));
  };

  return (
    <aside className={styles.sidebarContainer}>
      <h3 className={styles.title}>Post Content Settings</h3>

      <div className={styles.inputWrapper}>
        <label>Username:</label>
        <input
          type="text"
          value={post.username}
          onChange={(e) => {
            onChangeUsername(e.target.value);
          }}
        />
      </div>

      <div className={styles.inputWrapper}>
        <label>Likes:</label>
        <input
          type="number"
          value={post.like}
          onChange={(e) => {
            onChangelike(e.target.value);
          }}
        />
      </div>

      <div className={styles.inputWrapper}>
        <label>Comment:</label>
        <input
          type="number"
          value={post.comment}
          onChange={(e) => {
            onChangeComment(e.target.value);
          }}
        />
      </div>

      <div className={styles.inputWrapper}>
        <label>Date:</label>
        <input
          type="number"
          value={post.date}
          onChange={(e) => {
            onChangeDate(e.target.value);
          }}
        />
      </div>

      <div className={styles.inputWrapper}>
        <label>Caption:</label>
        <textarea
          value={post.caption}
          onChange={(e) => {
            onChangeCaption(e.target.value);
          }}
        />
      </div>

      <div className={styles.inputWrapper}>
        <label>Image Profile Url:</label>
        <input
          value={post.profileUrl}
          type="link"
          onChange={(e) => {
            onChangeProfileUrl(e.target.value);
          }}
        />
      </div>

      <div className={styles.inputWrapper}>
        <label>Image Url:</label>
        <input
          value={post.url}
          type="link"
          onChange={(e) => {
            onChangeUrl(e.target.value);
          }}
        />
      </div>
    </aside>
  );
}

export default Sidebar;
