"use client";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import styles from "../styles/herosection.module.css";
import MovingCircle from "./MovingCircle";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./Header";

const items = [
  {
    imgSrc: "/assets/img/daos.svg",
    text: "Explore Diverse DAOs & Ecosystems Effortlessly",
  },
  {
    imgSrc: "/assets/img/chain.svg",
    text: "Connect with Delegates for Rapid Learning",
  },
  {
    imgSrc: "/assets/img/human.svg",
    text: "Personalized Learning Sessions, One Click Away",
  },
  {
    imgSrc: "/assets/img/watch.svg",
    text: "Active DAO participation in Live Office Hours",
  },
  {
    imgSrc: "/assets/img/settings.svg",
    text: "Intuitive Design for Seamless Navigation",
  },
  {
    imgSrc: "/assets/img/bell.svg",
    text: "Stay Informed with Event Reminders & Email Notifications",
  },
];
function HeroSection() {
  const appRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef(null);
  const discoverRef = useRef(null);
  const learnRef = useRef(null);
  const engageRef = useRef(null);
  const discoverImageRef = useRef(null);
  const learnImageRef = useRef(null);
  const engageImageRef = useRef(null);
  const rectangleRef = useRef(null);
  const boxItemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const gridParentRef = useRef(null);
  const boxItemImageRefs = useRef<Array<HTMLDivElement | null>>([]);
  const headerRef = useRef(null);
  const worksRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY; // or document.documentElement.scrollTop;
      console.log("Scroll Value:", scrollValue);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    let ctx = gsap.context(() => {
      // use scoped selectors
      gsap.fromTo(
        headerRef.current,
        {
          y: -70,
          opacity: 0,
          duration: 0.5,
        },
        {
          y: 0,
          opacity: 1,
        }
      );
      gsap.fromTo(
        [discoverRef.current, learnRef.current, engageRef.current],
        {
          y: 50,
          opacity: 0,
          duration: 0.5,
        },
        {
          y: 0,
          opacity: 1,
        }
      );
    });
  }, []);

  useLayoutEffect(() => {
    let scrollValue: number | undefined;
    function getScrollValueForSection(sectionHeight: any) {
      const viewportHeight = window.innerHeight;
      const scrollValue = sectionHeight;
      return scrollValue;
    }

    if (appRef.current) {
      scrollValue = getScrollValueForSection(appRef.current.offsetHeight);
      console.log("Scroll value for section one:", scrollValue);
    }
    if (scrollValue !== undefined) {
      gsap.registerPlugin(ScrollTrigger);

      // First section timeline
      gsap
        .timeline({
          scrollTrigger: {
            trigger: appRef.current,
            start: "+=10 top",
            // end: "+=200 top",
            end: `+=${scrollValue / 6} top`,
            toggleActions: "play none none reverse",
            scrub: 1,
          },
        })
        .fromTo(
          discoverImageRef.current,
          {
            opacity: 0,
            scale: 0,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
          },
          0
        )
        .to(
          discoverRef.current,
          {
            top: "25%",
            left: "0%",
            duration: 1,
            opacity: 1,
          },
          0
        )
        .to(
          learnRef.current,
          {
            left: "0%",
            duration: 1,
            opacity: 0.24,
          },
          0
        )
        .to(
          engageRef.current,
          {
            top: "55%",
            left: "0%",
            duration: 1,
            opacity: 0.24,
          },
          0
        );

      // Second section timeline
      gsap
        .timeline({
          scrollTrigger: {
            trigger: appRef.current,
            start: `+=${scrollValue / 6} top`,
            end: `+=${2 * scrollValue / 6} top`,
            toggleActions: "play none none reverse",
            scrub: 1,
          },
        })
        .to(
          discoverRef.current,
          {
            duration: 1,
            opacity: 0.24,
          },
          0
        )
        .to(
          learnRef.current,
          {
            duration: 1,
            opacity: 1,
          },
          0
        )
        .fromTo(
          learnImageRef.current,
          {
            opacity: 0,
            scale: 0,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
          },
          0
        )
        .to(
          discoverImageRef.current,
          {
            opacity: 0,
            duration: 1,
            scale: 0,
          },
          0
        )
        .to(
          engageImageRef.current,
          {
            opacity: 0,
            duration: 1,
            scale: 0,
          },
          0
        );

      // Third section timeline
      gsap
        .timeline({
          scrollTrigger: {
            trigger: appRef.current,
            start: `+=${2 * scrollValue / 6} top`,
            end: `+=${3 * scrollValue / 6} top`,
            toggleActions: "play none none reverse",
            scrub: 1,
          },
        })
        .to(
          learnRef.current,
          {
            duration: 1,
            opacity: 0.24,
          },
          0
        )
        .to(
          engageRef.current,
          {
            duration: 1,
            opacity: 1,
          },
          0
        )
        .fromTo(
          engageImageRef.current,
          {
            opacity: 0,
            scale: 0,
          },
          {
            opacity: 1,
            duration: 1,
            scale: 1,
          },
          0
        )
        .to(
          learnImageRef.current,
          {
            opacity: 0,
            scale: 0,
            duration: 1,
          },
          0
        )
        .to(
          discoverImageRef.current,
          {
            opacity: 0,
            scale: 0,
            duration: 1,
          },
          0
        );

      // Fourth section timeline
      gsap
        .timeline({
          scrollTrigger: {
            trigger: appRef.current,
            start: `+=${3 * scrollValue / 6} top`,
            end: `+=${4 * scrollValue / 6} top`,
            toggleActions: "play none none reverse",
            scrub: false,
          },
        })
        .to(
          gridParentRef.current,
          {
            bottom: 0,
            duration: 1,
          },
          0
        )
        .to(
          engageImageRef.current,
          {
            opacity: 0,
            scale: 0,
            duration: 1,
          },
          0
        )
        .to(
          discoverImageRef.current,
          {
            opacity: 0,
            scale: 0,
            duration: 1,
          },
          0
        )
        .to(
          learnImageRef.current,
          {
            opacity: 0,
            scale: 0,
            duration: 1,
          },
          0
        )
        .to(
          discoverRef.current,
          {
            top: "40%",
            left: "0%",
            duration: 1,
            opacity: 1,
          },
          0
        )
        .to(
          learnRef.current,
          {
            top: "40%",
            left: "39%",
            duration: 1,
            opacity: 1,
          },
          0
        )
        .to(
          engageRef.current,
          {
            top: "40%",
            left: "65%",
            duration: 1,
            opacity: 1,
          },
          0
        );

      // const tl = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: appRef.current,
      //     start: "60% top",
      //     end: "150% top",
      //     toggleActions: "play none none reverse",
      //     markers: true,
      //     scrub: false,
      //   },
      // });

      const items = document.querySelectorAll(`.${styles.gridItemWrapper}`);

      const worksParent = document.querySelector(".worksParent");
      // console.log("items", items);
      items.forEach((item, index) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: appRef.current,
            start: `+=${4 * scrollValue / 6 + index * 50} top`,
            end: `+=${5 * scrollValue / 6 + 50 + index * 50} top`,
            toggleActions: "play none none reverse",
            scrub: true,
          },
        });
        const image = item.querySelector(".gridImage");
        const prevItem = items[index - 1];
        const imagePrev = prevItem
          ? prevItem.querySelector(".gridImage")
          : null;
        boxItemRefs.current[index] = item as HTMLDivElement;
        boxItemImageRefs.current[index] = image as HTMLDivElement;

        tl.to(
          item,

          { background: "#0500FF", duration: 0.5 },
          index
        ).to(image, { scale: 2.3, y: -50, duration: 0.5 }, index);

        if (prevItem && imagePrev) {
          tl.to(
            prevItem,
            {
              background: "linear-gradient(180deg, #161618 0%, #101a4f 100%)",
              duration: 0,
            },
            index
          ).to(imagePrev, { scale: 1, y: 0, duration: 0.5 }, index);
        }
      });
      const workRef = document.querySelectorAll(".worksParent");
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: appRef.current,
          start: `+=${scrollValue + 100} top`,
          end: `+=${scrollValue + 50} top`,
          toggleActions: "play none none reverse",
          scrub: false,
        },
      });

      tl2
        .to(
          [discoverRef.current, learnRef.current, engageRef.current],
          {
            top: "10%",
            opacity: 0,
            duration: 1,
            stagger: 0.3,
          },
          0
        )
        .to(
          gridParentRef.current,
          {
            bottom: "-50%",
            opacity: 0,
            duration: 1,
          },
          0
        )
        .to(
          headerRef.current,
          {
            y: -50,
            opacity: 0,
          },
          0
        ).to(worksParent, {
          opacity: 1,
          duration: 0,
          zIndex: 50,
        }, 0)
        .to(
          appRef.current,
          {
            opacity: 0,
            duration: 0,
            zIndex: 5,
            position: "relative",
            height: 0
          },
          0
        )
    }
  }, []);

  return (
    <div className={`${styles.heroSectionParent} heroParent`} ref={appRef}>
      <Header headerRef={headerRef} />
      <div className={styles.rectangle} ref={rectangleRef}>
        <div className={` ${styles.tagline}`} ref={taglineRef}>
          <div
            className={`${styles.discoverWord} ${styles.taglineword}  ${styles.activetextopacity} `}
            ref={discoverRef}
          >
            Discover
            <span className={styles.headingDot}>.</span>
          </div>
          <div
            className={`${styles.learnWord} ${styles.taglineword} ${styles.activetextopacity}`}
            ref={learnRef}
          >
            Learn
            <span className={styles.headingDot}>.</span>
          </div>
          <div
            className={`${styles.engageWord} ${styles.taglineword}  ${styles.activetextopacity}`}
            ref={engageRef}
          >
            Engage
            <span className={styles.headingDot}>.</span>
          </div>
        </div>
        <div className={`${styles.illustrationsParent} `}>
          <div className={styles.hiddenIllustration} ref={discoverImageRef}>
            <Image
              src="/assets/img/Discover_compressed.svg"
              className={styles.textIllustration}
              width={500}
              height={500}
              alt="Discover Illustration"
            />
          </div>
          <div className={styles.hiddenIllustration} ref={learnImageRef}>
            <Image
              src="/assets/img/Learn_compressed.svg"
              className={styles.textIllustration}
              width={500}
              height={500}
              alt="Learn Illustration"
            />
          </div>
          <div className={styles.hiddenIllustration} ref={engageImageRef}>
            <Image
              src="/assets/img/Engage_compressed.svg"
              className={styles.textIllustration}
              width={500}
              height={500}
              alt="Engage Illustration"
            />
          </div>
        </div>
        <MovingCircle />

        <div className={styles.grid} ref={gridParentRef}>
          {items.map((item, index) => (
            <div
              key={index}
              className={styles.gridItemWrapper}
              ref={(el: HTMLDivElement | null) => {
                if (el) {
                  boxItemRefs.current[index] = el;
                }
              }}
            >
              <div className={styles.gridItem}>
                <Image
                  src={item.imgSrc}
                  alt={item.text}
                  width={250}
                  height={250}
                  className="gridImage"
                  ref={(el: HTMLDivElement | null) => {
                    if (el) {
                      boxItemImageRefs.current[index] = el;
                    }
                  }}
                />
                <div className={styles.text}>{item.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
