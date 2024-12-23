"use client"
import React, { useEffect, useRef } from "react";
import styles from "../styles/HowItWorks.module.css";
import Feature from "./Feature";
const cards = [
  {
    id: 1,
    title: "Discover DAOs",
    description:
      "Dive into the vast universe of Web3 ecosystems! Explore and uncover the hidden treasures of diverse DAOs. It's not just discovery; it's a journey into the heart of decentralized possibilities.",
    color: "text-white",
  },
  {
    id: 2,
    title: "Fast-track Learning",
    description:
      "Skip the learning curve! Book lively sessions with our seasoned Delegates. Get ready for a knowledge boost tailored to your interests. Because why settle for ordinary when you can learn from the extraordinary?",
    color: "text-blue-500",
  },
  {
    id: 3,
    title: "Active Participant",
    description:
      "Be more than a spectator—be an active player! Attend Delegate Office Hours regularly. It's not just about showing up; it's about actively participating, asking questions, engaging with industry leaders and becoming an integral part of the ecosystem.",
    color: "text-white",
  },
];

const HowItWorks = () => {

  return (
    <>
    <div className={styles.container}>
      <p className={styles.heading}>How Chora Club Works</p>
      <div className={styles.cardContainer}>
        {cards.map((card, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardTop}>
              <h1 className={styles.title}>{card.title}</h1>
              <p className={styles.description}>{card.description}</p>
            </div>
            <div className={styles.numberContainer}>
              <div className={styles.line}></div>
              <div className={styles.number}>{card.id}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default HowItWorks;
