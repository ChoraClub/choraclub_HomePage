"use client"
import React, { useState } from "react";
import styles from '../styles/footer.module.css'
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import MosaicAnimation from "./MosaicAnimation";
import mirror from '../../../public/mirror.svg'
import Image from "next/image";
import { FaArrowUp } from "react-icons/fa";




const Footer = () => {
  const handleScrollToTop = () => {
    console.log("clicking")
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  return (
    <div className={styles.footersection}>
      <div className={styles.section1}>
        <p className={styles.copyrighttext}>Copyright © 2023 Chora Club I All rights reserved</p>
        <div className={styles.iconlist}>
          <div className={styles.icon} ><FaDiscord /></div>
          <div className={styles.icon}><FaXTwitter /></div>
          <div className={styles.icon}><FaTelegramPlane /></div>
          <div className={styles.icon}><Image src={mirror} alt="mirror" width={20} height={20}></Image> </div>
        </div>
      </div>
      <div className={styles.section2}>
        <p>Subscribe Newsletter</p>
        <div className={styles.inputsection}>
          <div>
            <input type="email" name="" id="" placeholder="Email" className={styles.email}/>
            <button className={styles.subscribe}>Subscribe</button>
            </div>
            <button onClick={handleScrollToTop} className={styles.upbutton}><FaArrowUp /></button>
        </div>
      </div>
      <MosaicAnimation />
    </div>
  );
};

export default Footer;
