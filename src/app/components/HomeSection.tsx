"use client";
import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  lazy,
  Suspense,
  useMemo,
} from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoIosArrowRoundDown } from "react-icons/io";

import styles from "../styles/HomeSection.module.css";
import logo from "../../../public/assets/img/cc-logo.svg";
import { FadeLoader } from "react-spinners";
import Spline from "@splinetool/react-spline";
// Lazy load components
const LazySpline = lazy(() => import("@splinetool/react-spline/next"));
const LazyHowItWorks = lazy(() => import("./HowItWorks"));
const LazyFeature = lazy(() => import("./Feature"));
const LazyFAQ = lazy(() => import("./FAQ"));

// Memoized Feature component
const Feature = React.memo(({ image, text }: { image: string; text: string }) => (
  <div className={styles.feature}>
    <Image
      className={styles.featureImage}
      src={image}
      alt={text}
      width={100}
      height={100}
    />
    <p className={styles.featureText}>{text}</p>
  </div>
));
Feature.displayName = 'Feature';

const HomeSection: React.FC = () => {
  // Memoized features array
  const FEATURES = useMemo(() => [
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
  ], []);

  // Typed refs
  const mainRef = useRef<HTMLDivElement>(null);
  const nextSectionRef = useRef<HTMLDivElement>(null);
  const componentsContainerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  // State for lazy loading
  const [showSecondSpline, setShowSecondSpline] = useState(false);

  const firstSectionRef = useRef<HTMLDivElement>(null);
  const secondSectionRef = useRef<HTMLDivElement>(null);

  const scrollToNextSection = useCallback(() => {
    // Create a timeline for smooth animation sequence
    const tl = gsap.timeline({
      onComplete: () => {
        nextSectionRef.current?.scrollIntoView({ behavior: "smooth" });
        setShowSecondSpline(true);
      }
    });

    // First section scales up and fades out
    tl.to(firstSectionRef.current, {
      scale: 1.2,
      opacity: 0,
      duration: 1.4,
      ease: "power2.inOut"
    });

    // Second section starts from scaled up and fades in while scaling down
    tl.fromTo(secondSectionRef.current, 
      {
        xPercent: 100,
        opacity: 0,
      },
      {
        xPercent: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut"
      },
      "-=0.4" // Overlap with previous animation
    );
  }, []);
  // Memoized scroll handlers
  // const scrollToNextSection = useCallback(() => {
  //   nextSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  //   setShowSecondSpline(true);
  // }, []);

  const scrollToFeature = useCallback(() => {
    if (!nextSectionRef.current) return;

    nextSectionRef.current.scrollIntoView({ behavior: "smooth" });

    // Debounced timeline trigger with proper typing
    const triggerTimeline = () => {
      const timeline = timelineRef.current;
      if (timeline && timeline.progress() === 0) {
        timeline.play();
      }
    };

    requestAnimationFrame(() => {
      setTimeout(triggerTimeline, 1000);
    });

    // Safely add onComplete callback
    if (timelineRef.current) {
      timelineRef.current.eventCallback("onComplete", () => {
        document.body.style.overflow = "auto";
        componentsContainerRef.current?.scrollIntoView({ behavior: "smooth" });
      });
    }
  }, []);

  const handleLaunchApp = useCallback(() => {
    window.open("https://app.chora.club", "_blank", "noopener,noreferrer");
  }, []);

  // Prevent default scroll behavior
  const handleScroll = useCallback((event: React.WheelEvent<HTMLDivElement>) => {
    event.preventDefault();
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      paused: true,
      defaults: { force3D: true, overwrite: "auto" },
    });

    const features = document.querySelectorAll<HTMLDivElement>(`.${styles.feature}`);
    const images = document.querySelectorAll<HTMLImageElement>(`.${styles.featureImage}`);
    const texts = document.querySelectorAll<HTMLParagraphElement>(`.${styles.featureText}`);

    features.forEach((feature, index) => {
      timeline
        .to(feature, { backgroundColor: "white", duration: 0.5 }, index)
        .to(images[index], { scale: 2.8, y: -50, x: 40, duration: 0.5 }, index)
        .to(texts[index], { color: "black", duration: 0.5 }, index)
        .to(feature, { backgroundColor: "black", duration: 0.5 }, index + 0.6)
        .to(images[index], { scale: 1, y: 0, x: 0, duration: 0.5 }, index + 0.6)
        .to(texts[index], { color: "white", duration: 0.5 }, index + 0.6);
    });

    timelineRef.current = timeline;

    document.body.style.overflow = "hidden";

    return () => {
      timeline.kill();
      document.body.style.overflow = "auto";
    };
  }, []);

  // Memoize the Spline components to prevent unnecessary re-renders
  const FirstSpline = useMemo(() => {
    const SplineComponent = () => (
      <LazySpline scene="https://draft.spline.design/QA2DOZLjieELy41S/scene.splinecode" />
    );
    SplineComponent.displayName = 'FirstSpline';
    return <SplineComponent />;
  }, []);

  const SecondSpline = useMemo(() => {
    const SplineComponent = () => (
      <LazySpline scene="https://draft.spline.design/HLh8BzSFMico8FIP/scene.splinecode" />
    );
    SplineComponent.displayName = 'SecondSpline';
    return <SplineComponent />;
  }, []);

  useEffect(()=>{
    {console.log("second spline",showSecondSpline)}
  },[showSecondSpline]
  )

  return (
    <div style={{ width: "100%", overflowX: "hidden", overflowY: "hidden" }}>
      <div
        ref={mainRef}
        style={{
          width: "100vw",
          height: "100vh",
          position: "relative",
          overflow: "hidden",
        }}
        onWheel={handleScroll}
      >
         <div ref={firstSectionRef} style={{ width: "100%", height: "100%" }}>
        {/* <Suspense fallback={<FadeLoader color="black" />}>
          {FirstSpline}
        </Suspense> */}
         <Spline
        scene="https://prod.spline.design/8K-kgfzdqdhnsq2k/scene.splinecode"
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

        <div className={styles.black} />

        <div className={styles.buttonContainer}>
          <button onClick={scrollToNextSection} className={styles.scrollDown}>
            <IoIosArrowRoundDown className={styles.downArrow} />
          </button>
          <span className={styles.scrollText}>Scroll to Explore</span>
        </div>
        </div>

        {/* Next page */}
        <div ref={secondSectionRef} style={{ width: "100%", height: "100%" }}>
        <div
          className={styles.secondPage}
          ref={nextSectionRef}
          style={{
            width: "100vw",
            height: "101vh",
            position: "absolute",
            top: "100vh",
          }}
        >
          {/* {showSecondSpline && (
            <Suspense fallback={<FadeLoader color="black" />}>
              {SecondSpline}
            </Suspense>
          )} */}
          {/* <div className={styles.secondPage}></div> */}
          <div className={styles.headingContainer}>
            <Image src={logo} alt="Chora Club Logo" />
            <button className={styles.AppButton} onClick={handleLaunchApp}>
              Launch app
            </button>
          </div>

          <div className={styles.textSecond}>
            Discover<span className={styles.dot}>.</span>Learn
            <span className={styles.dot}>.</span>Engage
            <span className={styles.dot}>.</span>
          </div>

          <div className={styles.buttonContainerSecond}>
            <button className={styles.scrollDown} onClick={scrollToFeature}>
              <IoIosArrowRoundDown className={styles.downArrow} />
            </button>
            <span className={styles.scrollText}>Scroll to Explore</span>
          </div>

          <div className={styles.featureContainer}>
            {FEATURES.map((feature, index) => (
              <Feature key={index} {...feature} />
            ))}
          </div>
          </div>
        </div>
      </div>

      <div ref={componentsContainerRef}>
        <Suspense fallback={<div className={styles.loader}><FadeLoader color="black" /></div>}>
          <LazyHowItWorks />
          <LazyFeature />
          <LazyFAQ />
        </Suspense>
      </div>
    </div>
  );
};

HomeSection.displayName = 'HomeSection';

export default React.memo(HomeSection);