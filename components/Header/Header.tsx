import Logo from "../../assets/logos/dulwichhamletlogo.svg";
import styles from "./Header.module.css";
import { ChevronDownIcon } from "@heroicons/react/outline";

const Header = () => {
  // fetch("https://v3.football.api-sports.io/teams?search=chelsea", {
  //   method: "GET",
  //   headers: {
  //     "x-rapidapi-host": "v3.football.api-sports.io",
  //     "x-rapidapi-key": "54c8b951d2efe54ad8c46b3d0fdc125f",
  //   },
  // })
  //   .then((response) => {
  //     console.log(response);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  return (
    <header className={styles.Header}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <h1>WOMEN FIRST XI</h1>
      <ChevronDownIcon className={styles.header__icon} />
    </header>
  );
};

export default Header;
