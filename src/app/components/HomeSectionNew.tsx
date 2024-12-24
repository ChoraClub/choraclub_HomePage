"use client";
import React, { useCallback, useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "../styles/HomeSectionNew.module.css";
import logo from "../../../public/assets/img/cc-logo.svg";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import HowItWorks from "./HowItWorks";
import Feature from "./Feature";
import FAQ from "./FAQ";

const HomeSectionNew = () => {
  const [scrollStage, setScrollStage] = useState(0);
  const [activeFeature, setActiveFeature] = useState(-1);
  const lastScrollTime = useRef(Date.now());
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (scrollStage === 1) {
      timer = setInterval(() => {
        setActiveFeature((prev) => (prev + 1) % feature.length);
      }, 2000);
    }
    return () => clearInterval(timer);
  }, [scrollStage]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
  
      // e.preventDefault();
      const now = Date.now();
      if (now - lastScrollTime.current < 500) return; // Debounce scroll events
      
      const direction = e.deltaY > 0 ? 'down' : 'up';
      
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      if (direction === 'down') {
        setScrollStage(prev => Math.min(prev + 1, 2));
      } else {
        setScrollStage(prev => Math.max(prev - 1, 0));
      }

      lastScrollTime.current = now;

      scrollTimeout.current = setTimeout(() => {
        // Reset logic if needed
      }, 500);

    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  const handleLaunchApp = useCallback(() => {
    window.open("https://app.chora.club", "_blank", "noopener,noreferrer");
  }, []);

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

  return (
    <div className={styles.container}>
      <div className={`${styles.page} ${styles.homePage} ${scrollStage >= 1 ? styles.showFeatures : ''} ${scrollStage === 2 ? styles.hide : ''}`}>
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
          className={`${styles.arrowButton} ${scrollStage >= 1 ? styles.arrowUp : ''}`}
          onClick={() => setScrollStage(scrollStage === 0 ? 1 : 0)}
        >
          {scrollStage >= 1 ? (
            <FaAngleUp className={styles.arrowIcon} />
          ) : (
            <FaAngleDown className={styles.arrowIcon} />
          )}
        </button>

        <div className={`${styles.featureContainer} ${scrollStage >= 1 ? styles.slideUp : ''}`}>
          {feature.map((feature, index) => (
            <div 
              key={index} 
              className={`${styles.feature} ${index === activeFeature ? styles.activeFeature : ''}`}
            >
              <Image
                className={styles.featureImage}
                src={feature.image}
                alt={feature.text}
                width={100}
                height={100}
              />
              <p className={styles.featureText}>{feature.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={`${styles.page} ${styles.secondPage} ${scrollStage === 2 ? styles.show : ''}`}>
      <div className={styles.secondPageContent}>
    <HowItWorks />
    <Feature />
    <FAQ />
  </div>
      </div>
    </div>
  );
};

export default HomeSectionNew;