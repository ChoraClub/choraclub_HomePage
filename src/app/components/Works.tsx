import React from "react";
import styles from "../styles/works.module.css";
import img from "../../../public/e172.svg"
import Image from "next/image";

const work = [
  {
    heading: "Discover DAOs",
    paragraph:
      "Dive into the vast universe of Web3 ecosystems! Explore and uncover the hidden treasures of diverse DAOs. It's not just discovery; it's a journey into the heart of decentralized possibilities.",
  },
  {
    heading: "Fast-track Learning with Delegate Dialogues",
    paragraph:
      "Skip the learning curve! Book lively sessions with our seasoned Delegates. Get ready for a knowledge boost tailored to your interests. Because why settle for ordinary when you can learn from the extraordinary?",
  },
  {
    heading: "Become an Active Participant",
    paragraph:
      "Be more than a spectator—be an active player! Attend Delegate Office Hours regularly. It's not just about showing up; it's about actively participating, asking questions, engaging with industry leaders and becoming an integral part of the ecosystem.",
  },
];

const Works = () => {
  return (
    <div className={styles.section}>
        <div className={styles.e172}></div>
        <div className={styles.e235}></div>
        <div className={styles.e233}></div>
        <div className={styles.e234}></div>
        <div className={styles.e170}></div>
        <div className={styles.e174}></div>
        <div className={styles.v152}></div>
      <h5 className={styles.heading}>How Chora Club Works</h5>
      <div className={styles.worksList}>
        {work.map((work, index) => (
          <div key={index} className={styles.workDiv}>
            <h5 className={styles.divHead}>{work.heading}</h5>
            <p className={styles.divPara}>{work.paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
