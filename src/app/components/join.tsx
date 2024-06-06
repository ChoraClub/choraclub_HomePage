"use client";
import Image from "next/image";
import React, { useLayoutEffect, useRef } from "react";
import img1 from "../../../public/Image (49) 3.svg";
import img2 from "../../../public/Image (50) 3.svg";
import styles from "../styles/join.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Join = () => {
  const joinRef = useRef(null);
  const joinImg1 = useRef(null);
  const joinImg2 = useRef(null);
  const joinContent1 = useRef(null);
  const joinContent2 = useRef(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // Function to enable body scrolling
    const enableBodyScroll = () => {
      document.body.style.overflow = "auto";
    };
    gsap
      .timeline({
        scrollTrigger: {
          trigger: joinRef.current,
          start: "top center",
          end: "+=400 top",
          toggleActions: "play none none reverse",
          scrub: false,
          markers: true,
        },
      })
      .to(joinRef.current, { opacity: 1, duration: 1, zIndex: 100 }, 0)
      .fromTo(
        [joinImg1.current, joinImg2.current],
        {
          y: -50,
          opacity: 0,
          duration: 1,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
        },
        1
      )
      .fromTo(
        [joinContent1.current, joinContent2.current],
        {
          y: 100,
          opacity: 0,
          duration: 1,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
        },
        1
      ).to;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: joinRef.current,
          start: "+=1200 top",
          end: "+=1300 top",
          toggleActions: "play none none reverse",
          scrub: false,
        },
        onComplete: enableBodyScroll,
      })
      .to(
        joinRef.current,
        { opacity: 0, duration: 1, position: "relative" },
        0
      );
  }, []);
  return (
    <div className={styles.joinpage} ref={joinRef}>
      <div className={styles.bottom2}></div>
      <div className={styles.bottom1}></div>
      <div className={styles.top1}></div>

      <div className={styles.main}>
        <div className={styles.section}>
          <Image
            src={img1}
            alt=""
            className={styles.image}
            ref={joinImg1}
          ></Image>
          <div className={styles.joinContent} ref={joinContent1}>
            <h1 className={styles.heading}>Eager to Connect in Web3?</h1>
            <p className={styles.para}>
              Chora Club is your gateway to tailored learning, community
              engagement, and endless opportunities
            </p>
            <button className={styles.button}>Start Your Journey</button>
          </div>
        </div>
        <div className={styles.section}>
          <Image
            src={img2}
            alt=""
            className={styles.image}
            ref={joinImg2}
          ></Image>
          <div className={styles.joinContent} ref={joinContent2}>
            <h1 className={styles.heading}>
              Ready to Shape the Future of Web3?
            </h1>
            <p className={styles.para}>
              Your expertise matters in guiding the next wave of web3
              enthusiasts
            </p>
            <button className={styles.button}>Join as a Delegate</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
