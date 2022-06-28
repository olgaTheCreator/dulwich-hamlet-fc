import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState, useEffect, useRef } from "react";
import Header from "../components/Header/Header";
import Upcoming from "../components/Upcoming/Upcoming";
import Girl from "../public/girl.svg";
import WatchUsPlay from "../assets/svgs/watch_us_play_poly.svg";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { Matches } from "../types/globals";

const add = (a: number, b: number): number => a + b;

interface MatchesProps {
  matches: Matches;
}

const Home: NextPage<MatchesProps> = ({ matches }) => {
  // const [offsetY, setOffsetY] = useState(0);
  // const handleScroll = () => setOffsetY(window.pageYOffset);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Dulwich Hamlet FC</title>
        <meta
          name="description"
          content="Practice page made by olgaTheCreator"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Parallax pages={4} style={{ maxWidth: "1600px" }}>
        <ParallaxLayer offset={0} speed={0.9} factor={1.2}>
          <div className={styles["background--pink"]}></div>
        </ParallaxLayer>
        <ParallaxLayer speed={0.4}>
          <Header />
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 0.2, end: 2.7 }}>
          <ChevronDownIcon className={styles["chevron-down-icon__blue"]} />
        </ParallaxLayer>
        <ParallaxLayer offset={0.28}>
          <div className={styles["scroll-down-p"]}>
            Scroll
            <br />
            down
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.22} speed={2}>
          <div className={styles["image-container--girl"]}>
            <Girl />
            {/* <Image
              src="/../public/girl.svg"
              alt="player holding a ball"
              layout="fill"
              objectFit="contain"
              objectPosition="top left"
              quality={100}
            /> */}
          </div>
        </ParallaxLayer>
        {/* <ParallaxLayer offset={1} speed={1}>
          <div className={styles["background--white"]}></div>
        </ParallaxLayer> */}
        {/* <ParallaxLayer sticky={{ start: 1, end: 1.7 }}>
          <ChevronDownIcon className={styles["chevron-down-icon__blue"]} />
        </ParallaxLayer> */}
        <ParallaxLayer
          // sticky={{ start: 1.1, end: 1.1 }}>
          offset={0.98}
          factor={1.15}
          speed={0.3}
        >
          <div className={styles["image-container--watch-us"]}>
            <WatchUsPlay />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.1} speed={0.4} factor={1.5}>
          <div className={styles["background--triangles"]}></div>
        </ParallaxLayer>
        <ParallaxLayer offset={2.8} speed={0.8}>
          <div className={styles["background--poly"]}></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.18} speed={0.2} factor={1.5}>
          <Upcoming matches={matches} />
        </ParallaxLayer>
        <ParallaxLayer offset={3.5} speed={0.6}>
          <div className={styles["results-table"]}></div>
        </ParallaxLayer>

        {/* 
        <ParallaxLayer offset={3} factor={2} speed={0.6}>
        </ParallaxLayer> */}
      </Parallax>

      {/* <main className={styles.main}></main>

      <footer className={styles.footer}></footer> */}
    </div>
  );
};

import fsPromises from "fs/promises";
import path from "path";
export async function getStaticProps() {
  const filePath = path.join(
    process.cwd(),
    "/assets/data/upcomingMatches.json"
  );
  const jsonData = await fsPromises.readFile(filePath);
  const matches = JSON.parse(jsonData.toString()) as Matches;
  // const url = "../assets/data/upcomingMatches.json";
  // const res = await fetch(url);
  // const data = await res.json();

  return {
    props: { matches }, // will be passed to the page component as props
  };
}

export default Home;
