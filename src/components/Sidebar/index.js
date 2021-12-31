import { useDispatch, useSelector } from "react-redux";
import {
  handleUsername,
  handleLike,
  handleComment,
  handleDate,
  handleCaption,
  handleUrl,
  handleProfileUrl,
  handleSaved,
  handleLiked,
} from "../../redux/actions/contentActions";
import styles from "./sidebar.module.css";

function Sidebar() {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.content.post);

  const onChangeUsername = (username) => {
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

  const onChangeSaved = (saved) => {
    dispatch(handleSaved(saved));
  };

  const onChangeLiked = (liked) => {
    dispatch(handleLiked(liked));
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
          rows="4"
          cols="50"
          maxLength="200"
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
          type="url"
          onChange={(e) => {
            onChangeProfileUrl(e.target.value);
          }}
        />
      </div>

      <div className={styles.inputWrapper}>
        <label>Image Url:</label>
        <input
          value={post.url}
          type="url"
          onChange={(e) => {
            onChangeUrl(e.target.value);
          }}
        />
      </div>

      <div className={styles.inputCheckboxWrapper}>
        <div className={styles.inputCheckboxContainer}>
          <label>Like:</label>
          <input
            checked={post.liked}
            type="checkbox"
            onChange={(e) => {
              onChangeLiked(e.target.checked);
            }}
          />
        </div>
        <div className={styles.inputCheckboxContainer}>
          <label>Save:</label>
          <input
            checked={post.saved}
            type="checkbox"
            onChange={(e) => {
              onChangeSaved(e.target.checked);
            }}
          />
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
