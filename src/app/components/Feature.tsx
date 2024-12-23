"use client";
import React, { useEffect } from "react";
import styles from "../styles/Feature.module.css"
import Image from "next/image";
import img1 from "../../../public/assets/img/joinImg1.svg"
import img2 from "../../../public/assets/img/joinImg2.svg"

const cards = [
    {
      id: 1,
      title: "Eager to Connect in Web3?",
      description:
        "Chora Club is your gateway to tailored learning, community engagement, and endless opportunities",
      button: "Start Your Journey",
      image:img1
    },
    {
      id: 2,
      title: "Ready to Shape the Future of Web3?",
      description:
        "Your expertise matters in guiding the next wave of web3 enthusiasts",
      button: "Join as a Delegate",
      image:img2
    },
  ];

const Feature = () => {
  useEffect(() => {
      const handleWheel = (e: WheelEvent) => {
        if (window.scrollY < window.innerHeight) {
          e.preventDefault();
          window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
          });
        }
      };
  
      window.addEventListener("wheel", handleWheel, { passive: false });
  
      return () => {
        window.removeEventListener("wheel", handleWheel);
      };
    }, []);
    const handlejoinClick = () => {
        window.open("https://app.chora.club/")
      }
  return (
    <>
    <div className={styles.container}>
        {cards.map((card, index)=>(
        <div key={index} className={styles.component}>
            <Image src={card.image} alt="" width={400} height={400}/>
            <h1 className={styles.title}>{card.title}</h1>
            <p className={styles.description}>{card.description}</p>
            <button className={styles.button} onClick={handlejoinClick}><span>{card.button}</span></button>
        </div>
        ))}
    </div>
      </>
  );
};

export default Feature;

