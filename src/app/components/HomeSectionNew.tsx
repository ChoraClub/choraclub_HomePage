"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "../styles/HomeSectionNew.module.css";
import logo from "../../../public/assets/img/cc-logo.svg";
import SecondComponent from "./SecondComponent";
import "aos/dist/aos.css";
import { FaAngleDown } from "react-icons/fa6";

const HomeSectionNew = () => {
  const secondSectionRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);
  const [isAtSecond, setIsAtSecond] = useState(false);


  const lastScrollTime = useRef(Date.now());
  const handleScrollUp = useCallback(() => {
    homeRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (secondSectionRef.current) {
        const rect = secondSectionRef.current.getBoundingClientRect();
        setIsAtSecond(rect.top <= window.innerHeight / 2);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const now = Date.now();
      if (now - lastScrollTime.current < 1000) {
        return;
      }
      lastScrollTime.current = now;

      if (e.deltaY > 0 && !isAtSecond) {
        e.preventDefault();
        secondSectionRef.current?.scrollIntoView({ behavior: "smooth" });
      } else if (e.deltaY < 0 && isAtSecond) {
        e.preventDefault();
        homeRef.current?.scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [isAtSecond]);

 
  const scrollToSecond = () => {
    secondSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // const handleWheel = (e:any) => {
  //   e.preventDefault(); 
  //   // You can check if the wheel is scrolling down or up, and decide which action to take
  //   if (e.deltaY > 0) { // This means scrolling down
  //     secondSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  // // Add the event listener on mount and clean it up on unmount
  // useEffect(() => {
  //   window.addEventListener("wheel", handleWheel, { passive: false });

  //   return () => {
  //     window.removeEventListener("wheel", handleWheel);
  //   };
  // }, []);

  // const handleWheel =(e:any)=>{
  //   e.preventDefault();
  //   secondSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  // }

  // useEffect(()=>{
  //   window.addEventListener("wheel",handleWheel, { passive: false })
  // })


  const handleLaunchApp = useCallback(() => {
    window.open("https://app.chora.club", "_blank", "noopener,noreferrer");
  }, []);


  return (
    <>
    <div ref={homeRef}  style={{ overflow: "hidden", height: "100vh" }}>
      <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
        <Image
          src="/videos/video8.gif"
          alt="Animated background"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className={styles.textContainer}>
          <h1 className={styles.text}>Discover.Learn.Engage.</h1>
        </div>

        <div className={styles.headingContainer}>
          <Image src={logo} alt="Chora Club Logo" />
          <button className={styles.AppButton} onClick={handleLaunchApp}>
            Launch app
          </button>
        </div>

        <button
          onClick={scrollToSecond}
          className={styles.downButton}
        >
          <FaAngleDown className={styles.downIcon}/>
        </button>
      </div>
     </div>
     {/* <div ref={secondSectionRef}></div> */}
     {/* <div ref={secondSectionRef}><SecondComponent/></div> */}
     {/* <div ref={secondSectionRef} style={{height:"100vh"}}></div> */}
     <div ref={secondSectionRef}>
        <SecondComponent onScrollUp={handleScrollUp} />
      </div>
     </>
  );
};

export default HomeSectionNew;
