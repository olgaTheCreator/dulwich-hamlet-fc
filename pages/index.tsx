import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState, useEffect, useRef } from "react";
import Header from "../components/Header/Header";
import Upcoming from "../components/Upcoming/Upcoming";
import Girl from "../public/girl.svg";
import WatchUsPlay from "../assets/svgs/watch_us_play_poly.svg";
import { Parallax } from "react-scroll-parallax";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { Matches } from "../types/globals";
import { getTimeline } from "../utils/TwitterApi/TwitterApi";
import { Tweet } from "../components/Tweet/Tweet";
import { TweetData } from "../utils/TwitterApi/Types";

const add = (a: number, b: number): number => a + b;

interface MatchesProps {
  matches: Matches;
  tweets: any;
}

const Home: NextPage<MatchesProps> = ({ matches, tweets }) => {
  console.log(tweets);
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

      <Parallax translateY={[20, 90]}>
        <Header />
        <div className={styles["background--pink-halftones"]}></div>
      </Parallax>
      <Parallax>
        <ChevronDownIcon className={styles["chevron-down-icon__blue"]} />
      </Parallax>
      <Parallax>
        <div className={styles["scroll-down-p"]}>
          Scroll
          <br />
          down
        </div>
      </Parallax>
      <Parallax speed={510}>
        <div className={styles["image-container--girl"]}>
          <Girl />
          {/* <Image
              src="/../public/girl.svg"
              alt="player holding a ball"ata) => {
  const au
              quality={100}
            /> */}
        </div>
      </Parallax>
      {/* <Parallax offset={1} speed={1}>
          <div className={styles["background--white"]}></div>
        </Parallax> */}
      {/* <Parallax sticky={{ start: 1, end: 1.7 }}>
          <ChevronDownIcon className={styles["chevron-down-icon__blue"]} />
        </Parallax> */}
      <Parallax speed={0.3}>
        <div className={styles["image-container--watch-us"]}>
          <WatchUsPlay />
        </div>
      </Parallax>
      <Parallax speed={0.4}>
        <div className={styles["background--triangles"]}></div>
      </Parallax>
      <Parallax speed={0.2}>
        <Upcoming matches={matches} />
      </Parallax>
      <Parallax>
        {tweets.map((tweet: TweetData) => (
          <Tweet key={tweet.id} {...tweet} />
        ))}
      </Parallax>

      {/* 
        <Parallax offset={3} factor={2} speed={0.6}>
        </Parallax> */}

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
  const tweets = await getTimeline();

  return {
    props: { matches, tweets }, // will be passed to the page component as props
  };
}
export default Home;
