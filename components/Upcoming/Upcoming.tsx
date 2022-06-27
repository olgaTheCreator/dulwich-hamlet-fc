import styles from "./Upcoming.module.css";
import { Match, Matches } from "../../types/globals";

interface UpcomingProps {
  matches: Matches;
}

interface MatchDate {
  month: string;
  day: string;
  time: string;
}

const ordinal = (n: number) => {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};
const dateToString = (date: Date): MatchDate => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const month = months[date.getMonth()];
  const day = date.getDate();
  const dayOfWeek = days[date.getDay()];
  const dayInMonth = dayOfWeek + " " + ordinal(day);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const time =
    (hours > 11 ? hours - 11 : hours + 1) +
    ":" +
    (minutes == 0 ? "00" : minutes) +
    (hours > 11 ? " PM" : " AM");

  return {
    month,
    day: dayInMonth,
    time,
  };
};

const displayingMatches = (arr: Matches) => {
  const newArr = arr.map((a: Match, i: number) => ({
    ...dateToString(new Date(a.date)),
    opponent: a.opponent,
  }));
  return newArr.map((a, i) => (
    <div className={styles["card--upcoming-matches"]} key={i + 1}>
      {a.month}
      <br />
      {a.day}
      <br />
      {a.time}
      <br />
      vs {a.opponent}
    </div>
  ));
};

const Upcoming: React.FC<UpcomingProps> = ({ matches }) => {
  console.log(matches);
  return (
    <div className={styles.container}>
      {displayingMatches(matches)}

      {/* <div className={styles.container__bg}>

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
      </div> */}
    </div>
  );
};

export default Upcoming;
