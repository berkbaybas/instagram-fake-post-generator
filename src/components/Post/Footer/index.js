import { VscSmiley } from "react-icons/vsc";

import styles from "./footer.module.css";

function Footer() {
  return (
    <footer>
      <VscSmiley size={24} />
      <input placeholder="Add a comment... " />
      <button>Post</button>
    </footer>
  );
}

export default Footer;
