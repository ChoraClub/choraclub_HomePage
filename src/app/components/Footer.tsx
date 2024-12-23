// "use client";
import React, { useState } from "react";
import styles from "../styles/footer.module.css";
import MosaicAnimation from "./MosaicAnimation";
import Image from "next/image";
import Newsletter from "./Newsletter";
import NewsletterMail from "./NewsLetterMail";

const Footer = () => {
  const handleSocialClick = (link: any) => {
    console.log("clicked");
    window.open(link);
  };

  return (
    <div className={styles.footersection}>
      <div className={styles.section1}>
        <p className={styles.copyrighttext}>
          Copyright © 2024 Chora Club I All rights reserved
        </p>
        <div className={styles.iconlist}>
          <div
            className={styles.icon}
            onClick={() => handleSocialClick("https://discord.gg/fA4sPhetXJ")}
          >
            <Image
              src={"/assets/img/discord_chora.svg"}
              alt="Discord Icon"
              width={51}
              height={51}
            />
          </div>
          <div
            className={styles.icon}
            onClick={() => handleSocialClick("https://x.com/choraclub?s=21")}
          >
            <Image
              src={"/assets/img/Subtract_chora.svg"}
              alt="Discord Icon"
              width={51}
              height={51}
            />
          </div>
          <div
            className={styles.icon}
            onClick={() => handleSocialClick("https://t.me/choraclub")}
          >
            <Image
              src={"/assets/img/telegram_chora.svg"}
              alt="Discord Icon"
              width={51}
              height={51}
            />
          </div>
          <div
            className={styles.icon}
            onClick={() =>
              handleSocialClick(
                "https://mirror.xyz/0x30d644CBf785167D8CaBcB35602959E19D9004Db"
              )
            }
          >
            <Image
              src={"/assets/img/mirror_chora.svg"}
              alt="Discord Icon"
              width={51}
              height={51}
            />
          </div>
        </div>
      </div>
      {/* <Newsletter /> */}
      <NewsletterMail/>
      <MosaicAnimation />
    </div>
  );
};

export default Footer;
