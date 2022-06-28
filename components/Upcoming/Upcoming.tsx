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
  const newArr = arr.map(({ date, opponent }: Match) => ({
    ...dateToString(new Date(date)),
    opponent,
  }));
  return newArr.map(({ month, day, time, opponent }, i) => (
    <div className={styles["card--upcoming-matches"]} key={i + 1}>
      {month}
      <br />
      {day}
      <br />
      {time}
      <br />
      vs {opponent}
    </div>
  ));
};

const Upcoming: React.FC<UpcomingProps> = ({ matches }) => {
  console.log(matches);
  return <div className={styles.container}>{displayingMatches(matches)}</div>;
};

export default Upcoming;
