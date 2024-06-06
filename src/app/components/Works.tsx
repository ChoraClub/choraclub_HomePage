"use client";
import React, { useLayoutEffect, useRef } from "react";
import styles from "../styles/works.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
  const boxRefs = useRef<Array<HTMLDivElement | null>>([]);
  const workHeadingRef = useRef(null);
  const worksRef = useRef(null);

  // useLayoutEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   gsap
  //     .timeline({
  //       scrollTrigger: {
  //         trigger: worksRef.current,
  //         start: "+=800 top",
  //         end: "+=999 top",
  //         toggleActions: "play none none reverse",
  //         scrub: false,
  //       },
  //     })
  //     .to(worksRef.current, { opacity: 1 }, 0)
  //     .fromTo(
  //       workHeadingRef.current,
  //       {
  //         y: -50,
  //         opacity: 0,
  //         duration: 1,
  //       },
  //       {
  //         y: 0,
  //         opacity: 1,
  //         duration: 1,
  //       },
  //       1
  //     )
  //     .fromTo(
  //       boxRefs.current,
  //       {
  //         y: 20,
  //         opacity: 0,
  //         duration: 1,
  //       },
  //       {
  //         y: 0,
  //         opacity: 1,
  //         duration: 1,
  //       },
  //       1
  //     );
  //   // gsap
  //   //   .timeline({
  //   //     scrollTrigger: {
  //   //       trigger: worksRef.current,
  //   //       start: "+=1000 top",
  //   //       end: "+=1100 top",
  //   //       toggleActions: "play none none reverse",
  //   //       scrub: false,
  //   //     },
  //   //   })
  //   //   .fromTo(
  //   //     workHeadingRef.current,
  //   //     {
  //   //       y: 0,
  //   //       opacity: 1,
  //   //       duration: 1,
  //   //     },
  //   //     {
  //   //       y: -100,
  //   //       opacity: 0,
  //   //       duration: 1,
  //   //     },
  //   //     1
  //   //   )
  //   //   .fromTo(
  //   //     boxRefs.current,
  //   //     {
  //   //       y: 0,
  //   //       opacity: 1,
  //   //       duration: 1,
  //   //     },
  //   //     {
  //   //       y: -100,
  //   //       opacity: 0,
  //   //       duration: 1,
  //   //     },
  //   //     1
  //   //   )
  //   //   .to(worksRef.current, { opacity: 0, duration: 1, zIndex: 0 }, 2);
  // }, []);
  const handleMouseEnter = (index: number) => {
    gsap.to(boxRefs.current[index], {
      boxShadow:
        "0px 4px 127.3px 0px #004dff, inset 0px 4px 214.8px 0px rgba(35, 57, 255, 0.48)",
      borderColor: "#004dff",
      duration: 0,
    });
  };

  const handleMouseLeave = (index: number) => {
    gsap.to(boxRefs.current[index], {
      boxShadow: "inset 0px 4px 214.8px 0px rgba(19, 32, 151, 0.48)",
      borderColor: "rgb(34, 33, 33)",
      duration: 0,
    });
  };
  return (
    <div className={`${styles.section} worksParent`} ref={worksRef}>
      <div className={styles.e172}></div>
      <div className={styles.e235}></div>
      <div className={styles.e233}></div>
      <div className={styles.e234}></div>
      <div className={styles.e170}></div>
      <div className={styles.e174}></div>
      <div className={styles.v152}></div>
      <h5 className={styles.heading} ref={workHeadingRef}>
        How Chora Club Works
      </h5>
      <div className={styles.worksList}>
        {work.map((work, index) => (
          <div
            key={index}
            className={styles.workDiv}
            ref={(el: HTMLDivElement | null) => {
              if (el) {
                boxRefs.current[index] = el;
              }
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <h5 className={styles.divHead}>{work.heading}</h5>
            <p className={styles.divPara}>{work.paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
