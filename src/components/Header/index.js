import { FiMoreHorizontal } from "react-icons/fi";

import styles from "./header.module.css";

function Header() {
  return (
    <header>
      <div className={styles.userContainer}>
        <div className={styles.imageContainer}>
          <img className={styles.userImage} src="https://picsum.photos/32/32" />
        </div>
        <p className={styles.userInfo}>username</p>
      </div>
      <button>
        <FiMoreHorizontal />
      </button>
    </header>
  );
}

export default Header;
