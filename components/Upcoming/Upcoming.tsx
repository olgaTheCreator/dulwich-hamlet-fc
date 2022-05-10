import Header from "../Header/Header";
import styles from "./Upcoming.module.css";

const Upcoming = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__bg}>
        <Header />
        <div className={styles.transbox}>
          <h1 className={styles.transbox__bg}>
            UPCOMING <br />
            MATCHES:
          </h1>

          <ul>
            <li className={styles.transbox__bg}>h</li>
            <li className={styles.transbox__bg}>g</li>
            <li className={styles.transbox__bg}>f</li>
            <li className={styles.transbox__bg}>f</li>
            <li className={styles.transbox__bg}>f</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
