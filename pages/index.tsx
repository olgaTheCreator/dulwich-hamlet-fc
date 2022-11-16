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
      <div
        className={styles["background--pink-halftones"]}
        style={{ backgroundPositionY: useScrollPosition(-0.5) }}
      >
        <Header />
        <div style={{ display: "grid" }}>
          <ChevronDownIcon
            className={styles["chevron-down-icon__blue"]}
            style={{ transform: `translateY(${useScrollPosition(1.5)}px) ` }}
          />
        </div>
        <div className={styles["scroll-down-p"]}>
          Scroll
          <br />
          down
        </div>
        <div className={styles["image-container--girl"]}>
          <Girl
            style={{
              transform: `translateY(${useScrollPosition(-2)}px)`,
            }}
          />
          {/* <Image
                src="/../public/girl.svg"
                alt="player holding a ball"
                quality={100}
                layout="fill"
              /> */}
        </div>
      </div>

      <div className={styles["image-container--watch-us"]}>
        <WatchUsPlay
          style={{
            transform: `translate(${useScrollPosition(
              0.05
            )}px, ${useScrollPosition(-1.2)}px) `,
          }}
        />
      </div>

      <div
        className={styles["background--triangles"]}
        style={{
          transform: `translateY(${useScrollPosition(-1)}px)`,
        }}
        // style={{ backgroundPositionY: useScrollPosition(-1.5) }}
      >
        <Upcoming matches={matches} />
      </div>

      {tweets.map((tweet: TweetData) => (
        <Tweet key={tweet.id} {...tweet} />
      ))}

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
import { useScrollPosition } from "../utils/hooks/useScrollPosition";
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
