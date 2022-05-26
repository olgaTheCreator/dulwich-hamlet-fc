import Header from "../Header/Header";
import styles from "./Upcoming.module.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Upcoming = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__bg}>
        {/* <Header /> */}
        <div className={styles.transbox}>
          <h1 className={styles.transbox__bg}>
            WATCH <br />
            US <br /> PLAY:
          </h1>{" "}
          <div>
            <p className={styles.transbox__text}>APRIL</p>
            <p className={styles["transbox__text--bold"]}>SUNDAY 9TH</p>
            <p className={styles.transbox__text}>3.00 PM</p>

            <p className={styles.transbox__text}>VS AYLESFORD</p>
          </div>
          <div>
            <p className={styles.transbox__text}>29TH MAY </p>
            <p className={styles.transbox__text}>VS NEW LONDON LIONESSES</p>
          </div>
          <div>
            <p className={styles.transbox__text}>1ST JUNE </p>
            <p className={styles.transbox__text}> VS FULHAM WOMEN FC</p>
          </div>
          <div>
            <p className={styles.transbox__text}>15TH JUNE </p>
            <p className={styles.transbox__text}> VS WORTHING</p>
          </div>
          <div>
            <p className={styles.transbox__text}>18TH JULY </p>
            <p className={styles.transbox__text}> VS AYLESFORD</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
