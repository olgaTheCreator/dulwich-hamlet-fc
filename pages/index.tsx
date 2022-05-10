import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Upcoming from "../components/Upcoming/Upcoming";

const Home = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Dulwich Helmet FC</title>
        <meta
          name="description"
          content="Practice page made by olgaTheCreator"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Upcoming />

      <main className={styles.main}></main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
