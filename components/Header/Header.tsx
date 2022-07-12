import Logo from "../../assets/svgs/dulwichhamletlogo.svg";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.headers}>
        <h1>DULWICH HAMLET</h1>
        <h2>WOMEN FIRST XI</h2>
      </div>
    </header>
  );
};

export default Header;
