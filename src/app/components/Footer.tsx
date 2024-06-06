"use client";
import React, { useState } from "react";
import styles from "../styles/footer.module.css";
import MosaicAnimation from "./MosaicAnimation";
import Image from "next/image";

const Footer = () => {
  const handleScrollToTop = () => {
    console.log("clicking");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.footersection}>
      <div className={styles.section1}>
        <p className={styles.copyrighttext}>
          Copyright © 2024 Chora Club I All rights reserved
        </p>
        <div className={styles.iconlist}>
          <div className={styles.icon}>
            <Image
              src={"/assets/img/discord_chora.svg"}
              alt="Discord Icon"
              width={51}
              height={51}
            />
          </div>
          <div className={styles.icon}>
            <Image
              src={"/assets/img/Subtract_chora.svg"}
              alt="Discord Icon"
              width={51}
              height={51}
            />
          </div>
          <div className={styles.icon}>
            <Image
              src={"/assets/img/telegram_chora.svg"}
              alt="Discord Icon"
              width={51}
              height={51}
            />
          </div>
          <div className={styles.icon}>
            <Image
              src={"/assets/img/mirror_chora.svg"}
              alt="Discord Icon"
              width={51}
              height={51}
            />
          </div>
        </div>
      </div>
      <div className={styles.section2}>
        <p>Subscribe Newsletter</p>
        <div className={styles.inputsection}>
          <div>
            <input
              type="email"
              name=""
              id=""
              placeholder="Email"
              className={styles.email}
            />
            <button className={styles.subscribe}>Subscribe</button>
          </div>

          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleScrollToTop}
            className={styles.upbutton}
          >
            <rect
              x="0.5"
              y="0.5"
              width="43"
              height="43"
              rx="21.5"
              stroke="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M21.9991 13.9395L28.5294 20.4698L27.4688 21.5304L22.7491 16.8108L22.7491 29.0001H21.2491L21.2491 16.8108L16.5294 21.5304L15.4688 20.4698L21.9991 13.9395Z"
              fill="#ECEEEC"
            />
          </svg>
        </div>
      </div>
      <MosaicAnimation />
    </div>
  );
};

export default Footer;
