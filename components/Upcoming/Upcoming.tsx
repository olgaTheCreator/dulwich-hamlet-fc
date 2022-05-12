import Header from "../Header/Header";
import styles from "./Upcoming.module.css";

const Upcoming = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__bg}>
        <Header />
        <div className={styles.transbox}>
          <h1 className={styles.transbox__bg}>WATCH US PLAY:</h1>
          <div>
            <p className={styles.transbox__try}>APRIL</p>
            <p className={styles.transbox__try}>SUNDAY 9TH</p>
            <p className={styles.transbox__try}>3.00 PM</p>

            <p className={styles.transbox__try}>VS AYLESFORD</p>
          </div>
          <div>
            <p className={styles.transbox__date}>29TH MAY </p>
            <p className={styles.transbox__place}>VS NEW LONDON LIONESSES</p>
          </div>
          <div>
            <p className={styles.transbox__date}>1ST JUNE </p>
            <p className={styles.transbox__place}> VS FULHAM WOMEN FC</p>
          </div>
          <div>
            <p className={styles.transbox__date}>15TH JUNE </p>
            <p className={styles.transbox__place}> VS WORTHING</p>
          </div>
          <div>
            <p className={styles.transbox__date}>18TH JULY </p>
            <p className={styles.transbox__place}> VS AYLESFORD</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
