"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useRef } from "react";
import logo from "../../../public/assets/img/cc-logo.svg";
import styles from "../styles/SecondComponent.module.css";
import HowItWorks from "./HowItWorks";
import { gsap } from "gsap";
interface SecondComponentProps {
  onScrollUp?: () => void;
}

// const SecondComponent = () => {
  const SecondComponent: React.FC<SecondComponentProps> = ({ onScrollUp=()=>{} }) => {

  const featuresRef = useRef<(HTMLDivElement | null)[]>([]);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const textsRef = useRef<(HTMLParagraphElement | null)[]>([]);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const componentRef = useRef<HTMLDivElement>(null);

  const feature = [
    {
      image: "/assets/img/daos.svg",
      text: "Explore Diverse DAOs & Ecosystems Effortlessly",
    },
    {
      image: "/assets/img/chain.svg",
      text: "Connect with Delegates for Rapid Learning",
    },
    {
      image: "/assets/img/human.svg",
      text: "Personalized Learning Sessions, One Click Away",
    },
    {
      image: "/assets/img/watch.svg",
      text: "Active DAO participation in Live Office Hours",
    },
    {
      image: "/assets/img/settings.svg",
      text: "Intuitive Design for Seamless Navigation",
    },
    {
      image: "/assets/img/bell.svg",
      text: "Stay Informed with Event Reminders & Email Notifications",
    },
  ];

  const handleLaunchApp = useCallback(() => {
    window.open("https://app.chora.club", "_blank", "noopener,noreferrer");
  }, []);
// useEffect(()=>{
//   console.log("type od onscrollup",onScrollUp)
// })
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const timeline = gsap.timeline({
      defaults: { ease: "power2.inOut" },
      repeat: -1, // Infinite repeat
      repeatDelay: 1, // Delay between repetitions
    });

    // Create separate animations for each feature
    feature.forEach((_, index) => {
      const featureElement = featuresRef.current[index];
      const imageElement = imagesRef.current[index];
      const textElement = textsRef.current[index];

      if (!featureElement || !imageElement || !textElement) return;

      const startTime = index * 0.8; // Stagger the start time for each feature

      timeline
        .to(featureElement, {
          backgroundColor: "white",
          duration: 0.8,
        }, startTime)
        .to(imageElement, {
          scale: 2.5,
          y: -50,
          x:20,
          duration: 0.8,
        }, startTime)
        .to(textElement, {
          color: "black",
          duration: 0.8,
        }, startTime)
        .to(featureElement, {
          backgroundColor: "transparent",
          duration: 0.8,
        }, startTime + 0.9)
        .to(imageElement, {
          scale: 1,
          y: 0,
          x:0,
          duration: 0.8,
        }, startTime + 0.9)
        .to(textElement, {
          color: "white",
          duration: 0.8,
        }, startTime + 0.9);
    });

    timelineRef.current = timeline;

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, [feature]);

  // useEffect(() => {
  //   const handleWheel = (e: WheelEvent) => {
  //     if (componentRef.current && componentRef.current.getBoundingClientRect().top <= 0) {
  //       if (e.deltaY < 0) {
  //         e.preventDefault();
  //         onScrollUp();
  //       }
  //     }
  //   };

  //   window.addEventListener("wheel", handleWheel, { passive: false });
  //   return () => window.removeEventListener("wheel", handleWheel);
  // }, [onScrollUp]);

  const handleWheel = useCallback((e: WheelEvent) => {
    {console.log(componentRef.current?.getBoundingClientRect().top, "component")}
    if (componentRef.current && componentRef.current.getBoundingClientRect().top <= 0) {
      if (e.deltaY < 0) {
        e.preventDefault();
        onScrollUp();
      }
    }
  }, [onScrollUp]);

  useEffect(() => {
    if (typeof onScrollUp === 'function') {  // Additional type check
      window.addEventListener("wheel", handleWheel, { passive: false });
      return () => window.removeEventListener("wheel", handleWheel);
    }
  }, [handleWheel, onScrollUp]);


  return (
    <>
      <div
      ref={componentRef}
        style={{ width: "100vw", height: "100vh" }}
        className={styles.secondPage}
      >
        {/* <div className={styles.headingContainer}>
          <Image src={logo} alt="Chora Club Logo" />
          <button className={styles.AppButton} onClick={handleLaunchApp}>
            Launch app
          </button>
        </div> */}
        <div className={styles.textSecond}>
          Discover<span className={styles.dot}>.</span>Learn
          <span className={styles.dot}>.</span>Engage
          <span className={styles.dot}>.</span>
        </div>

        <div className={styles.featureContainer}>
          {feature.map((feature, index) => (
            <div key={index} className={styles.feature}  ref={(el) => {
              featuresRef.current[index] = el;
            }}>
              <Image
                className={styles.featureImage}
                src={feature.image}
                alt={feature.text}
                width={100}
                height={100}
                ref={(el) => {imagesRef.current[index] = el}}
              />
              <p className={styles.featureText}  ref={(el) => {textsRef.current[index] = el}}>{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SecondComponent;
