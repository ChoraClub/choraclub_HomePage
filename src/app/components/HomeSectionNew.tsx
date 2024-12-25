"use client";
import React, { useCallback, useState , useEffect, useRef} from "react";
import Image from "next/image";
import styles from "../styles/HomeSectionNew.module.css";
import logo from "../../../public/assets/img/cc-logo.svg";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import HowItWorks from "./HowItWorks";
import Feature from "./Feature";
import FAQ from "./FAQ";

const HomeSectionNew = () => {
  const [showFeatures, setShowFeatures] = useState(false);
  const [activeFeature, setActiveFeature] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<NodeJS.Timeout>();
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [scrollState, setScrollState] = useState('top'); // 'top', 'features', 'nextPage'
  const scrollLock = useRef(false);

  const toggleFeatures = () => {
    setShowFeatures(!showFeatures);
    if (!showFeatures) {
      setActiveFeature(-1);
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showFeatures) {
      timer = setInterval(() => {
        setActiveFeature((prev) => (prev + 1) % feature.length);
      }, 2000); // Change feature every 2 seconds
    }
    return () => clearInterval(timer);
  }, [showFeatures]);


  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      e.preventDefault();

      if (scrollLock.current) return;

      const deltaY = e.deltaY;
      const isScrollingDown = deltaY > 0;

      // Lock scroll during transitions
      scrollLock.current = true;
      setTimeout(() => {
        scrollLock.current = false;
      }, 800); // Adjust this timing to match your transition duration

      if (isScrollingDown) {
        // Scrolling DOWN logic
        switch (scrollState) {
          case "top":
            setShowFeatures(true);
            setScrollState("features");
            break;
          case "features":
            setScrollState("nextPage");
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth",
            });
            break;
        }
      } else {
        // Scrolling UP logic
        switch (scrollState) {
          case "nextPage":
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
            setShowFeatures(true);
            setScrollState("features");
            break;
          case "features":
            setShowFeatures(false);
            setScrollState("top");
            break;
        }
      }
    };

    if (containerRef.current) {
      containerRef.current.addEventListener("wheel", handleScroll, {
        passive: false,
      });
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("wheel", handleScroll);
      }
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [scrollState]);


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
    <>
    <div ref={containerRef}  style={{ overflow: "hidden", height: "100vh" }}>
      <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
     
        <Image
          src="/videos/video8.gif"
          alt="Animated background"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className={`${styles.textContainer} ${showFeatures ? styles.textUp : ''}`}>
          <h1 className={styles.text}>Discover.Learn.Engage.</h1>
        </div>

        <div className={styles.headingContainer}>
          <Image src={logo} alt="Chora Club Logo" />
          <button className={styles.button} onClick={handleLaunchApp}>
            <span>Launch app</span>
          </button>
        </div>

        <button
            className={`${styles.arrowButton} ${showFeatures ? styles.arrowUp : ''}`}
            onClick={toggleFeatures}
          >
            {showFeatures ? (
              <FaAngleUp className={styles.arrowIcon} />
            ) : (
              <FaAngleDown className={styles.arrowIcon} />
            )}
          </button>

         {showFeatures && (
        <div className={`${styles.featureContainer} ${styles.slideUp}`}>
          {feature.map((feature, index) => (
             <div 
             key={index} 
             className={`${styles.feature} ${index === activeFeature ? styles.activeFeature : ''} ${index < activeFeature ? styles.inactiveFeature : ''}`}
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
      )}
      </div>
     </div>
     {scrollState === "nextPage" && <HowItWorks />}
      {scrollState === "nextPage" && <Feature />}
      {scrollState === "nextPage" && <FAQ />}
     </>
  );
};

export default HomeSectionNew;