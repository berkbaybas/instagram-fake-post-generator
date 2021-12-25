import { useDispatch } from "react-redux";
import { handleUsername } from "../../redux/actions/postActions";
import styles from "./sidebar.module.css";

function Sidebar() {
  const dispatch = useDispatch();
  const onChangeUsername = (username) => {
    console.log(username);
    dispatch(handleUsername(username));
  };
  return (
    <aside className={styles.sidebarContainer}>
      <h3 className={styles.title}>Post Content Settings</h3>

      <label>username</label>
      <input
        type="text"
        onChange={(e) => {
          onChangeUsername(e.target.value);
        }}
      />
    </aside>
  );
}

export default Sidebar;
